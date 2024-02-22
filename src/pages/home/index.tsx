import { Geometry } from "components/Geometry";
import type { HomePageProps } from "./types";
import { useTheme } from "styled-components";
import { FlexBox } from "components/FlexBox";
import { Button } from "components/Button";
import { HomeContainer, InformationContainer } from "./styles";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { color } = useTheme();
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <div className="geometry geometry--right">
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
      </div>
      <div className="geometry geometry--left">
        <Geometry color={color.brand.yellowLight} width={170} triangle />
        <Geometry color={color.base[200]} width={170} triangle angle={270} />
      </div>
      <InformationContainer direction="column" gap={2} alignItems="center">
        <h2>Profissionais da Casa</h2>
        <p>
          A plataforma que une clientes a profissionais qualificados.
          Cadastre-se agora e dê vida aos seus projetos!
        </p>
        <Button
          variant="primary"
          background="white"
          onClick={() => navigate("/catalog")}
        >
          Profissionais da Casa
        </Button>
      </InformationContainer>
    </HomeContainer>
  );
};

export default HomePage;
