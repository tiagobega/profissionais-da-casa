import { CaretLeft, CaretRight, MapPin, Star } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { useNavigate, useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import {
  GalleryContainer,
  GrayContainer,
  HeaderContainer,
  RatingContainer,
  RatingHeader,
  ReviewContainer,
  ReviewSection,
} from "./styles";
import { useEffect, useState } from "react";
import { CarouselButton, MarginContainer } from "styles/commonComponents";
import { ProfileManager } from "./ProfileManager";
import { StarMeter } from "components/StarMeter";
import { useApi, useUser, userContext } from "contexts/User";
import { Evaluation, Professional } from "services/User/types";
import { Loading } from "components/Loading";
import {
  approvedEvaluations,
  evaluationAverage,
  evaluationCategoryAverage,
  evaluationSingleAverage,
} from "utils/EvaluationAverage";

export interface ProfessionalProfileProps {}
export const ProfessionalProfilePage: React.FC<
  ProfessionalProfileProps
> = () => {
  const { color } = useTheme();
  const navigate = useNavigate();
  const theme = useTheme();
  const { id } = useParams();
  console.log(id);
  const [isOwn, setIsOwn] = useState(false);
  const [pageProfessional, setPageProfessional] = useState<Professional>();

  const [displayProject, setDisplayProject] = useState(0);
  const [displayReview, setDisplayReview] = useState(0);

  const { user, professional } = useApi();
  const { me } = user;
  const { getSingle, myProfessional } = professional;

  useEffect(() => {
    async () => {
      if (!id) return;
      const professional = await getSingle({ userId: id });
      professional && setPageProfessional(professional);
      if (!myProfessional) {
        setIsOwn(false);
      } else {
        myProfessional.id == id && setIsOwn(true);
      }
    };
  }, [id]);

  if (!pageProfessional) return <Loading />;
  const carrouselButtonArray = new Array(
    Math.ceil(pageProfessional.portfolioProjects.length / 2)
  ).fill("");
  const publicEvaluations = approvedEvaluations(pageProfessional.evaluations);
  return (
    <>
      <GrayContainer isOwn={isOwn}>
        <MarginContainer>
          <Button variant="text" onClick={() => navigate(-1)}>
            <CaretLeft weight="fill" /> Voltar
          </Button>
        </MarginContainer>
        <HeaderContainer>
          <FlexBox
            full
            justifyContent="space-between"
            alignItems="center"
            gap={5}
          >
            {isOwn && <ProfileManager professional={pageProfessional} />}
            <FlexBox full direction="column">
              <FlexBox alignItems="center" gap={2}>
                <img
                  src={pageProfessional.profilePicture}
                  alt="profile picture"
                  className="profile-img"
                />
                <FlexBox direction="column" gap={1}>
                  <FlexBox alignItems="center" gap={2}>
                    <h2>{pageProfessional.name}</h2>
                    <FlexBox alignItems="center" gap={0.5}>
                      <MapPin weight="fill" />
                      <FlexBox>
                        {pageProfessional.locations.map((item) => (
                          <p key={item.id}>{item.state} | </p>
                        ))}
                        {pageProfessional.onlineAppointment && (
                          <p>
                            Realiza atendimento online em outras localidades
                          </p>
                        )}
                      </FlexBox>
                    </FlexBox>
                  </FlexBox>
                  <RatingHeader alignItems="center" gap={2}>
                    <div className="rating">
                      <Star
                        weight="fill"
                        size={32}
                        color={color.secondary.yellow}
                      />
                      <p>{publicEvaluations.average}</p>
                      <span>({publicEvaluations.quantity})</span>
                    </div>
                  </RatingHeader>
                </FlexBox>
              </FlexBox>
              <ul className="category-list">
                {pageProfessional.tags.split(",").map((item) => (
                  <li key={Math.random()}>{item}</li>
                ))}
              </ul>
            </FlexBox>
            {!isOwn && (
              <FlexBox direction="column">
                <Button
                  variant="primary"
                  background={color.brand.yellowLight}
                  width={10}
                >
                  Entrar em contato
                </Button>
              </FlexBox>
            )}
          </FlexBox>
        </HeaderContainer>
      </GrayContainer>
      {pageProfessional.portfolioProjects.length > 0 && (
        <GalleryContainer>
          <div className="gallery-bg">
            <img
              src={pageProfessional.portfolioProjects[displayProject].images[0]}
              alt="project image"
              className="gallery-img"
            />
            <div className="gallery-info">
              <FlexBox direction="column" gap={1}>
                <h5>
                  {pageProfessional.portfolioProjects[displayProject].name}
                </h5>
                <p>
                  {
                    pageProfessional.portfolioProjects[displayProject]
                      .description
                  }
                </p>
                <Button
                  variant="text"
                  onClick={() =>
                    navigate(
                      `/project/${pageProfessional.portfolioProjects[displayProject].id}`
                    )
                  }
                >
                  Ver Mais
                  <CaretRight weight="fill" />
                </Button>
              </FlexBox>
            </div>
          </div>
          <FlexBox full justifyContent="center" gap={1} p={1}>
            {pageProfessional.portfolioProjects.map((item, index) => (
              <CarouselButton
                isActive={displayProject == index}
                className="carousel-btn"
                onClick={() => setDisplayProject(index)}
                key={item.id}
              />
            ))}
          </FlexBox>
        </GalleryContainer>
      )}
      {publicEvaluations.evaluations.length > 0 && (
        <ReviewSection>
          <RatingContainer
            alignItems="center"
            direction="column"
            justifyContent="flex-start"
            gap={0.5}
          >
            <FlexBox
              full
              alignItems="center"
              justifyContent="flex-start"
              gap={1}
            >
              <Star weight="fill" color={color.secondary.yellow} size={45} />
              <p className="rating">{publicEvaluations.average}</p>
              <p className="quantity">({publicEvaluations.quantity})</p>
            </FlexBox>

            <FlexBox alignItems="flex-start" gap={0.75} direction="column">
              <div>
                <p>Custo</p>
                <StarMeter rating={publicEvaluations.cost} size={16} />
              </div>
              <div>
                <p>Prazo</p>
                <StarMeter rating={publicEvaluations.deadlines} size={16} />
              </div>
              <div>
                <p>Funcionalidade</p>
                <StarMeter rating={publicEvaluations.functionality} size={16} />
              </div>
              <div>
                <p>Qualidade das Entregas</p>
                <StarMeter rating={publicEvaluations.quality} size={16} />
              </div>
              <div>
                <p>Relacionamento com o Cliente</p>
                <StarMeter rating={publicEvaluations.relationship} size={16} />
              </div>
            </FlexBox>
          </RatingContainer>
          <FlexBox direction="column" alignItems="center" gap={3}>
            <FlexBox full centralized gap={2}>
              <h3>Depoimentos</h3>
              {me?.roleRel.name != "professional" && (
                <Button
                  variant="outline"
                  color={theme.color.secondary.lightTeal}
                  small
                >
                  Adicionar
                </Button>
              )}
            </FlexBox>
            <FlexBox
              full
              justifyContent="center"
              alignItems="flex-start"
              gap={5}
            >
              <ReviewContainer direction="column" alignItems="center" gap={1}>
                <FlexBox gap={2}>
                  {publicEvaluations.evaluations
                    .slice(displayReview, displayReview + 2)
                    .map((item) => (
                      <div className="review-item" key={item.id}>
                        <p>{item.description}</p>
                        <StarMeter rating={evaluationSingleAverage(item)} />
                        {/* <strong>{item.pe}</strong> */}
                      </div>
                    ))}
                </FlexBox>
                <FlexBox full justifyContent="center" gap={1} p={1}>
                  {carrouselButtonArray.map((item, index) => (
                    <CarouselButton
                      isActive={displayReview / 2 == index}
                      className="carousel-btn"
                      onClick={() => setDisplayReview(index * 2)}
                      key={item.id}
                    />
                  ))}
                </FlexBox>
              </ReviewContainer>
            </FlexBox>
          </FlexBox>
        </ReviewSection>
      )}
    </>
  );
};
