import { CaretLeft, MapPin, Star } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  CarouselButton,
  FullContainer,
  MarginContainer,
} from "styles/commonComponents";
import {
  GalleryContainer,
  InformationContainer,
  ProfessionalInformation,
  ProjectInformation,
} from "./styles";
import { FlexBox } from "components/FlexBox";
import { useTheme } from "styled-components";
import { EditPortfolioProject } from "./EditProject";
import { useApi } from "contexts/User";
import { PortfolioProject, Professional } from "services/User/types";
import { Loading } from "components/Loading";

export interface PortfolioProjectPageProps {}
export const PortfolioProjectPage: React.FC<PortfolioProjectPageProps> = () => {
  const navigate = useNavigate();
  const { color } = useTheme();
  const [displayImage, setDisplayImage] = useState(0);
  const { id } = useParams();
  const { portfolioProject, professional } = useApi();
  const { getSingle } = portfolioProject;
  const { getSingle: getSingleProfessional } = professional;

  const [currentProject, setCurrentProject] = useState<PortfolioProject | null>(
    null
  );
  const [currentProfessional, setCurrentProfessional] =
    useState<Professional | null>(null);

  useEffect(() => {
    async () => {
      if (!id) return;
      const project = await getSingle({ id });
      if (!project) return;
      setCurrentProject(project);
      const professional = await getSingleProfessional({
        id: project.professionalId,
      });
      professional && setCurrentProfessional(professional);
    };
  }, [id]);

  if (!currentProject) return <Loading />;
  if (!currentProfessional) return <Loading />;
  const projectImages = currentProject?.images.split(",");
  return (
    <>
      <MarginContainer>
        <FlexBox alignItems="center" gap={2} py={2}>
          <Button variant="text" onClick={() => navigate(-1)}>
            <CaretLeft weight="fill" /> Voltar
          </Button>
          <EditPortfolioProject />
        </FlexBox>
      </MarginContainer>
      {!projectImages ||
        (projectImages.length == 0 && (
          <GalleryContainer>
            <div className="carousel-bg">
              <img src={projectImages[displayImage]} alt="foto do projeto" />
            </div>
            <FlexBox full justifyContent="center" gap={1} p={1}>
              {projectImages.map((item, index) => (
                <CarouselButton
                  isActive={displayImage == index}
                  className="carousel-btn"
                  onClick={() => setDisplayImage(index)}
                  key={item}
                />
              ))}
            </FlexBox>
          </GalleryContainer>
        ))}
      <InformationContainer>
        <ProfessionalInformation>
          <FlexBox direction="column" gap={1}>
            <h2>{currentProfessional.name}</h2>
            <FlexBox alignItems="center">
              <MapPin weight="fill" size={32} />{" "}
              {currentProfessional.locations.map((item) => (
                <p key={item.id}>{item.state} | </p>
              ))}
            </FlexBox>
            <FlexBox alignItems="center" gap={0.5} mb={1.5}>
              <Star weight="fill" color={color.secondary.yellow} size={40} />
              <p className="rating">4.5</p>
              <p className="quantity">(123)</p>
            </FlexBox>
            <Button variant="text">
              <CaretLeft
                weight="fill"
                onClick={() =>
                  navigate(`/professional/${currentProfessional.userId}`)
                }
              />
              Voltar para perfil
            </Button>
          </FlexBox>
        </ProfessionalInformation>
        <ProjectInformation>
          <h2>{currentProject.name}</h2>
          <p>{currentProject.description}</p>
        </ProjectInformation>
      </InformationContainer>
    </>
  );
};
