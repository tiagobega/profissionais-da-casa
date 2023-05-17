import { CaretLeft, CaretRight, MapPin, Star } from '@phosphor-icons/react'
import { Button } from 'components/Button'
import { FlexBox } from 'components/FlexBox'
import { useNavigate, useParams } from 'react-router-dom'
import { useTheme } from 'styled-components'
import {
  GalleryContainer,
  HeaderContainer,
  RatingContainer,
  RatingHeader,
  ReviewContainer,
  ReviewSection,
} from './styles'
import { useState } from 'react'
import { CarouselButton, MarginContainer } from 'styles/commonComponents'

export interface ProfessionalProfileProps {}
export const ProfessionalProfilePage: React.FC<
  ProfessionalProfileProps
> = () => {
  const { color } = useTheme()
  const navigate = useNavigate()
  const id = useParams()

  const [displayProject, setDisplayProject] = useState(0)
  const [displayReview, setDisplayReview] = useState(0)

  const projectList = [
    {
      id: 0,
      name: 'Project 1',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat libero porro cumque velit. Voluptatem doloribus voluptate non consequuntur adipisci Voluptatem a numquam quod rerum tempore deserunt unde fuga quidem?',
      image:
        'https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 1,
      name: 'Project 2',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat libero porro cumque velit. Voluptatem doloribus voluptate non consequuntur adipisci Voluptatem a numquam quod rerum tempore deserunt unde fuga quidem?',
      image:
        'https://images.pexels.com/photos/6527069/pexels-photo-6527069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ]

  const reviewList = [
    {
      id: 0,
      name: 'Cliente 1',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat libero porro cumque velit. Voluptatem doloribus voluptate non consequuntur adipisci Voluptatem a numquam quod rerum tempore deserunt unde fuga quidem?',
    },
    {
      id: 1,
      name: 'Cliente 2',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat libero porro cumque velit. Voluptatem doloribus voluptate non consequuntur adipisci Voluptatem a numquam quod rerum tempore deserunt unde fuga quidem?',
    },
    {
      id: 2,
      name: 'Cliente 3',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat libero porro cumque velit. Voluptatem doloribus voluptate non consequuntur adipisci Voluptatem a numquam quod rerum tempore deserunt unde fuga quidem?',
    },
    {
      id: 3,
      name: 'Cliente 4',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat libero porro cumque velit. Voluptatem doloribus voluptate non consequuntur adipisci Voluptatem a numquam quod rerum tempore deserunt unde fuga quidem?',
    },
    {
      id: 4,
      name: 'Cliente 5',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat libero porro cumque velit. Voluptatem doloribus voluptate non consequuntur adipisci Voluptatem a numquam quod rerum tempore deserunt unde fuga quidem?',
    },
  ]

  return (
    <>
      <MarginContainer>
        <Button variant="text" onClick={() => navigate(-1)}>
          <CaretLeft weight="fill" /> Voltar
        </Button>
      </MarginContainer>
      <HeaderContainer>
        <FlexBox full justifyContent="space-between" alignItems="center">
          <div>
            <FlexBox alignItems="center" gap={2}>
              <img
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="profile picture"
                className="profile-img"
              />
              <FlexBox direction="column" gap={1}>
                <FlexBox alignItems="center" gap={2}>
                  <h2>Nome do Profissional</h2>
                  <FlexBox alignItems="center" gap={0.5}>
                    <MapPin weight="fill" />
                    <p>Localização</p>
                  </FlexBox>
                </FlexBox>
                <p className="description-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio est veniam debitis incidunt nobis modi quasi quis
                  architecto beatae expedita aspernatur, quisquam ipsum officia.
                  Dicta fugit cum magnam maiores dignissimos.
                </p>
                <RatingHeader alignItems="center" gap={2}>
                  <div className="rating">
                    <Star
                      weight="fill"
                      size={32}
                      color={color.secondary.yellow}
                    />{' '}
                    <p>4.5</p>
                    <span>(123)</span>
                  </div>
                  <Button variant="text">
                    Deixe sua avaliação <CaretRight weight="fill" />
                  </Button>
                </RatingHeader>
              </FlexBox>
            </FlexBox>
            <ul className="category-list">
              <li>Categoria A</li>
              <li>Categoria B</li>
              <li>Categoria C</li>
            </ul>
          </div>
          <Button
            variant="primary"
            background={color.brand.yellowLight}
            className="contact"
          >
            Entrar em contato
          </Button>
        </FlexBox>
      </HeaderContainer>
      <GalleryContainer>
        <div className="gallery-bg">
          <img
            src={projectList[displayProject].image}
            alt="project image"
            className="gallery-img"
          />
          <div className="gallery-info">
            <FlexBox direction="column" gap={1}>
              <h5>{projectList[displayProject].name}</h5>
              <p>{projectList[displayProject].description}</p>
              <Button variant="text">
                Ver Mais
                <CaretRight weight="fill" />
              </Button>
            </FlexBox>
          </div>
        </div>
        <FlexBox full justifyContent="center" gap={1} p={1}>
          {projectList.map((item, index) => (
            <CarouselButton
              isActive={displayProject == index}
              className="carousel-btn"
              onClick={() => setDisplayProject(index)}
              key={item.id}
            />
          ))}
        </FlexBox>
      </GalleryContainer>
      <ReviewSection>
        <FlexBox direction="column" alignItems="center" gap={3}>
          <h3>Depoimentos</h3>
          <FlexBox full justifyContent="center" alignItems="flex-start" gap={5}>
            <RatingContainer
              alignItems="center"
              direction="column"
              justifyContent="flex-start"
            >
              <FlexBox alignItems="center" gap={1}>
                <Star weight="fill" color={color.secondary.yellow} size={90} />
                <p className="rating">4.5</p>
              </FlexBox>
              <p className="quantity">(123)</p>
            </RatingContainer>
            <ReviewContainer direction="column" alignItems="center" gap={1}>
              <FlexBox gap={2}>
                {reviewList
                  .slice(displayReview, displayReview + 2)
                  .map((item, index) => (
                    <div className="review-item" key={item.id}>
                      <p>{item.description}</p>
                      <strong>{item.name}</strong>
                    </div>
                  ))}
              </FlexBox>
              <FlexBox full justifyContent="center" gap={1} p={1}>
                {reviewList.map((item, index) => (
                  <CarouselButton
                    isActive={displayReview == index}
                    className="carousel-btn"
                    onClick={() => setDisplayReview(index)}
                    key={item.id}
                  />
                ))}
              </FlexBox>
            </ReviewContainer>
          </FlexBox>
        </FlexBox>
      </ReviewSection>
    </>
  )
}
