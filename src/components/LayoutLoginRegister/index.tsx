import { ReactNode, useEffect } from "react";
import { useTheme } from "styled-components";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

import {
  BlankField,
  BlueField,
  FullPage,
  LoginHeader,
  LoginMain,
} from "./styles";

import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { Geometry } from "components/Geometry";
import logo from "assets/images/logoYellowBigger.png";

import { useUser } from "contexts/User";

export interface LoginPageProps {
  children: ReactNode;
}

export const LoginLayout: React.FC<LoginPageProps> = ({ children }) => {
  const { color } = useTheme();
  const { logged } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) return;

    navigate("/catalog");
  }, [logged]);

  return (
    <FullPage>
      <LoginHeader>
        <Button variant="text" onClick={() => navigate("/")}>
          <CaretLeft weight="fill" />
          Página inicial
        </Button>
      </LoginHeader>

      <LoginMain>
        <BlueField>
          <div className="shape shape--1">
            <Geometry
              color={color.base[100]}
              triangle
              width={170}
              responsive
              sizes={{
                lg: 80,
                xl: 250,
              }}
            />
          </div>
          <div className="shape shape--2">
            <Geometry color={color.brand.yellowLight} triangle width={170} />
          </div>
          <div className="shape shape--3">
            <Geometry color={color.brand.yellowLight} triangle width={170} />
          </div>
          <div className="shape shape--4">
            <Geometry color={color.brand.pinkLight} width={170} />
          </div>
          <div className="shape shape--5">
            <Geometry color={color.brand.yellowLight} width={170} />
          </div>
          <div className="shape shape--6">
            <Geometry color={color.brand.orange} width={170} />
          </div>
          <div className="shape shape--7">
            <Geometry color={color.brand.yellowLight} width={170} />
          </div>

          <h2>Encontre os melhores profissionais para a sua reforma.</h2>
        </BlueField>
        <BlankField>{children}</BlankField>
      </LoginMain>
    </FullPage>
  );
};
