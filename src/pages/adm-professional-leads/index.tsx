import { CaretLeft } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { useUser } from "contexts/User";
import { useNavigate, useParams } from "react-router-dom";
import { MarginContainer } from "styles/commonComponents";
import { LeadList } from "./components/LeadList";
import { Header } from "./styles";
import { Page } from "components/Page";

export interface AdmProfessionalListProps {}

export const AdmLeadsList: React.FC<AdmProfessionalListProps> = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Page>
      <FlexBox mt={2}>
        <Button variant="text" onClick={() => navigate(-1)}>
          <CaretLeft weight="fill" /> Voltar
        </Button>
      </FlexBox>
      <Header>
        <h2>Nome do profissional</h2>
        <p>Este profissional está ativo</p>
        <h3>Contatos de clientes</h3>
      </Header>

      {/* {id && <LeadList professionalId={id} />} */}
    </Page>
  );
};
