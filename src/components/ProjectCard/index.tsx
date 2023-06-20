import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { ProjectCardContainer } from "./styles";
import { ProjectType } from "Models/models";
import { useNavigate } from "react-router-dom";

export interface ProjectCardProps {
  project: ProjectType;
  isCustomer?: boolean;
}
export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isCustomer,
}) => {
  const navigate = useNavigate();

  const statusText = () => {
    switch (project.status) {
      case "not-started":
        return "Projeto não iniciado";
        break;
      case "ongoing":
        return "Projeto em andamento";
        break;
      case "complete":
        return "Projeto finalizado";
        break;
      default:
        return;
    }
  };

  const completeActions = () => {
    return (
      <FlexBox gap={1.5}>
        <Button onClick={() => navigate("/project-details/1")}>
          Visão geral
        </Button>
        {isCustomer && (
          <Button variant="outline" onClick={() => navigate("/review/1")}>
            Avaliar
          </Button>
        )}
      </FlexBox>
    );
  };

  return (
    <ProjectCardContainer
      projectStatus={project.status}
      full
      p={1.5}
      direction="column"
      justifyContent="space-between"
    >
      <FlexBox full direction="column">
        <h3>{project.name}</h3>
        <p>{project.customer}</p>
        <p>{project.phone}</p>
        <p>{project.email}</p>
      </FlexBox>
      <FlexBox full alignItems="flex-end" justifyContent="space-between">
        <p className="status">Status: {statusText()}</p>
        {project.status === "complete" && completeActions()}
        {project.status === "ongoing" && (
          <Button onClick={() => navigate("/project-details/1")}>
            Acompanhar
          </Button>
        )}
        {project.status === "not-started" && (
          <Button onClick={() => navigate("/project-details/1")}>
            Iniciar projeto
          </Button>
        )}
      </FlexBox>
    </ProjectCardContainer>
  );
};
