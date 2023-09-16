import { useNavigate } from "react-router-dom";
import { InformationContainer, EmailConfirmationContainer } from "./styles";

import { FlexBox } from "components/FlexBox";
import { Button } from "components/Button";

export const EmailConfirmedPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/catalog");
  };

  return (
    <EmailConfirmationContainer>
      <InformationContainer
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={1.5}
      >
        <h2>E-mail confirmado com sucesso.</h2>
        <Button onClick={handleButtonClick}>ir para catalogo</Button>
      </InformationContainer>
    </EmailConfirmationContainer>
  );
};

export default EmailConfirmedPage;
