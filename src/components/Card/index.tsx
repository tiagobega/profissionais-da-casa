import { CaretRight, Star, User } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import ReactGA from "react-ga4";
import { useTheme } from "styled-components";
import {
  ButtonContainer,
  CardContainer,
  InformationContainer,
  PhotoContainer,
  ProfileContainer,
} from "./styles";
import photoPlaceholder from "assets/images/fundo.png";
import { Tag } from "components/Tag";
import { useNavigate } from "react-router-dom";
import { Professional } from "services/User/types";
import { approvedEvaluations } from "utils/EvaluationAverage";

export interface CardProfileProps {
  professional: Professional;
}
export const CardProfile: React.FC<CardProfileProps> = ({ professional }) => {
  const { color } = useTheme();
  const navigate = useNavigate();

  const tags = professional.tags.split(",").slice(0, 3);

  return (
    <CardContainer>
      <PhotoContainer>
        <img
          src={
            professional.backgroundPicture.length > 0
              ? professional.backgroundPicture
              : photoPlaceholder
          }
          loading="lazy"
          alt="foto background"
        />
      </PhotoContainer>
      <ProfileContainer centralized>
        {professional.profilePicture.length == 0 ? (
          <User color="white" size={64} weight="light" />
        ) : (
          <img
            src={professional.profilePicture}
            alt="foto do profissional"
            loading="lazy"
          />
        )}
      </ProfileContainer>
      <InformationContainer
        direction="column"
        p={0.5}
        pt={1.5}
        justifyContent="flex-end"
        gap={1}
        full
      >
        <div>
          <p>{professional.formation}</p>
          <h3 className={`${professional.name.length > 22 ? "small" : ""}`}>
            {professional.name}
          </h3>
        </div>

        {approvedEvaluations(professional.evaluations).quantity > 0 && (
          <FlexBox alignItems="center" gap={0.5}>
            <Star size={32} weight="fill" color={color.secondary.yellow} />
            <h3>x {approvedEvaluations(professional.evaluations).average}</h3>
          </FlexBox>
        )}

        <FlexBox wrap={"wrap"} gap={0.25}>
          {tags.length > 0 &&
            tags.map((tag, index) => (
              <Tag tagName={tag} key={`${professional.id}${index}${tag}`} />
            ))}
          {professional.tags.length > 3 && <Tag tagName="..." />}
        </FlexBox>

        <ButtonContainer full justifyContent="flex-end">
          <Button
            variant="text"
            color={color.secondary.lightTeal}
            onClick={() => {
              ReactGA.event(
                {
                  action: "click",
                  category: "professional",
                  label: `professional_${professional.name}`,
                },
                {
                  name: professional.name,
                }
              );
              navigate(`/professional/${professional.userId}`);
            }}
          >
            Ver mais <CaretRight />
          </Button>
        </ButtonContainer>
      </InformationContainer>
    </CardContainer>
  );
};
