import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { Geometry } from "components/Geometry";
import { useTheme } from "styled-components";
import { RightPannel } from "./styles";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import logo from "assets/images/logoYellowBigger.png";
import { LoginLayout } from "components/LayoutLoginRegister";
import { FormLogin } from "components/Forms/FormLogin";
import { useState } from "react";
import { FormForgotPassword } from "components/Forms/FormForgotPassword";
import Input from "components/Input";
import { FormAccountType } from "components/Forms/FormSelectAccountType";
import { PasswordReset } from "./components/passwordReset";

export interface LoginPageProps {}

const accountOptions = [
  { label: "Me tornar um Profissional da Casa", value: "professional" },
  { label: "Utilizar os serviços da Cada Casa", value: "customer" },
];

export const LoginPage: React.FC<LoginPageProps> = () => {
  const [isForgot, setIsForgot] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  return (
    <LoginLayout>
      {!isRegister ? (
        <RightPannel full pb={10} direction="column">
          {!isForgot && (
            <div className="orange">
              <strong>
                Quer participar de uma plataforma de <br />
                divulgação de arquitetos e engenheiros?
              </strong>
              <p>Crie uma conta como Profissional da Casa.</p>
            </div>
          )}
          <div className="logo">
            <img
              src={logo}
              alt="coração feito de formas geométricas - logo da cada casa"
            />
            {!isForgot && <h2>Login</h2>}
          </div>

          {isForgot ? (
            <PasswordReset back={() => setIsForgot(false)} />
          ) : (
            <FormLogin />
          )}
          {isForgot ? (
            <Button
              variant="text"
              className="forgot"
              onClick={() => setIsForgot(false)}
            >
              <CaretLeft weight="fill" />
              Voltar ao login
            </Button>
          ) : (
            <Button
              variant="text"
              className="forgot"
              onClick={() => setIsForgot(true)}
            >
              Esqueci a minha senha <CaretRight weight="fill" />
            </Button>
          )}
          <div className="divider" />
          <Button variant="outline" onClick={() => setIsRegister(true)}>
            Não tenho uma conta
          </Button>
        </RightPannel>
      ) : (
        <RightPannel full pb={10} direction="column">
          <div className="logo">
            <img
              src={logo}
              alt="coração feito de formas geométricas - logo da cada casa"
            />
          </div>
          <FormAccountType />
          <div className="divider" />
          <Button
            variant="text"
            className="forgot"
            onClick={() => setIsRegister(false)}
          >
            <CaretLeft weight="fill" />
            Voltar ao login
          </Button>
        </RightPannel>
      )}
    </LoginLayout>
  );
};
