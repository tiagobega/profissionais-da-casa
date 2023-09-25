import { CaretRight, Star } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { useTheme } from "styled-components";
import {
  ButtonContainer,
  CardContainer,
  InformationContainer,
  PhotoContainer,
  ProfileContainer,
} from "./styles";
import profilePlaceholder from "assets/images/profile-placeholder.jpeg";
import photoPlaceholder from "assets/images/photo-placeholder.jpeg";
import { Tag } from "components/Tag";
import { useNavigate } from "react-router-dom";
import { Professional } from "services/User/types";

export interface CardProfileProps {
  professional: Professional;
}
export const CardProfile: React.FC<CardProfileProps> = ({ professional }) => {
  const { color } = useTheme();
  const navigate = useNavigate();

  const profile = {
    id: 1,
    name: "Andréa Albuquerque de OliveiraaaaAAAAAAAAA",
    profession: "Arquiteto(a)",
    rating: 4.5,
    tags: ["Interiores", "Reformas", "Ambientes pequenos", "Acessibilidade"],
  };

  const tags = professional.tags
    .split(",")
    .slice(0, 3)
    .filter((a) => a !== "");

  console.log(tags);

  return (
    <CardContainer>
      <PhotoContainer>
        <img src={professional.backgroundPicture} alt="foto background" />
      </PhotoContainer>
      <ProfileContainer
        src={professional.profilePicture}
        alt="foto do profissional"
      />
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

        <FlexBox alignItems="center" gap={0.5}>
          <Star size={32} weight="fill" color={color.secondary.yellow} />
          <h3>x {profile.rating}</h3>
        </FlexBox>

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
            onClick={() => navigate(`/professional/${professional.userId}`)}
          >
            Ver mais <CaretRight />
          </Button>
        </ButtonContainer>
      </InformationContainer>
    </CardContainer>
  );
};
