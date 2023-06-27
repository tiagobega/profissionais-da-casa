import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { Geometry } from "components/Geometry";
import { useTheme } from "styled-components";
import { FullContainer } from "styles/commonComponents";
import { BlueField, FullPage, RightPannel } from "./styles";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import logo from "assets/images/logoYellowBigger.png";

export interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = () => {
  const { color } = useTheme();
  return (
    <FullPage>
      <FlexBox direction="column">
        <FlexBox full mb={2} pl={7}>
          <Button variant="text">
            <CaretLeft weight="fill" />
            Página inical
          </Button>
        </FlexBox>
        <BlueField>
          <div className="shape1">
            <Geometry color={color.base[100]} triangle width={170} />
          </div>
          <div className="shape2">
            <Geometry color={color.brand.yellowLight} triangle width={170} />
          </div>
          <div className="shape3">
            <Geometry color={color.brand.yellowLight} triangle width={170} />
          </div>
          <div className="shape4">
            <Geometry color={color.brand.pinkLight} width={170} />
          </div>
          <div className="shape5">
            <Geometry
              color={color.brand.yellowLight}
              width={340}
              height={170}
            />
          </div>
          <div className="shape6">
            <Geometry color={color.brand.orange} width={170} />
          </div>
          <h2>
            Encontre
            <br />
            os melhores
            <br />
            materiais e<br />
            profissionais para
            <br />a sua reforma
          </h2>
        </BlueField>
      </FlexBox>
      <RightPannel full pb={10} direction="column">
        <div className="orange">
          <strong>
            Quer participar de uma plataforma de <br />
            divulgação de arquitetos e engenheiros?
          </strong>
          <p>Crie uma conta como Profissional da Casa.</p>
        </div>
        <div className="logo">
          <img
            src={logo}
            alt="coração feito de formas geométricas - logo da cada casa"
          />
          <h2>Login</h2>
        </div>
        <p>
          Faça o login para acessar os
          <br />
          serviços da Cada Casa
        </p>
        Form
        <Button variant="text" className="forgot">
          Esqueci a minha senha <CaretRight weight="fill" />
        </Button>
        <div className="divider" />
        <Button variant="outline">Não tenho uma conta</Button>
      </RightPannel>
    </FullPage>
  );
};
