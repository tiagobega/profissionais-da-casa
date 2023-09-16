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
  const { getMe } = useUser();
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    await getMe()
    navigate('/catalog')
  };

  return (
    <FlexBox
      mt={16}
      mb={16}
      alignItems="center"
      gap={10}
      justifyContent="center"
    >
      <div className="logo">
        <img
          src={logo}
          alt="coração feito de formas geométricas - logo da cada casa"
        />
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
        <FlexBox gap={1} mt={2} direction="column">
          <h2>Já confirmou seu e-mail?</h2>
          <p>
            Caso já tenha confirmado seu e-mail e<br />
            ainda está aqui, clique no botão abaixo.
          </p>
          <Button onClick={handleButtonClick}>Ir para o catalogo</Button>
        </FlexBox>
      </div>

      <FormResendEmail />
    </FlexBox>
  );
};
