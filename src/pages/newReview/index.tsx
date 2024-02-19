import { CaretLeft, MapPin, Star } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { Router, useNavigate, useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import { MarginContainer } from "styles/commonComponents";
import profile from "assets/images/profile-placeholder.jpeg";
import { Title, Profile, Header, LocationList } from "./styles";
import { FormSendReview } from "components/Forms/FormSendReview";
import { projectList } from "pages/myProjects";
import { useApi, useUser } from "contexts/User";
import { useEffect, useState } from "react";
import { Professional } from "services/User/types";
import { approvedEvaluations } from "utils/EvaluationAverage";
import { Page } from "components/Page";

export interface NewReviewPageProps {}

export const NewReviewPage: React.FC<NewReviewPageProps> = () => {
  const { color } = useTheme();
  const navigate = useNavigate();
  const professionalId = useParams();
  const { professional, user } = useApi();
  const { me } = user;
  const { getSingle } = professional;
  const [pageProfessional, setPageProfessional] = useState<Professional>();

  const fetchProfessional = async (id: string) => {
    const professionalResponse = await getSingle({
      id,
    });

    if (!professionalResponse) return;

    setPageProfessional(professionalResponse);
  };

  useEffect(() => {
    professionalId.id && fetchProfessional(professionalId.id);
  }, [professionalId]);

  //TODO - PUXAR O PROFISSIONAL PELO ID DOS PARAMS

  return (
    <Page>
      {pageProfessional && me && (
        <>
          <FlexBox>
            <Button variant="text" onClick={() => navigate(-1)}>
              <CaretLeft weight="fill" /> Voltar
            </Button>
          </FlexBox>
          <Header justifyContent="center" alignItems="center" full>
            <Title direction="column" gap={1}>
              <h2>Deixe sua Avaliação</h2>
              <p>
                Melhore a experiência de outros usuários por meio de uma
                avaliação rápida
                <br />
                Agradecemos por utilizar o Profissionais da Casa.
              </p>
            </Title>
            <Profile full gap={2} direction="column">
              <FlexBox full direction="column" alignItems="center" gap={1}>
                <div className="photo-container">
                  <img
                    src={pageProfessional.profilePicture}
                    alt="professional photo"
                    loading="lazy"
                  />
                </div>
                <h3>{pageProfessional.name}</h3>

                <LocationList>
                  {/* <MapPin weight="fill" /> */}
                  {pageProfessional.locations.map((item) => (
                    <li key={item.id}>{`${item.state}`} </li>
                  ))}
                </LocationList>
                <FlexBox gap={0.5} alignItems="center">
                  <Star weight="fill" color={color.secondary.yellow} />
                  <h4>
                    {approvedEvaluations(pageProfessional.evaluations).average}
                  </h4>
                  <p>
                    {approvedEvaluations(pageProfessional.evaluations).quantity}
                  </p>
                </FlexBox>
              </FlexBox>
            </Profile>
          </Header>
          <FormSendReview user={me} professional={pageProfessional} />
        </>
      )}
    </Page>
  );
};
