import { Question, Star, UserList } from "@phosphor-icons/react";
import { FlexBox } from "components/FlexBox";
import { useNavigate } from "react-router-dom";
import { MarginContainer } from "styles/commonComponents";
import { Card } from "./styles";

export interface AdmHomeProps {}

export const AdmHome: React.FC<AdmHomeProps> = () => {
  const navigate = useNavigate();
  return (
    <MarginContainer>
      <FlexBox direction="column" my={3}>
        <h2>Painel Administrativo</h2>

        <FlexBox gap={2}>
          <Card onClick={() => navigate("/faq/")}>
            <FlexBox alignItems="center" gap={1}>
              <Question size={32} />
              <h3>FAQ</h3>
            </FlexBox>
            <p>
              Gerenciar questões e blocos de questões que serão exibidos na
              página de FAQ
            </p>
          </Card>
          <Card onClick={() => navigate("/admin/professionals-management/")}>
            <FlexBox gap={1} alignItems="center">
              <UserList size={32} />
              <h3>Profissionais</h3>
            </FlexBox>
            <p>Visualizar e gerenciar perfis profissionais da plataforma.</p>
          </Card>
          <Card onClick={() => navigate("/admin/reviews/")}>
            <FlexBox gap={1} alignItems="center">
              <Star size={32} />
              <h3>Depoimentos</h3>
            </FlexBox>
            <p>
              Visualizar e gerenciar depoimentos dos usuários da plataforma.
            </p>
          </Card>
        </FlexBox>
      </FlexBox>
    </MarginContainer>
  );
};
