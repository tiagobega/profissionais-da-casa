import { FlexBox } from "components/FlexBox";
import { Geometry } from "components/Geometry";
import { FullContainer, MarginContainer } from "styles/commonComponents";
import {
  GeometryContainer,
  HeaderContainer,
  HeaderWrapper,
  InfoColumn,
  PhotoColumn,
  ProjectContainer,
} from "./styles";
import {
  Envelope,
  MapPin,
  PhoneCall,
  PhoneIncoming,
} from "@phosphor-icons/react";
import { UserProjects } from "./components/userProjects";
import { projectList } from "pages/myProjects";
import { Button } from "components/Button";

export interface CustomerProfileProps {}

export const UserProfile: React.FC<CustomerProfileProps> = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <FlexBox gap={6}>
            <PhotoColumn
              direction="column"
              alignItems="center"
              gap={1}
              justifyContent="center"
            >
              <div className="round-picture"></div>
              <p className="name">Edna Dias Cavalvante</p>
              <p>Perfil Pessoal</p>
            </PhotoColumn>
            <InfoColumn direction="column" gap={1} justifyContent="center">
              <div>
                <p className="title">Telefone</p>
                <FlexBox alignItems="center" gap={0.5} mt={0.5}>
                  <PhoneCall size={30} />
                  (11)98765-4321
                </FlexBox>
              </div>
              <div>
                <p className="title">Telefone</p>
                <FlexBox alignItems="center" gap={0.5} mt={0.5}>
                  <Envelope size={30} />
                  edna-cavalcante@gmail.com
                </FlexBox>
              </div>
              <div>
                <p className="title">Telefone</p>
                <FlexBox alignItems="center" gap={0.5} mt={0.5}>
                  <MapPin size={30} />
                  (11)98765-4321
                </FlexBox>
              </div>
              <Button background="white" onClick={() => console.log("edit")}>
                Editar
              </Button>
            </InfoColumn>
          </FlexBox>
        </HeaderContainer>
        <GeometryContainer>
          <div className="triangle1">
            <Geometry color="white" width={170} triangle />
          </div>
          <div className="triangle2">
            <Geometry color="white" width={170} triangle />
          </div>
          <div className="triangle3">
            <Geometry color="white" width={80} triangle />
          </div>
          <div className="triangle4">
            <Geometry color="white" width={80} triangle angle={90} />
          </div>
          <div className="triangle5">
            <Geometry color="white" width={80} triangle />
          </div>
        </GeometryContainer>
      </HeaderWrapper>
      <MarginContainer>
        <ProjectContainer direction="column">
          <UserProjects list={projectList} />
        </ProjectContainer>
      </MarginContainer>
    </>
  );
};
