import { CaretLeft, MapPin, Star } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { Router, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { MarginContainer } from "styles/commonComponents";
import profile from "assets/images/profile-placeholder.jpeg";
import { Title, Profile, Header } from "./styles";
import { FormSendReview } from "components/Forms/FormSendReview";
import { projectList } from "pages/myProjects";

export interface NewReviewPageProps {}

export const NewReviewPage: React.FC<NewReviewPageProps> = () => {
  const { color } = useTheme();
  const navigate = useNavigate();
  return (
    <MarginContainer>
      <FlexBox my={2}>
        <Button variant="text" onClick={() => navigate(-1)}>
          <CaretLeft weight="fill" /> Voltar
        </Button>
      </FlexBox>
      <Header direction="column">
        <FlexBox justifyContent="space-between" alignItems="center">
          <Title direction="column" gap={1.5}>
            <h2>Deixe sua Avaliação</h2>
            <p>
              Melhore a experiência de outros usuários por meio de uma avaliação
              rápida
              <br />
              Agradecemos por utilizar o Profissionais da Casa.
            </p>
          </Title>
          <Profile gap={2} alignItems="center">
            <FlexBox direction="column" alignItems="flex-end" gap={1.5}>
              <h3>Rosi Santos Arquitetura</h3>
              <FlexBox>
                <MapPin weight="fill" />
                São Bernardo do Campo
              </FlexBox>
              <FlexBox gap={0.5} alignItems="center">
                <Star weight="fill" color={color.secondary.yellow} />
                <h4>4.5</h4>
                <p>8</p>
              </FlexBox>
            </FlexBox>
            <div className="photo-container">
              <img src={profile} alt="professional photo" />
            </div>
          </Profile>
        </FlexBox>
      </Header>
      <FormSendReview project={projectList[0]} />
    </MarginContainer>
  );
};
