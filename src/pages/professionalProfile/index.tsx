import {
  Camera,
  CaretLeft,
  CaretRight,
  DownloadSimple,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  Star,
  UploadSimple,
  User,
  Warehouse,
} from "@phosphor-icons/react";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { useNavigate, useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import {
  GalleryContainer,
  GrayContainer,
  HeaderContainer,
  InformationContainer,
  ProfilePicture,
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
import { FormAddImage } from "components/Forms/FormAddImage";
import { Modal } from "components/Modal";
import { FormAddProfessionalProfilePicture } from "components/Forms/FormAddProfessionalProfilePicture";
import { FormContactProfessional } from "components/Forms/FormSendContact";

export interface ProfessionalProfileProps {}
export const ProfessionalProfilePage: React.FC<
  ProfessionalProfileProps
> = () => {
  const { id } = useParams();
  const { color } = useTheme();
  const navigate = useNavigate();

  const theme = useTheme();

  const [isOwn, setIsOwn] = useState(false);

  const [pageProfessional, setPageProfessional] = useState<Professional>();

  const [displayProject, setDisplayProject] = useState(0);
  const [displayReview, setDisplayReview] = useState(0);

  const [modalPicture, setModalPicture] = useState(false);
  const [modalContact, setModalContact] = useState(false);

  const { user, professional } = useApi();
  const { me } = user;

  const { getSingle } = professional;

  const fetchProfessional = async (id: string) => {
    const professionalResponse = await getSingle({
      userId: id,
    });

    if (!professionalResponse) return;

    setPageProfessional(professionalResponse);
  };

  useEffect(() => {
    if (!me || !id) return navigate("/catalog");

    const ownPage = id === me.id;
    setIsOwn(ownPage);

    fetchProfessional(id);
  }, [id]);

  if (!pageProfessional) return <Loading />;

  const carrouselButtonArray = new Array(
    Math.ceil(pageProfessional.portfolioProjects.length / 2)
  ).fill("");
  const publicEvaluations = approvedEvaluations(pageProfessional.evaluations);

  const socialMediaIcon = (name: string) => {
    switch (name) {
      case "Facebook":
        return <FacebookLogo size={40} weight="fill" />;
        break;

      case "LinkedIn":
        return <LinkedinLogo size={40} weight="fill" />;
        break;

      case "Instagram":
        return <InstagramLogo size={40} weight="fill" />;
        break;

      case "Facebook":
        return <FacebookLogo size={40} weight="fill" />;
        break;
      default:
        break;
    }
  };

  return (
    <>
      <GrayContainer isOwn={isOwn}>
        <MarginContainer>
          <Button variant="text" onClick={() => navigate(-1)}>
            <CaretLeft weight="fill" /> Voltar
          </Button>
        </MarginContainer>

        <HeaderContainer isOwn={isOwn}>
          <FlexBox
            full
            justifyContent="space-between"
            alignItems="center"
            gap={2}
          >
            {isOwn && <ProfileManager professional={pageProfessional} />}
            <FlexBox full direction="column">
              <FlexBox alignItems="center" gap={2}>
                <ProfilePicture centralized>
                  {isOwn && (
                    <Button
                      variant="text"
                      color="white"
                      className="pictureButton"
                      onClick={() => setModalPicture(true)}
                    >
                      <Camera weight="fill" /> Trocar foto
                    </Button>
                  )}
                  {pageProfessional.profilePicture ? (
                    <img
                      src={pageProfessional.profilePicture}
                      alt="Foto de perfil do usuário"
                      className="userPicture"
                    />
                  ) : (
                    <User color="white" weight="light" className="userIcon" />
                  )}
                </ProfilePicture>
                <InformationContainer direction="column" gap={1}>
                  <FlexBox alignItems="center" gap={2}>
                    <h2>{pageProfessional.name}</h2>
                    <FlexBox alignItems="center" gap={0.5}>
                      <MapPin weight="fill" />
                      <FlexBox>
                        {pageProfessional.locations.map((item) => (
                          <p key={item.id}>{`${item.state} |`} </p>
                        ))}

                        {pageProfessional.onlineAppointment && (
                          <p>Atendimento online</p>
                        )}
                      </FlexBox>
                    </FlexBox>
                    {pageProfessional.socialMedias.map((media) => (
                      <a key={media.id} href={media.link} target="_blank">
                        {socialMediaIcon(media.name)}
                      </a>
                    ))}
                  </FlexBox>
                  <FlexBox full>
                    <p>{pageProfessional.description}</p>
                  </FlexBox>
                  <FlexBox gap={5} alignItems="center">
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
                    {pageProfessional.portfolioFile && (
                      <a
                        href={pageProfessional.portfolioFile}
                        target="_blank"
                        download
                      >
                        <Button variant="text">
                          <DownloadSimple weight="bold" size={20} />
                          Abrir portifólio do profissional
                        </Button>
                      </a>
                    )}
                  </FlexBox>
                </InformationContainer>
              </FlexBox>
              <ul className="category-list">
                {pageProfessional.tags.length > 0 &&
                  pageProfessional.tags
                    .split(",")
                    .map((item, key) => <li key={key}>{item}</li>)}
              </ul>
            </FlexBox>
            {!isOwn && (
              <FlexBox direction="column">
                <Button
                  variant="primary"
                  background={color.brand.yellowLight}
                  width={10}
                  onClick={() => setModalContact(true)}
                >
                  Entrar em contato
                </Button>
              </FlexBox>
            )}
          </FlexBox>
        </HeaderContainer>
      </GrayContainer>

      {pageProfessional.portfolioProjects.length > 0 ? (
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
      ) : (
        <FlexBox full centralized mb={2} gap={2}>
          <Warehouse size={64} color={theme.color.brand.orange} />
          <h2>
            O profissional ainda não adicionou nenhum projeto
            <br />
            ao seu portifólio do profissionais da casa.
          </h2>
        </FlexBox>
      )}

      <ReviewSection>
        {publicEvaluations.evaluations.length > 0 ? (
          <>
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
                  <StarMeter
                    rating={publicEvaluations.functionality}
                    size={16}
                  />
                </div>
                <div>
                  <p>Qualidade das Entregas</p>
                  <StarMeter rating={publicEvaluations.quality} size={16} />
                </div>
                <div>
                  <p>Relacionamento com o Cliente</p>
                  <StarMeter
                    rating={publicEvaluations.relationship}
                    size={16}
                  />
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
                    onClick={() => navigate(`/review/${pageProfessional.id}`)}
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
          </>
        ) : (
          <FlexBox gap={2} alignItems="center">
            <h2>Ainda não há depoimentos para este profissional</h2>{" "}
            {!isOwn && (
              <Button
                variant="outline"
                color={theme.color.secondary.lightTeal}
                onClick={() => navigate(`/review/${pageProfessional.id}`)}
              >
                Adicionar
              </Button>
            )}
          </FlexBox>
        )}
      </ReviewSection>
      <Modal
        isOpened={modalPicture}
        onClose={() => {
          setModalPicture(false);
        }}
        small
      >
        <FlexBox direction="column" centralized gap={3}>
          <FormAddProfessionalProfilePicture
            close={() => setModalPicture(false)}
            onSuccess={(professional) => setPageProfessional(professional)}
            professionalProfile={pageProfessional}
          />
        </FlexBox>
      </Modal>

      <Modal
        isOpened={modalContact}
        onClose={() => {
          setModalContact(false);
        }}
        small
      >
        <FlexBox direction="column" centralized gap={3}>
          <FormContactProfessional
            professional={pageProfessional}
            onClose={() => {
              setModalContact(false);
            }}
          />
        </FlexBox>
      </Modal>
    </>
  );
};
