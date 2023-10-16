import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { Modal } from "components/Modal";
import { useEffect, useState } from "react";
import { Lead, Me } from "services/User/types";
import { Line } from "./styles";
import { useApi } from "contexts/User";
import { formatLongDate } from "utils/dateFormat";

export interface ProfessionalListLineProps {
  lead: Lead;
  professional: boolean;
}

export const LeadListLine: React.FC<ProfessionalListLineProps> = ({
  lead,
  professional,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user } = useApi();
  const { getSingleUser } = user;

  const [leadUser, setLeadUser] = useState<Me | null>(null);

  const getUserInfo = async () => {
    const response = await getSingleUser({ id: lead.userId });
    console.log(response);
    response && setLeadUser(response);
  };

  useEffect(() => {
    getUserInfo();
  }, [lead]);

  return (
    <>
      {leadUser && (
        <Line full justifyContent="space-between" py={0.5} alignItems="center">
          <FlexBox gap={1}>
            <div className="name">
              <p>{professional ? leadUser.name : lead.name}</p>
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
