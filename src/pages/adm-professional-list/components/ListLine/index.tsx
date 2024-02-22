import { FlexBox } from "components/FlexBox";
import { Star } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { Button } from "components/Button";
import { Line } from "./styles";
import { Me, Professional } from "services/User/types";
import { useNavigate } from "react-router-dom";
import { approvedEvaluations } from "utils/EvaluationAverage";
import { formatShortDate } from "utils/dateFormat";

export interface ProfessionalListLineProps {
  professional: Professional;
  user: Me;
}

export const ProfessionalListLine: React.FC<ProfessionalListLineProps> = ({
  professional,
  user,
}) => {
  const isApproved = user.active ? "approved" : "inapproved";
  const { color } = useTheme();

  const navigate = useNavigate();
  const { average } = approvedEvaluations(professional.evaluations);

  return (
    <Line full justifyContent="space-between" py={0.5} alignItems="center">
      <FlexBox gap={1}>
        <div className="name">{professional.name}</div>
        <div className="birth-date">
          {formatShortDate(professional.createdAt)}
        </div>
        <div className="email">{user.email}</div>
        <div className="phone">{user.phone}</div>
        {isApproved && (
          <div className="rating">
            <Star weight="fill" color={color.secondary.yellow} /> : {average}
          </div>
        )}
      </FlexBox>
      <Button
        variant="outline"
        small
        onClick={() => navigate(`/admin/professionals-management/${user.id}`)}
      >
        detalhar
      </Button>
    </Line>
  );
};
