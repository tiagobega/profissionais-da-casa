import { FlexBox } from "components/FlexBox";
import { InfoContainer, ReviewContainer } from "./styles";
import profile from "assets/images/profile-placeholder.jpeg";
import { useTheme } from "styled-components";
import { Button } from "components/Button";
import { StarMeter } from "components/StarMeter";
import { EvaluationStatus } from "constants/evaluation";
import { Modal } from "components/Modal";
import { useEffect, useState } from "react";
import { Evaluation, Professional } from "services/User/types";
import { useApi } from "contexts/User";

export type ReviewType = {};

export interface ReviewCardProps {
  customerName: string;
  professionalName: string;
  rating: number;
  id: string;
  status: EvaluationStatus;
  evaluation: Evaluation;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  customerName,
  professionalName,
  rating,
  id,
  status,
  evaluation,
}) => {
  const { color } = useTheme();
  const [modalDetails, setModalDetails] = useState(false);
  const { professional } = useApi();
  const { getSingle } = professional;
  const [prof, setProf] = useState<Professional | null>(null);

  const getProfessional = async () => {
    const professional = await getSingle({ id: evaluation.professionalId });
    professional && setProf(professional);
  };

  useEffect(() => {
    getProfessional();
  });

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
    closeDetails();
  };
  const handlePending = async () => {
    await edit({ id: evaluation.id, status: "pending" });
    closeDetails();
  };
  const handleRefuse = async () => {
    await edit({ id: evaluation.id, status: "refused" });
    closeDetails();
  };

  const statusName = (status: "approved" | "refused" | "pending") => {
    switch (status) {
      case "approved":
        return "Aprovado";
        break;
      case "refused":
        return "Excluído";
        break;
      case "pending":
        return "Esperando análise";
        break;
      default:
        break;
    }
  };

  return (
    <ReviewContainer status={status}>
      <img src={prof?.backgroundPicture} alt="" />
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
              {statusName(evaluation.status)}
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
