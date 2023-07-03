import { CaretLeft } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { useNavigate } from "react-router-dom";
import { FullContainer } from "styles/commonComponents";
import {
  BodyContainer,
  ContentContainer,
  Header,
  LinkBackContainer,
} from "./style";
import logo from "assets/images/logoVazada.png";
import { FormRegisterProfessional } from "components/Forms/FormRegisterProfessional";
import { useState } from "react";
import { useTheme } from "styled-components";

export const RegisterProfessionalConfirm = () => {
  const navigate = useNavigate();
  const { color } = useTheme();

  return (
    <FullContainer>
      <LinkBackContainer full alignItems="center">
        <Button variant="text">
          <CaretLeft weight="fill" onClick={() => navigate("/login")} />
          Página Inicial
        </Button>
      </LinkBackContainer>
      <BodyContainer full direction="column" alignItems="center">
        <ContentContainer direction="column" gap={1}>
          <Header alignItems="flex-end" justifyContent="space-between">
            <FlexBox gap={2} alignItems="center">
              <img
                src={logo}
                alt="logo da cada casa, um coração formado por diferentes polígonos"
              />
              <h2>
                Conta
                <br />
                profissional
              </h2>
            </FlexBox>
            <div>
              <p>apoio para</p>
              <p>arquitetos</p>
              <p>e engenheiros</p>
            </div>
          </Header>
          <FlexBox full direction="column" gap={1.5} mt={1}>
            <div>
              <strong>Pronto! Seu cadastro foi enviado e será validado.</strong>
              <p>
                Fique atento ao e-mail cadastrado, em breve entraremos em
                contato
              </p>
            </div>
            <Button
              type="button"
              color="white"
              background={color.secondary.blue}
              onClick={() => navigate("/")}
            >
              Finalizar
            </Button>
          </FlexBox>
        </ContentContainer>
      </BodyContainer>
    </FullContainer>
  );
};
