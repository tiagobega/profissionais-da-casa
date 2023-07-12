import { Question, Star, UserList } from "@phosphor-icons/react";
import { FlexBox } from "components/FlexBox";
import { FullContainer, MarginContainer } from "styles/commonComponents";

export interface AdmHomeProps {}

export const AdmHome: React.FC<AdmHomeProps> = () => {
  return (
    <MarginContainer>
      <h2>Painel Administrativo</h2>

      <FlexBox>
        <FlexBox direction="column">
          <Question />
          <h3>FAQ</h3>
          <p>
            Gerenciar questões e blocos de questões que serão exibidos na página
            de FAQ
          </p>
        </FlexBox>
        <FlexBox direction="column">
          <UserList />
          <h3>Profissionais</h3>
          <p>Visualizar e gerenciar perfis profissionais da plataforma.</p>
        </FlexBox>
        <FlexBox direction="column">
          <Star />
          <h3>Depoimentos</h3>
          <p>Visualizar e gerenciar depoimentos dos usuários da plataforma.</p>
        </FlexBox>
      </FlexBox>
    </MarginContainer>
  );
};
