import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { ProjectCardContainer } from "./styles";
import { ProjectType } from "Models/models";

export interface ProjectCardProps {
  project: ProjectType;
}
export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
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
        {project.status === "complete" && <Button>Visão geral</Button>}
        {project.status === "ongoing" && <Button>Acompanhar</Button>}
        {project.status === "not-started" && <Button>Iniciar projeto</Button>}
      </FlexBox>
    </ProjectCardContainer>
  );
};
