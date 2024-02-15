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
      <FlexBox direction="column">
        <div className="geometry">
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
      </FlexBox>
      <InformationContainer direction="column" gap={2} alignItems="center">
        <h2>Diversas soluções para a sua reforma</h2>
        <p>
          Encontre o melhor profissional na plataforma do Profissionais da Casa
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
        <div className="geometry">
          <Geometry color={color.brand.yellowLight} width={170} triangle />
          <Geometry color={color.base[200]} width={170} triangle angle={270} />
        </div>
      </FlexBox>
    </HomeContainer>
  );
};

export default HomePage;
