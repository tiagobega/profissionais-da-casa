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
import { FormConfirmUser } from "components/Forms/FormConfirmUser";

export interface LoginPageProps {}

export const RegisterUserConfirm: React.FC<LoginPageProps> = () => {
  const [isDone, setIsDone] = useState(false);
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

        {!isDone ? (
          <FormConfirmUser toConfirm={() => setIsDone(true)} />
        ) : (
          <FlexBox gap={1} mt={1} direction="column">
            <div>
              <p className="title">Conta criada com sucesso!!</p>
              <p>
                Agora você já pode aproveitar os
                <br />
                serviços da Cada Casa.
              </p>
            </div>
            <Button onClick={() => navigate("/catalog")}>Vamos lá!</Button>
          </FlexBox>
        )}
      </RightPannel>
    </LoginLayout>
  );
};
