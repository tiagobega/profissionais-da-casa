import { NameValueType } from "Models/models";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MarginContainer } from "styles/commonComponents";
import { ContentContainer, Header } from "./styles";
import { RatingList } from "./RatingList";
import { filterRating } from "utils/filterList";
import { useTheme } from "styled-components";
import { useApi } from "contexts/User";
import { Evaluation, Me, Professional } from "services/User/types";
import { Loading } from "components/Loading";
import { EVALUATION_STATUS, EvaluationStatus } from "constants/evaluation";
import { CaretLeft } from "@phosphor-icons/react";

export interface AdmRatingListProps {}

export type RatingStatusOptions = "approved" | "refused" | "analysis";
export type RatingType = {
  evaluation: Evaluation;
  professional: Professional;
  user: Me;
};

const orderOptions: { name: string; value: ListOrderType }[] = [
  { name: "Nome do usuário", value: "userName" },
  { name: "Nome do Profissional", value: "professionalName" },
  { name: "Avaliação", value: "rating" },
];

type ListOrderType = "userName" | "professionalName" | "rating";

export const AdmRatingList: React.FC<AdmRatingListProps> = () => {
  const [allEvaluations, setAllEvaluations] = useState<Evaluation[]>();
  const [allUsers, setAllUsers] = useState<Me[]>();
  const [allProfessionals, setAllProfessionals] = useState<Professional[]>();

  const [status, setStatus] = useState<EvaluationStatus>("pending");
  const [query, setQuery] = useState<string>("");
  const [order, setOrder] = useState<ListOrderType>("userName");
  const [isDetails, setIsDetails] = useState(false);

  const { color } = useTheme();
  const { evaluation, professional, user } = useApi();

  const handleSelectOrder = (value: string) => {
    if (value == "userName" || value == "professionalName" || value == "rating")
      setOrder(value);
  };
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const evaluationResponse = await evaluation.getAll();
      const professionalResponse = await professional.getAll();
      const userResponse = await user.getAll();

      if (!evaluationResponse || !professionalResponse || !userResponse) {
        setAllEvaluations([]);
        setAllUsers([]);
        setAllProfessionals([]);
        return;
      }

      setAllEvaluations(evaluationResponse.evaluations);
      setAllUsers(userResponse.users);
      setAllProfessionals(professionalResponse.proProfiles);
    })();
  }, []);

  if (!allEvaluations || !allProfessionals || !allUsers) {
    return <Loading />;
  }

  const finalEvaluations = allEvaluations.map((evaluation) => {
    const { userId, professionalId } = evaluation;

    const foundedUser = allUsers.find(({ id }) => id === userId);
    const foundedProfessional = allProfessionals.find(
      ({ id }) => id === professionalId
    );

    return {
      evaluation,
      user: foundedUser!,
      professional: foundedProfessional!,
    };
  });

  const filteredList: RatingType[] = finalEvaluations.filter(
    (el) => el.evaluation.status === status
  );
  // const searchedList = filterRating(filteredList, query);

  return (
    <MarginContainer>
      <FlexBox mt={2}>
        <Button variant="text" onClick={() => navigate(-1)}>
          <CaretLeft weight="fill" /> Voltar
        </Button>
      </FlexBox>
      <Header>
        <h1>Depoimentos</h1>
        {
          <FlexBox
            mt={2}
            mb={1}
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <FlexBox gap={2}>
              <Button
                variant="text"
                onClick={() => setStatus(EVALUATION_STATUS.PENDING)}
                color={
                  status != EVALUATION_STATUS.PENDING
                    ? color.base[300]
                    : "black"
                }
              >
                Esperando análise
              </Button>
              <Button
                variant="text"
                onClick={() => setStatus(EVALUATION_STATUS.APPROVED)}
                color={
                  status != EVALUATION_STATUS.APPROVED
                    ? color.base[300]
                    : "black"
                }
              >
                Postados
              </Button>
              <Button
                variant="text"
                onClick={() => setStatus(EVALUATION_STATUS.REFUSED)}
                color={
                  status != EVALUATION_STATUS.REFUSED
                    ? color.base[300]
                    : "black"
                }
              >
                Excluídos
              </Button>
            </FlexBox>
            <FlexBox gap={2}>
              <Input.Text
                placeholder="Buscar"
                aria-label="buscar-depoimento"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
              />

              <Input.Select
                options={orderOptions}
                placeholder="Ordenar por"
                aria-label="Ordenar por"
                onChange={(e) => handleSelectOrder(e.target.value)}
                value={order}
              />
            </FlexBox>
          </FlexBox>
        }
      </Header>
      <ContentContainer>
        {!isDetails ? <RatingList list={filteredList} /> : "detalhes"}
      </ContentContainer>
    </MarginContainer>
  );
};
