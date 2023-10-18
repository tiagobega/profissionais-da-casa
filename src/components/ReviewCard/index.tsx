import { FlexBox } from "components/FlexBox";
import { InfoContainer, ReviewContainer } from "./styles";
import profile from "assets/images/profile-placeholder.jpeg";
import { useTheme } from "styled-components";
import { Button } from "components/Button";
import { StarMeter } from "components/StarMeter";
import { EvaluationStatus } from "constants/evaluation";
import { Modal } from "components/Modal";
import { useState } from "react";
import { Evaluation } from "services/User/types";
import { useApi } from "contexts/User";

export type ReviewType = {};

export interface ReviewCardProps {
  customerName: string;
  professionalName: string;
  rating: number;
  id: string;
  status: EvaluationStatus;
  evaluation: Evaluation;
  refetch: () => void;
}

const statusName = {
  approved: "Aprovado",
  refused: "Excluído",
  pending: "Esperando análise",
};

export const ReviewCard: React.FC<ReviewCardProps> = ({
  customerName,
  professionalName,
  rating,
  id,
  status,
  evaluation,
  refetch,
}) => {
  const { color } = useTheme();
  const [modalDetails, setModalDetails] = useState(false);
  const openDetails = () => {
    setModalDetails(true);
  };
  const closeDetails = () => {
    setModalDetails(false);
  };

  const { evaluation: evaluationApi } = useApi();
  const { edit } = evaluationApi;

  const handleApprove = async () => {
    await edit({ id: evaluation.id, status: "approved" });
    refetch();
    closeDetails();
  };
  const handlePending = async () => {
    await edit({ id: evaluation.id, status: "pending" });
    refetch();
    closeDetails();
  };
  const handleRefuse = async () => {
    await edit({ id: evaluation.id, status: "refused" });
    refetch();
    closeDetails();
  };

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
        <Button small background="white" onClick={openDetails}>
          Analisar
        </Button>
      )}
      {status == "approved" && (
        <FlexBox direction="column" gap={1}>
          <Button small background="white" onClick={openDetails}>
            Analisar
          </Button>
        </FlexBox>
      )}
      {status == "refused" && (
        <FlexBox direction="column" gap={1}>
          <Button small background="white" onClick={openDetails}>
            Analisar
          </Button>
        </FlexBox>
      )}
      <Modal
        isOpened={modalDetails}
        onProceed={() => console.log("proceed")}
        onClose={() => setModalDetails(false)}
      >
        <h2>Detalhes da Avaliação</h2>
        <FlexBox direction="column" gap={2} my={2} full>
          <FlexBox direction="column">
            <p>
              <b>Profissional: </b>
              {professionalName}
            </p>
            <p>
              <b>Usuário: </b>
              {customerName}
            </p>
            <p>
              <b>Status: </b>
              {statusName[evaluation.status]}
            </p>
          </FlexBox>

          <FlexBox direction="column" gap={0.5}>
            <FlexBox gap={1}>
              <h4>Preço:</h4>
              <StarMeter rating={evaluation.cost} />
            </FlexBox>
            <FlexBox gap={1}>
              <h4>Prazos:</h4>
              <StarMeter rating={evaluation.deadlines} />
            </FlexBox>
            <FlexBox gap={1}>
              <h4>Qualidade das entregas:</h4>
              <StarMeter rating={evaluation.quality} />
            </FlexBox>
            <FlexBox gap={1}>
              <h4>Relacionamento com o cliente:</h4>
              <StarMeter rating={evaluation.relationship} />
            </FlexBox>
            <FlexBox gap={1}>
              <h4>Funcionalidade:</h4>
              <StarMeter rating={evaluation.functionality} />
            </FlexBox>
          </FlexBox>

          <FlexBox direction="column">
            <h4>Descrição:</h4>
            <p>{evaluation.description}</p>
          </FlexBox>
        </FlexBox>
        <FlexBox gap={2}>
          {evaluation.status == "pending" && (
            <>
              <Button onClick={handleApprove}>Postar</Button>
              <Button variant="outline" onClick={handleRefuse}>
                Recusar
              </Button>
            </>
          )}
          {evaluation.status == "approved" && (
            <>
              <Button variant="outline" onClick={handlePending}>
                Deixar em espera
              </Button>
              <Button variant="outline" onClick={handleRefuse}>
                Recusar
              </Button>
            </>
          )}
          {evaluation.status == "refused" && (
            <>
              <Button onClick={handleApprove}>Aprovar</Button>
              <Button variant="outline" onClick={handlePending}>
                Deixar em espera
              </Button>
            </>
          )}
        </FlexBox>
      </Modal>
    </ReviewContainer>
  );
};
