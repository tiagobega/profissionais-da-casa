import { type Professional } from "services/User/types";

import {
  Camera,
  CaretLeft,
  CaretRight,
  DownloadSimple,
  MapPin,
  Star,
  User,
  Warehouse,
} from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { FormAddProfessionalProfilePicture } from "components/Forms/FormAddProfessionalProfilePicture";
import { FormContactProfessional } from "components/Forms/FormSendContact";
import { Loading } from "components/Loading";
import { Modal } from "components/Modal";
import { StarMeter } from "components/StarMeter";

import { CarouselButton, MarginContainer } from "styles/commonComponents";

import { useApi } from "contexts/User";
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import {
  approvedEvaluations,
  evaluationSingleAverage,
} from "utils/EvaluationAverage";
import { ProfileManager } from "./ProfileManager";
import {
  ActionsContainer,
  FeaturesContainer,
  GalleryNotFound,
  GallerySection,
  HeaderContainer,
  InformationContainer,
  LocationList,
  ProfilePicture,
  RatingContainer,
  RatingHeader,
  ReviewContainer,
  ReviewSection,
  ReviewsNotFound,
  SocialList,
  TagList,
  TextsContainer,
} from "./styles";
import { socialMediaIcon } from "utils/socialMediaLogo";
import { Page } from "components/Page";

export interface ProfessionalProfileProps {}
export const ProfessionalProfilePage: React.FC<
  ProfessionalProfileProps
> = () => {
  const { id } = useParams();

  const theme = useTheme();
  const { color } = theme;

  const navigate = useNavigate();

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

  const socialMediaLink = (link: string) => {
    if (link[0] == "@") {
      return `https://www.instagram.com/${link.substring(1)}`;
    } else {
      return link;
    }
  };

  if (!pageProfessional) return <Loading />;

  pageProfessional.portfolioProjects.length;

  const carrouselButtonArray = (
    itemQuantity: number,
    quantityDisplayed: number
  ) => {
    const array = new Array(Math.ceil(itemQuantity / quantityDisplayed)).fill(
      ""
    );

    return array;
  };

  const publicEvaluations = approvedEvaluations(pageProfessional.evaluations);

  return (
    <Page paddingY={false}>
      <FlexBox mt={2}>
        <Button variant="text" onClick={() => navigate(-1)}>
          <CaretLeft weight="fill" /> Voltar
        </Button>
      </FlexBox>

      <HeaderContainer full isOwn={isOwn} direction="column" gap={1}>
        <InformationContainer full gap={1} alignItems="center">
          <ProfilePicture centralized shrink={0}>
            {!isOwn && (
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
                loading="lazy"
              />
            ) : (
              <User
                color="white"
                weight="light"
                className="userIcon"
                size="24"
              />
            )}
          </ProfilePicture>

          <TextsContainer full direction="column" gap={0.5} grow={1}>
            <h2>{pageProfessional.name}</h2>
            <p>{pageProfessional.description}</p>
          </TextsContainer>

          <ActionsContainer
            direction="column"
            gap={0.25}
            alignItems="center"
            px={2}
            pt={1}
            pb={2}
          >
            {isOwn && (
              <ProfileManager
                professional={pageProfessional}
                refetch={() => id && fetchProfessional(id)}
              />
            )}

            {!isOwn && (
              <Button
                variant="primary"
                background={color.brand.yellowLight}
                width={10}
                onClick={() => setModalContact(true)}
              >
                Entrar em contato
              </Button>
            )}
            {pageProfessional.portfolioFile && isOwn && (
              <a href={pageProfessional.portfolioFile} target="_blank" download>
                <Button variant="outline">
                  <DownloadSimple weight="bold" size={20} />
                  Abrir portifólio do profissional
                </Button>
              </a>
            )}
          </ActionsContainer>
        </InformationContainer>

        <FlexBox full gap={2} alignItems="center" justifyContent="center">
          <RatingHeader>
            <div className="rating">
              <Star weight="fill" size={32} color={color.secondary.yellow} />
              <p>{publicEvaluations.average}</p>
              <span>({publicEvaluations.quantity})</span>
            </div>
          </RatingHeader>
        </FlexBox>
      </HeaderContainer>

      <FeaturesContainer>
        <Feature title={"Tags"}>
          {!pageProfessional.tags.length && <p> Não há Tags cadastradas</p>}
          <TagList>
            {pageProfessional.tags.length > 0 &&
              pageProfessional.tags
                .split(",")
                .map((item, key) => <li key={key}>{item}</li>)}
          </TagList>
        </Feature>

        <Feature title={"Locais de atuação"}>
          {pageProfessional.locations.length === 0 &&
            !pageProfessional.onlineAppointment && (
              <p>Não há locais de atuação cadastrados</p>
            )}
          <LocationList>
            {pageProfessional.locations.map((item) => (
              <li key={item.id}>{`${item.state}`} </li>
            ))}

            {pageProfessional.onlineAppointment && <li>Atendimento online</li>}
          </LocationList>
        </Feature>

        <Feature title={"Redes Sociais"}>
          {pageProfessional.socialMedias.length === 0 && (
            <p>Não há redes sociais cadastradas</p>
          )}

          <SocialList>
            {pageProfessional.socialMedias.map((media) => (
              <a
                key={media.id}
                href={socialMediaLink(media.link)}
                target="_blank"
              >
                {socialMediaIcon(media.name)}
              </a>
            ))}
          </SocialList>
        </Feature>
      </FeaturesContainer>

      <GallerySection>
        {pageProfessional.portfolioProjects.length > 0 ? (
          <>
            <div className="gallery-bg">
              <img
                src={
                  pageProfessional.portfolioProjects[
                    displayProject
                  ].images.split(",")[0]
                }
                alt="project image"
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-info">
                <FlexBox direction="column" gap={0.5}>
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
              {carrouselButtonArray(
                pageProfessional.portfolioProjects.length,
                1
              ).map((item, index) => (
                <CarouselButton
                  isActive={displayProject == index}
                  className="carousel-btn"
                  onClick={() => setDisplayProject(index)}
                  key={item.id}
                />
              ))}
            </FlexBox>
          </>
        ) : (
          <GalleryNotFound
            full
            direction="column"
            centralized
            media={{ lg: { gap: 2, direction: "row" } }}
          >
            <Warehouse size={64} color={theme.color.brand.orange} />
            <h2>
              O profissional ainda não adicionou nenhum projeto ao seu
              portifólio do profissionais da casa.
            </h2>
          </GalleryNotFound>
        )}
      </GallerySection>

      <ReviewSection>
        {publicEvaluations.evaluations.length > 0 ? (
          <FlexBox
            full
            alignItems="center"
            direction="column"
            gap={2}
            media={{ lg: { direction: "row", alignItems: "stretch" } }}
          >
            <RatingContainer
              alignItems="center"
              direction="column"
              justifyContent="flex-start"
              gap={1}
              full
            >
              <FlexBox
                full
                justifyContent={"center"}
                gap={1}
                media={{ lg: { justifyContent: "flex-start" } }}
              >
                <Star weight="fill" color={color.secondary.yellow} size={45} />
                <p className="rating">{publicEvaluations.average}</p>
                <p className="quantity">({publicEvaluations.quantity})</p>
              </FlexBox>

              <FlexBox full alignItems="flex-start" gap={1} direction="column">
                <ReviewCategory
                  title="Custo"
                  quantity={publicEvaluations.cost}
                />
                <ReviewCategory
                  title="Prazo"
                  quantity={publicEvaluations.deadlines}
                />
                <ReviewCategory
                  title="Funcionalidade"
                  quantity={publicEvaluations.functionality}
                />
                <ReviewCategory
                  title="Qualidade das Entregas"
                  quantity={publicEvaluations.quality}
                />
                <ReviewCategory
                  title="Relacionamento com o Cliente"
                  quantity={publicEvaluations.relationship}
                />
              </FlexBox>
            </RatingContainer>

            <FlexBox full direction="column" alignItems="center" gap={3}>
              <FlexBox
                direction="column"
                full
                centralized
                gap={1}
                media={{
                  lg: {
                    direction: "row",
                  },
                }}
              >
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
                media={{ lg: { h: "100%" } }}
              >
                <ReviewContainer
                  direction="column"
                  alignItems="center"
                  gap={1}
                  media={{ lg: { h: "100%", justifyContent: "space-between" } }}
                >
                  <div className="reviewDisplay">
                    {publicEvaluations.evaluations
                      .slice(displayReview, displayReview + 2)
                      .map((item) => (
                        <div className="review-item" key={item.id}>
                          <p>{item.description}</p>
                          <StarMeter rating={evaluationSingleAverage(item)} />
                        </div>
                      ))}
                  </div>
                  <FlexBox full justifyContent="center" gap={1} p={1}>
                    {carrouselButtonArray(publicEvaluations.quantity, 2).map(
                      (item, index) => (
                        <CarouselButton
                          isActive={displayReview / 2 == index}
                          className="carousel-btn"
                          onClick={() => setDisplayReview(index * 2)}
                          key={item.id}
                        />
                      )
                    )}
                  </FlexBox>
                </ReviewContainer>
              </FlexBox>
            </FlexBox>
          </FlexBox>
        ) : (
          <ReviewsNotFound
            gap={1}
            direction="column"
            alignItems="center"
            media={{
              lg: {
                direction: "row",
                centralized: true,
                gap: 2,
              },
            }}
          >
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
          </ReviewsNotFound>
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
      >
        <FlexBox direction="column" centralized gap={3}>
          <FormContactProfessional
            professional={pageProfessional}
            onSend={() => {
              ReactGA.event(
                {
                  action: "click",
                  category: "contact",
                  label: `contact_${pageProfessional.name}`,
                },
                {
                  professional: pageProfessional.name,
                }
              );
            }}
            onClose={() => {
              setModalContact(false);
            }}
          />
        </FlexBox>
      </Modal>
    </Page>
  );
};

export const Feature = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <FlexBox
    direction="column"
    alignItems="center"
    gap={0.5}
    media={{ lg: { gap: 1.5 } }}
  >
    <h3>{title}</h3>
    {children}
  </FlexBox>
);

export const ReviewCategory = ({
  quantity,
  title,
}: {
  quantity: number;
  title: string;
}) => (
  <FlexBox direction="column" gap={0.25}>
    <p>{title}</p>
    <StarMeter rating={quantity} size={16} />
  </FlexBox>
);
