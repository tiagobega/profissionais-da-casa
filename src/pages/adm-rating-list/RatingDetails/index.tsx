import { CaretLeft } from "@phosphor-icons/react";
import photo2 from "assets/images/profile-placeholder.jpeg";
import photo1 from "assets/images/profile-placeholder.jpg";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { StarMeter } from "components/StarMeter";
import { useTheme } from "styled-components";
import { MarginContainer } from "styles/commonComponents";
import { RatingType } from "..";
import {
  ContentBox,
  ContentContainer,
  ContentHeader,
  Header,
  InfoContainer,
} from "./styles";

export interface AdmRatingListProps {
  evaluation: RatingType;
}

export const AdmRatingDetails: React.FC<AdmRatingListProps> = ({
  evaluation,
}) => {
  const { color } = useTheme();
  return (
    <MarginContainer>
      <Header>
        <h1>Detalhes do depoimento</h1>
      </Header>
      <ContentContainer>
        <ContentBox direction="column" status={evaluation.evaluation.status}>
          <ContentHeader direction="column" full gap={1}>
            <FlexBox
              full
              justifyContent="space-between"
              gap={2}
              alignItems="center"
            >
              <FlexBox gap={1} alignItems="center">
                <img src={photo1} loading="lazy" />
                <InfoContainer direction="column" wrap={"wrap"}>
                  <strong>{evaluation.user.name}</strong>
                  <p className="contact">{evaluation.user.email}</p>
                  <p className="contact">{evaluation.user.phone}</p>
                </InfoContainer>
              </FlexBox>
              <FlexBox gap={1}>
                <img src={photo2} loading="lazy" />
                <InfoContainer direction="column">
                  <strong>{evaluation.professional.name}</strong>
                  {/* <p className="contact">{evaluation.professional.email}</p> */}
                  <p className="contact">{evaluation.professional.phone}</p>
                </InfoContainer>
              </FlexBox>
            </FlexBox>
            {/* <p>
              Data de envio: <strong>{evaluation.evaluatio}</strong>
            </p> */}
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

          {evaluation.evaluation.status == "pending" && (
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
          {evaluation.evaluation.status == "refused" && (
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
          {evaluation.evaluation.status == "approved" && (
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
