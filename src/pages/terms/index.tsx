import { CaretLeft } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { InformationContainer, TermsContainer } from "./style";
import { Terms } from "components/Terms";

const TermsPage = () => {
  const navigate = useNavigate();

  return (
    <TermsContainer>
      <header className="header">
        <Button
          variant="text"
          color="black"
          type="button"
          onClick={() => navigate("/")}
        >
          <CaretLeft weight="fill" />
          Página Inicial
        </Button>
      </header>
      <InformationContainer>
        <Terms />
      </InformationContainer>
    </TermsContainer>
  );
};

export default TermsPage;
