import {
  Question,
  Star,
  UserList,
  User,
  Download,
} from "@phosphor-icons/react";
import { FlexBox } from "components/FlexBox";
import { useNavigate } from "react-router-dom";
import { MarginContainer } from "styles/commonComponents";
import { Card, CardList } from "./styles";
import { Page } from "components/Page";
import { Button } from "components/Button";
import manualAdmin from "../../assets/manuals/Manual Admin.pdf";

export interface AdmHomeProps {}

export const AdmHome: React.FC<AdmHomeProps> = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <FlexBox direction="column" my={3} gap={3}>
        <h2>Painel Administrativo</h2>

        <CardList>
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
          <Card onClick={() => navigate("/admin/users/")}>
            <FlexBox gap={1} alignItems="center">
              <User size={32} />
              <h3>Usuários</h3>
            </FlexBox>
            <p>Visualizar e gerenciar usuários da plataforma.</p>
          </Card>
        </CardList>
        <FlexBox>
          <Download />
          <a href={manualAdmin} target="_blank">
            <Button variant="text">Download manual de administrador</Button>
          </a>
        </FlexBox>
      </FlexBox>
    </Page>
  );
};
