import { Button } from 'components/Button'
import { FlexBox } from 'components/FlexBox'
import { ProjectCardContainer } from './styles'

export interface ProjectCardProps {
  projectStatus: 'not-started' | 'ongoing' | 'complete'
}
export const ProjectCard: React.FC<ProjectCardProps> = ({ projectStatus }) => {
  const statusText = () => {
    switch (projectStatus) {
      case 'not-started':
        return 'Projeto não iniciado'
        break
      case 'ongoing':
        return 'Projeto em andamento'
        break
      case 'complete':
        return 'Projeto finalizado'
        break
      default:
        return
    }
  }

  return (
    <ProjectCardContainer
      projectStatus={projectStatus}
      full
      p={1.5}
      direction="column"
      justifyContent="space-between"
    >
      <FlexBox full direction="column">
        <h3>Nome do projeto</h3>
        <p>Nome do cliente</p>
        <p>(12)34567-8910</p>
        <p>esseehomeuemail@email.com</p>
      </FlexBox>
      <FlexBox full alignItems="flex-end" justifyContent="space-between">
        <p className="status">Status:{statusText()}</p>
        {projectStatus === 'complete' && <Button>Visão geral</Button>}
        {projectStatus === 'ongoing' && <Button>Acompanhar</Button>}
        {projectStatus === 'not-started' && <Button>Iniciar projeto</Button>}
      </FlexBox>
    </ProjectCardContainer>
  )
}
