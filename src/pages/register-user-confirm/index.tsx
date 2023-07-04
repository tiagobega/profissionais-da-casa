import { CaretLeft } from "@phosphor-icons/react";
import logo from "assets/images/logoYellowBigger.png";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { FormRegisterUser } from "components/Forms/FormRegisterUser";
import { LoginLayout } from "components/LayoutLoginRegister";
import { Modal } from "components/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RightPannel } from "./styles";
import { FormResendEmail } from "components/Forms/FormResendEmail";
import { useUser } from "contexts/User";

export interface LoginPageProps {}

export const RegisterUserConfirm: React.FC<LoginPageProps> = () => {
  const navigate = useNavigate();
  return (
    <LoginLayout>
      <RightPannel full pb={10} direction="column">
        <div className="logo">
          <img
            src={logo}
            alt="coração feito de formas geométricas - logo da cada casa"
          />
        </div>

        <FlexBox gap={1} mt={1} direction="column">
          <h2>Confirmação de registro</h2>
          <div>
            <p className="title">Enviamos um email para você!</p>
            <p>
              Cheque sua caixa de entrada (e o seu lixo eletrônico)
              <br />e clique no link de confirmação do e-mail.
            </p>
          </div>
        </FlexBox>
        <FormResendEmail />
      </RightPannel>
    </LoginLayout>
  );
};
