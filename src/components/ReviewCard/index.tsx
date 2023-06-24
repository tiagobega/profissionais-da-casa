import { FlexBox } from "components/FlexBox";
import { InfoContainer, ReviewContainer } from "./styles";
import profile from "assets/images/profile-placeholder.jpeg";
import { CaretRight, Star } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { Button } from "components/Button";

export type ReviewType = {};

export interface ReviewCardProps {
  customerName: string;
  professionalName: string;
  rating: number;
  id: number;
  status: "approved" | "refused" | "analysis";
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  customerName,
  professionalName,
  rating,
  id,
  status,
}) => {
  const starArray = new Array(rating);
  console.log(starArray);

  const { color } = useTheme();
  return (
    <ReviewContainer status={status}>
      <img src={profile} alt="" />
      <InfoContainer direction="column" gap={0.75}>
        <p>
          <strong>{customerName}</strong> sobre
          <strong> {professionalName}</strong>
        </p>
        <FlexBox gap={1}>
          {starArray.map(() => (
            <Star weight="fill" color={color.secondary.yellow} size={36} />
          ))}
        </FlexBox>
      </InfoContainer>
      {status == "analysis" && <Button background="white">Analisar</Button>}
      {status == "approved" && (
        <FlexBox direction="column" gap={1}>
          <FlexBox gap={1}>
            <Button background="white">Excluir</Button>
            <Button background="white">Analisar</Button>
          </FlexBox>
          <Button variant="text">
            Deixar em espera <CaretRight weight="fill" />
          </Button>
        </FlexBox>
      )}
      {status == "refused" && (
        <FlexBox direction="column" gap={1}>
          <FlexBox gap={1}>
            <Button background="white">Postar</Button>
            <Button background="white">Analisar</Button>
          </FlexBox>
          <Button variant="text">
            Deixar em espera <CaretRight weight="fill" />
          </Button>
        </FlexBox>
      )}
    </ReviewContainer>
  );
};
