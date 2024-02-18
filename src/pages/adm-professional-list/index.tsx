import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useEffect, useState } from "react";
import { MarginContainer } from "styles/commonComponents";
import { ProfessionalList } from "./components/professionalList";
import { Header } from "./styles";
import { useNavigate } from "react-router-dom";
import { CaretLeft } from "@phosphor-icons/react";
import { Me, Professional } from "services/User/types";
import { useApi } from "contexts/User";
import { Page } from "components/Page";

export interface AdmProfessionalListProps {}

export type ScreenList = "professionals" | "validation";

export const AdmProfessionalList: React.FC<AdmProfessionalListProps> = () => {
  const [screen, setScreen] = useState<ScreenList>("professionals");

  const [allUsers, setAllUsers] = useState<Me[]>();
  const [allProfessionals, setAllProfessionals] = useState<Professional[]>();

  const { professional, user } = useApi();

  const navigate = useNavigate();

  const fetchAll = async () => {
    const userResponse = await user.getAll();
    if (!userResponse) return;

    const professionalResponse = await professional.getAll();

    if (!professionalResponse) return;

    setAllUsers(userResponse.users);
    setAllProfessionals(professionalResponse.proProfiles);
  };

  useEffect(() => {
    if (!allProfessionals) fetchAll();
  }, [allProfessionals]);

  useEffect(() => {
    if (!allUsers) fetchAll();
  }, [allProfessionals]);

  return (
    <Page>
      <FlexBox mt={2}>
        <Button variant="text" onClick={() => navigate(-1)}>
          <CaretLeft weight="fill" /> Voltar
        </Button>
      </FlexBox>
      <Header>
        <h2>Profissionais da Casa</h2>

        <FlexBox gap={2} mb={2}>
          <Button
            variant={screen == "professionals" ? "primary" : "outline"}
            onClick={() => setScreen("professionals")}
          >
            Lista de Profissionais
          </Button>
          <Button
            variant={screen == "validation" ? "primary" : "outline"}
            onClick={() => setScreen("validation")}
          >
            Validação de Perfis
          </Button>
        </FlexBox>
      </Header>

      <ProfessionalList
        screen={screen}
        users={allUsers || []}
        professionals={allProfessionals || []}
      />
    </Page>
  );
};
