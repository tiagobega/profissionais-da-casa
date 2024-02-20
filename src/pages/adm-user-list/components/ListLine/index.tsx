import { FlexBox } from "components/FlexBox";
import { Star } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { Button } from "components/Button";
import { Line } from "./styles";
import { Me, Professional } from "services/User/types";
import { useNavigate } from "react-router-dom";
import { approvedEvaluations } from "utils/EvaluationAverage";

export interface ProfessionalListLineProps {
  user: Me;
}

export const UserListLine: React.FC<ProfessionalListLineProps> = ({ user }) => {
  const navigate = useNavigate();

  return (
    <Line full justifyContent="space-between" py={0.5} alignItems="center">
      <FlexBox gap={1}>
        <div className="name">{user.name}</div>
        <div className="email">{user.email}</div>
        <div className="role">{user.roleRel.name}</div>
        <div className="verified">{user.verified ? "sim" : "não"}</div>
      </FlexBox>
      <Button
        variant="outline"
        small
        onClick={() => navigate(`/admin/users/${user.id}`)}
      >
        detalhar
      </Button>
    </Line>
  );
};
