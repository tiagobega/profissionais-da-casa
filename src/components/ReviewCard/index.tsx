import { FlexBox } from "components/FlexBox";
import { InfoContainer, ReviewContainer } from "./styles";
import profile from "assets/images/profile-placeholder.jpeg";
import { CaretRight, Star } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { Button } from "components/Button";
import { starsArray } from "utils/starsArray";
import { StarMeter } from "components/StarMeter";
import { EvaluationStatus } from "constants/evaluation";

export type ReviewType = {};

export interface ReviewCardProps {
  customerName: string;
  professionalName: string;
  rating: number;
  id: string;
  status: EvaluationStatus;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  customerName,
  professionalName,
  rating,
  id,
  status,
}) => {
  const { color } = useTheme();
  return (
    <ReviewContainer status={status}>
      <img src={profile} alt="" />
      <InfoContainer direction="column" gap={0.5}>
        <p>
          <strong>{customerName}</strong>
          <br />
          sobre
          <strong> {professionalName}</strong>
        </p>
        <FlexBox gap={1}>
          <StarMeter rating={rating} />
        </FlexBox>
      </InfoContainer>
      {status == "pending" && (
        <Button small background="white">
          Analisar
        </Button>
      )}
      {status == "approved" && (
        <FlexBox direction="column" gap={1}>
          <FlexBox gap={1}>
            <Button small background="white">
              Excluir
            </Button>
            <Button small background="white">
              Analisar
            </Button>
          </FlexBox>
          <Button small variant="text">
            Deixar em espera <CaretRight weight="fill" />
          </Button>
        </FlexBox>
      )}
      {status == "refused" && (
        <FlexBox direction="column" gap={1}>
          <FlexBox gap={1}>
            <Button small background="white">
              Postar
            </Button>
            <Button small background="white">
              Analisar
            </Button>
          </FlexBox>
          <Button variant="text">
            Deixar em espera <CaretRight weight="fill" />
          </Button>
        </FlexBox>
      )}
    </ReviewContainer>
  );
};
