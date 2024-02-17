import { CaretLeft } from "@phosphor-icons/react";
import logo from "assets/images/logoYellowBigger.png";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { FormRegisterUser } from "components/Forms/FormRegisterUser";
import { LoginLayout } from "components/LayoutLoginRegister";
import { Modal } from "components/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Terms } from "components/Terms";
import { RightPannel } from "pages/login/styles";

export interface LoginPageProps {}

export const RegisterUser: React.FC<LoginPageProps> = () => {
  const [conditionsModal, setConditionsModal] = useState(false);
  const navigate = useNavigate();

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
          <div className="logo">
            <img
              src={logo}
              alt="coração feito de formas geométricas - logo da cada casa"
              loading="lazy"
            />
          </div>

          <FormRegisterUser
            toConfirm={() => navigate("/register/customer/confirm")}
            showTerms={() => setConditionsModal(true)}
          />

          <div className="divider" />

          <Button variant="text" onClick={() => navigate("/login")}>
            <CaretLeft weight="fill" />
            Voltar para login
          </Button>
        </FlexBox>
      </RightPannel>
      <Modal
        isOpened={conditionsModal}
        onClose={() => setConditionsModal(false)}
      >
        <FlexBox direction="column" gap={1} centralized>
          <h2>Termos e condições de uso</h2>
          <Terms />
        </FlexBox>
      </Modal>
    </LoginLayout>
  );
};
