import { FlexBox } from "components/FlexBox";
import { ProfessionalPersonalInfo } from "../professionalList";
import { Star } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { Button } from "components/Button";
import { Line } from "./styles";

export interface ProfessionalListLineProps {
  professional: ProfessionalPersonalInfo;
}

export const ProfessionalListLine: React.FC<ProfessionalListLineProps> = ({
  professional,
}) => {
  const isApproved = professional.status == "approved";
  const { color } = useTheme();

  const starsArray = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (professional.rating <= i) stars.push(0);
      else if (professional.rating < i + 1) stars.push(1);
      else if (professional.rating >= i + 1) stars.push(2);
    }
    return stars;
  };

  return (
    <Line full justifyContent="space-between" py={0.5} alignItems="center">
      <FlexBox gap={1}>
        <div className="name">{professional.name}</div>
        <div className="birth-date">{professional.birthDate}</div>
        <div className="email">{professional.email}</div>
        <div className="phone">{professional.phone}</div>
        {isApproved && (
          <div className="rating">
            <Star weight="fill" color={color.secondary.yellow} /> :{" "}
            {professional.rating}
          </div>
        )}
      </FlexBox>
      <Button variant="outline" small>
        detalhar
      </Button>
    </Line>
  );
};
