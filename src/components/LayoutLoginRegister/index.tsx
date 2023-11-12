import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { Geometry } from "components/Geometry";
import { useTheme } from "styled-components";
import { BlueField, FullPage } from "./styles";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import logo from "assets/images/logoYellowBigger.png";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "contexts/User";

export interface LoginPageProps {
  children: ReactNode;
}

export const LoginLayout: React.FC<LoginPageProps> = ({ children }) => {
  const { color } = useTheme();
  const navigate = useNavigate();

  const { logged } = useUser();

  useEffect(() => {
    if (!logged) return;

    navigate("/catalog");
  }, [logged]);

  return (
    <FullPage>
      <div className="orientation">
        <FlexBox direction="column">
          <FlexBox full mb={2} pl={7}>
            <Button variant="text" onClick={() => navigate("/")}>
              <CaretLeft weight="fill" />
              Página inical
            </Button>
          </FlexBox>
          <BlueField>
            <div className="shape1">
              <Geometry color={color.base[100]} triangle width={170} />
            </div>
            <div className="shape2">
              <Geometry color={color.brand.yellowLight} triangle width={170} />
            </div>
            <div className="shape3">
              <Geometry color={color.brand.yellowLight} triangle width={170} />
            </div>
            <div className="shape4">
              <Geometry color={color.brand.pinkLight} width={170} />
            </div>
            <div className="shape5">
              <Geometry
                color={color.brand.yellowLight}
                width={340}
                height={170}
              />
            </div>
            <div className="shape6">
              <Geometry color={color.brand.orange} width={170} />
            </div>
            <h2>
              Encontre
              <br />
              os melhores
              <br />
              materiais e<br />
              profissionais para
              <br />a sua reforma
            </h2>
          </BlueField>
        </FlexBox>
        {children}
      </div>
    </FullPage>
  );
};
