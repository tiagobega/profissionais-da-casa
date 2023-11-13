import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { Modal } from "components/Modal";
import { useEffect, useState } from "react";
import { Lead, Me, Professional } from "services/User/types";
import { Line } from "./styles";
import { useApi } from "contexts/User";
import { formatLongDate } from "utils/dateFormat";
import { useNavigate } from "react-router-dom";

export interface ProfessionalListLineProps {
  lead: Lead;
  professional: boolean;
}

export const LeadListLine: React.FC<ProfessionalListLineProps> = ({
  lead,
  professional,
}) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { professional: professionalAPI } = useApi();
  const { getSingle } = professionalAPI;

  const [leadUser, setLeadUser] = useState<Professional | null>(null);

  const getUserInfo = async () => {
    const response = await getSingle({ id: lead.professionalId });
    response && setLeadUser(response);
  };

  console.log(lead);

  useEffect(() => {
    getUserInfo();
  }, [lead]);

  return (
    <>
      {leadUser && (
        <Line full justifyContent="space-between" py={0.5} alignItems="center">
          <FlexBox gap={1}>
            <div className="name">
              <Button
                variant="text"
                onClick={() => navigate(`/professional/${leadUser.userId}`)}
              >
                {professional ? lead.name : leadUser.name}
              </Button>
              <p className="date">{formatLongDate(lead.createdAt)}</p>
            </div>
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
      )}
    </>
  );
};
