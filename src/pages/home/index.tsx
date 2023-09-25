import { Geometry } from "components/Geometry";
import type { HomePageProps } from "./types";
import { useTheme } from "styled-components";
import { FlexBox } from "components/FlexBox";
import { Button } from "components/Button";
import { HomeContainer, InformationContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { FormContactProfessional } from "components/Forms/FormSendContact";

const HomePage = () => {
  const { color } = useTheme();
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <FlexBox direction="column">
        <Geometry
          color={color.secondary.lightTeal}
          width={170}
          triangle
          angle={90}
        />
        <Geometry
          color={color.brand.yellowLight}
          width={170}
          triangle
          angle={180}
        />
      </FlexBox>
      <InformationContainer direction="column" gap={2} alignItems="center">
        <h2>Diversas soluções para a sua reforma</h2>
        <p>
          Calcule o material certo pelo Casa Fast ou encontre o melhor
          profissional pelo Profissionais da Casa. Você também pode conferir
          seus pedidos na aba “Meu Perfil”
        </p>
        <Button
          variant="primary"
          background="white"
          onClick={() => navigate("/catalog")}
        >
          Profissionais da Casa
        </Button>
      </InformationContainer>
      <FlexBox direction="column">
        <Geometry color={color.brand.yellowLight} width={170} triangle />
        <Geometry color={color.base[200]} width={170} triangle angle={270} />
      </FlexBox>
    </HomeContainer>
  );
};

export default HomePage;
