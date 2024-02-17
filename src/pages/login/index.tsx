import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import logo from "assets/images/logoYellowBigger.png";
import { Button } from "components/Button";
import { FormLogin } from "components/Forms/FormLogin";
import { FormAccountType } from "components/Forms/FormSelectAccountType";
import { LoginLayout } from "components/LayoutLoginRegister";
import { useState } from "react";
import { PasswordReset } from "./components/passwordReset";
import { RightPannel } from "./styles";
import { FlexBox } from "components/FlexBox";

export interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = () => {
  const [isForgot, setIsForgot] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const isLogin = !isForgot && !isRegister;

  const handlers = { setIsRegister, setIsForgot };

  return (
    <LoginLayout>
      <RightPannel>
        <FlexBox
          direction="column"
          justifyContent={"center"}
          alignItems={"center"}
          grow={1}
          full
          media={{
            lg: {
              alignItems: "flex-start",
            },
          }}
        >
          {isRegister && (
            <div className="orange">
              <strong>
                Quer participar de uma plataforma de divulgação de arquitetos,
                engenheiros e técnicos?
              </strong>
              <p>
                Crie uma conta como <br />
                Profissional da Casa.
              </p>
            </div>
          )}

          <div className="logo">
            <img
              src={logo}
              alt="coração feito de formas geométricas - logo da cada casa"
              loading="lazy"
            />

            {isLogin && <h2>Login</h2>}
            {isForgot && <h2>Recupere sua Senha</h2>}
            {isRegister && <h2>Cadastrar</h2>}
          </div>

          <div className="content">
            {isLogin && <LoginContent {...handlers} />}
            {isForgot && <ForgotPasswordContent {...handlers} />}
            {isRegister && <RegisterContent {...handlers} />}
          </div>
        </FlexBox>
      </RightPannel>
    </LoginLayout>
  );
};

interface Handlers {
  setIsForgot: (value: boolean) => void;
  setIsRegister: (value: boolean) => void;
}

const ForgotPasswordContent = ({ setIsForgot }: Handlers) => {
  return (
    <>
      <PasswordReset back={() => setIsForgot(false)} />
      <Button
        variant="text"
        className="forgot"
        onClick={() => setIsForgot(false)}
      >
        <CaretLeft weight="fill" />
        Voltar ao login
      </Button>
    </>
  );
};

const LoginContent = ({ setIsForgot, setIsRegister }: Handlers) => {
  return (
    <>
      <FormLogin />
      <Button
        variant="text"
        className="forgot"
        onClick={() => setIsForgot(true)}
      >
        Esqueci a minha senha <CaretRight weight="fill" />
      </Button>
      <div className="divider" />
      <Button variant="outline" onClick={() => setIsRegister(true)}>
        Não tenho uma conta
      </Button>
    </>
  );
};

const RegisterContent = ({ setIsRegister }: Handlers) => {
  return (
    <>
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
    </>
  );
};
