import { NameValueType } from "Models/models";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { MarginContainer } from "styles/commonComponents";
import {
  ContentBox,
  ContentContainer,
  ContentHeader,
  Header,
  InfoContainer,
} from "./styles";
import { filterRating } from "utils/filterList";
import { useTheme } from "styled-components";
import { StarMeter } from "components/StarMeter";
import { RatingType } from "..";
import photo1 from "assets/images/profile-placeholder.jpg";
import photo2 from "assets/images/profile-placeholder.jpeg";
import { CaretLeft } from "@phosphor-icons/react";

export interface AdmRatingListProps {}

export type RatingStatusOptions = "approved" | "refused" | "analysis";

const rating: RatingType = {
  id: "h3u22n",
  userName: "Fernanda Akihabara Albuquerque Martins",
  userMail: "fernanda_aa_martins@zipmail.com",
  userPhone: "(11) 98765-4321",
  date: "12/09/2022",
  professionalName: "Santana Soluções em Projetos",
  professionalMail: "contato@santanaprojetos.com.br",
  professionalPhone: "(11) 12345-6789",
  rating: 4,
  review:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia pariatur deserunt, impedit dolor tenetur commodi molestiae earum veniam assumenda vero.",
  status: "analysis",
};

export const AdmRatingDetails: React.FC<AdmRatingListProps> = () => {
  const { color } = useTheme();
  return (
    <MarginContainer>
      <Header>
        <h1>Detalhes do depoimento</h1>
      </Header>
      <ContentContainer>
        <ContentBox direction="column" status={rating.status}>
          <ContentHeader direction="column" full gap={1}>
            <FlexBox
              full
              justifyContent="space-between"
              gap={2}
              alignItems="center"
            >
              <FlexBox gap={1} alignItems="center">
                <img src={photo1} />
                <InfoContainer direction="column" wrap={"wrap"}>
                  <strong>{rating.userName}</strong>
                  <p className="contact">{rating.userMail}</p>
                  <p className="contact">{rating.userPhone}</p>
                </InfoContainer>
              </FlexBox>
              <FlexBox gap={1}>
                <img src={photo2} />
                <InfoContainer direction="column">
                  <strong>{rating.professionalName}</strong>
                  <p className="contact">{rating.professionalMail}</p>
                  <p className="contact">{rating.professionalPhone}</p>
                </InfoContainer>
              </FlexBox>
            </FlexBox>
            <p>
              Data de envio: <strong>{rating.date}</strong>
            </p>
          </ContentHeader>
          <FlexBox direction="column" gap={1} mt={1}>
            <StarMeter rating={4} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              odit repellendus cupiditate repellat vel sit, commodi sequi
              temporibus enim non ab ullam aut nobis possimus eius. Eaque quas,
              vel rerum ipsam eligendi, quae error, nam numquam est veritatis
              modi ullam laudantium minus atque? Odit inventore voluptates ipsam
              sequi omnis deleniti sit minima dolore neque, aperiam voluptate
              consequatur dignissimos magni a nobis, maiores fugit. Quisquam
              ducimus laboriosam beatae cupiditate earum possimus neque soluta.
              Saepe dicta ipsam odio unde aspernatur.
            </p>
          </FlexBox>

          {rating.status == "analysis" && (
            <FlexBox gap={1.5} mt={2} alignItems="center">
              <Button background={color.secondary.blue} color="white">
                Publicar
              </Button>
              <Button variant="outline">Excluir</Button>
              <Button variant="text">
                <CaretLeft weight="fill" />
                Voltar
              </Button>
            </FlexBox>
          )}
          {rating.status == "refused" && (
            <FlexBox gap={1.5} mt={2} alignItems="center">
              <Button background={color.secondary.blue} color="white">
                Publicar
              </Button>
              <Button variant="outline">Deixar em espera</Button>
              <Button variant="text">
                <CaretLeft weight="fill" />
                Voltar
              </Button>
            </FlexBox>
          )}
          {rating.status == "approved" && (
            <FlexBox gap={1.5} mt={2} alignItems="center">
              <Button>Excluir</Button>
              <Button variant="outline">Deixar em espera</Button>
              <Button variant="text">
                <CaretLeft weight="fill" />
                Voltar
              </Button>
            </FlexBox>
          )}
        </ContentBox>
      </ContentContainer>
    </MarginContainer>
  );
};
