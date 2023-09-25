import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { Modal } from "components/Modal";
import { useState } from "react";
import { Lead } from "services/User/types";
import { Line } from "./styles";

export interface ProfessionalListLineProps {
  lead: Lead;
}

export const LeadListLine: React.FC<ProfessionalListLineProps> = ({ lead }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Line full justifyContent="space-between" py={0.5} alignItems="center">
      <FlexBox gap={1}>
        <div className="name">{lead.name}</div>
      </FlexBox>
      <Button variant="outline" small onClick={() => setIsModalOpen(true)}>
        Exibir
      </Button>
      <Modal isOpened={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <FlexBox direction="column" gap={1}>
          <h3>{lead.name}</h3>
          <p>{lead.description}</p>
        </FlexBox>
      </Modal>
    </Line>
  );
};
