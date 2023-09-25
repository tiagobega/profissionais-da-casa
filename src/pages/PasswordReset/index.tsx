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
import { FormResetPassword } from "components/Forms/FormResetPassword";
import { useParams } from "react-router-dom";
import { Loading } from "components/Loading";

export interface LoginPageProps {}

export const ResetPasswordPage: React.FC<LoginPageProps> = () => {
  const { token } = useParams();
  return (
    <LoginLayout>
      <RightPannel full pb={10} direction="column">
        {token ? <FormResetPassword token={token.toString()} /> : <Loading />}
      </RightPannel>
    </LoginLayout>
  );
};
