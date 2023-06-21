import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useState } from "react";
import { MarginContainer } from "styles/commonComponents";
import { ProfessionalList } from "./components/professionalList";
import { Header } from "./styles";

export interface AdmProfessionalListProps {}

export type ScreenList = "professionals" | "validation";

export const AdmProfessionalList: React.FC<AdmProfessionalListProps> = () => {
  const [screen, setScreen] = useState<ScreenList>("professionals");

  return (
    <MarginContainer>
      <Header>
        <h2>Profissionais da Casa</h2>
        <FlexBox direction="column">
          <p>
            <strong>Projetos iniciados:</strong> 134
          </p>
          <p>
            <strong>Projetos finalizados:</strong> 94
          </p>
        </FlexBox>
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

      <ProfessionalList screen={screen} />
    </MarginContainer>
  );
};
