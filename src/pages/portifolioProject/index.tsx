import { CaretLeft, MapPin, Star } from '@phosphor-icons/react'
import { Button } from 'components/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CarouselButton,
  FullContainer,
  MarginContainer,
} from 'styles/commonComponents'
import {
  GalleryContainer,
  InformationContainer,
  ProfessionalInformation,
  ProjectInformation,
} from './styles'
import { FlexBox } from 'components/FlexBox'
import { useTheme } from 'styled-components'
import { EditPortfolioProject } from './EditProject'

export interface PortfolioProjectPageProps {}
export const PortfolioProjectPage: React.FC<
  PortfolioProjectPageProps
> = () => {
  const navigate = useNavigate()
  const { color } = useTheme()
  const [displayImage, setDisplayImage] = useState(0)

  const project = {
    name: 'Projeto Casa Dolores',
    professional: {
      name: 'Elton Leniz Arquitetos Associados',
      location: 'Santiago-Chile',
      rating: 4.8,
      rating_quantity: 27,
      id: 1,
    },
    description: `Este projeto de habitação unifamiliar faz parte de um processo de remodelação de uma casa existente em um setor residencial de baixa densidade na comuna de Vitacura. Em um terreno de aproximadamente 400 m2, a casa original era quase irreconhecível devido a ampliações precárias e mal executadas.A estratégia para a intervenção foi interferir de maneira mínima nos espaços internos com ampliações e demolições muito precisas para alcançar mais continuidade dos espaços sociais no primeiro nível e melhorar as condições de luz natural e habitabilidade no segundo nível, onde os quartos são distribuídos. Da mesma forma, a estratégia para a expressão do exterior foi unificar o volume compacto de dois níveis, utilizando o tijolo artesanal em toda sua dimensão expressiva e tectônica.`,
    images: [
      'https://images.adsttc.com/media/images/6453/0d59/d36e/5701/7c24/cdd1/newsletter/casa-dolores-elton-leniz_7.jpg?1683164570',
      'https://images.adsttc.com/media/images/6453/0d57/d36e/5701/7c24/cdcf/slideshow/casa-dolores-elton-leniz_3.jpg?1683164581',
      'https://images.adsttc.com/media/images/6453/0d57/d36e/5701/7c24/cdce/slideshow/casa-dolores-elton-leniz_8.jpg?1683164553',
      'https://images.adsttc.com/media/images/6453/0d58/9cc5/e401/7c99/9f0d/slideshow/casa-dolores-elton-leniz_9.jpg?1683164562',
    ],
  }

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
      <GalleryContainer>
        <div className="carousel-bg">
          <img src={project.images[displayImage]} alt="foto do projeto" />
        </div>
        <FlexBox full justifyContent="center" gap={1} p={1}>
          {project.images.map((item, index) => (
            <CarouselButton
              isActive={displayImage == index}
              className="carousel-btn"
              onClick={() => setDisplayImage(index)}
              key={item}
            />
          ))}
        </FlexBox>
      </GalleryContainer>
      <InformationContainer>
        <ProfessionalInformation>
          <FlexBox direction="column" gap={1}>
            <h2>{project.professional.name}</h2>
            <FlexBox alignItems="center">
              <MapPin weight="fill" size={32} /> {project.professional.location}
            </FlexBox>
            <FlexBox alignItems="center" gap={0.5} mb={1.5}>
              <Star weight="fill" color={color.secondary.yellow} size={40} />
              <p className="rating">4.5</p>
              <p className="quantity">(123)</p>
            </FlexBox>
            <Button variant="text">
              <CaretLeft weight="fill" />
              Voltar para perfil
            </Button>
          </FlexBox>
        </ProfessionalInformation>
        <ProjectInformation>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </ProjectInformation>
      </InformationContainer>
    </>
  )
}
