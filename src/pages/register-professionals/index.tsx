import { CaretLeft } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { useNavigate } from "react-router-dom";
import { FullContainer } from "styles/commonComponents";
import { BodyContainer, ContentContainer, Header } from "./style";
import logo from "assets/images/logoVazada.png";
import { FormRegisterProfessional } from "components/Forms/FormRegisterProfessional";
import { useState } from "react";
import { Modal } from "components/Modal";
import { Benefits } from "./Benefits";
import { Terms } from "components/Terms";
import { LoginHeader } from "components/LayoutLoginRegister/styles";

export interface RegisterProfessionalProps {}

export const RegisterProfessional: React.FC<RegisterProfessionalProps> = () => {
  const navigate = useNavigate();
  const [terms, setTerms] = useState(false);
  const [benefits, setBenefits] = useState(true);

  return (
    <FullContainer>
      <LoginHeader>
        <Button variant="text" onClick={() => navigate("/")}>
          <CaretLeft weight="fill" />
          Página Inicial
        </Button>
      </LoginHeader>

      <BodyContainer full direction="column" alignItems="center">
        <ContentContainer direction="column" alignItems="center" gap={1} p={2}>
          <Header
            direction="column"
            alignItems="center"
            media={{
              lg: {
                direction: "row",
                justifyContent: "space-between",
              },
            }}
            gap={2}
          >
            <FlexBox gap={2} alignItems="center">
              <img
                src={logo}
                alt="logo da cada casa, um coração formado por diferentes polígonos"
                loading="lazy"
              />
              <h2>
                Conta
                <br />
                profissional
              </h2>
            </FlexBox>

            <p>apoio para arquitetos e engenheiros</p>
          </Header>

          <h3>Preencha o formulário para se tornar um Profissional da Casa</h3>

          {!benefits ? (
            <FormRegisterProfessional showTerms={() => setTerms(true)} />
          ) : (
            <Benefits
              showTerms={() => setTerms(true)}
              showForm={() => setBenefits(false)}
            />
          )}

          <FlexBox full>
            <Button variant="text" onClick={() => navigate("/login")}>
              <CaretLeft weight="fill" />
              Voltar para login
            </Button>
          </FlexBox>
        </ContentContainer>
      </BodyContainer>

      <Modal isOpened={terms} onClose={() => setTerms(false)}>
        <FlexBox direction="column" gap={1} centralized>
          <Terms />
        </FlexBox>
      </Modal>
    </FullContainer>
  );
};
