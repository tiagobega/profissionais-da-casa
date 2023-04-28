import { CaretRight, Star } from '@phosphor-icons/react'
import { Button } from 'components/Button'
import { FlexBox } from 'components/FlexBox'
import { useTheme } from 'styled-components'
import {
  ButtonContainer,
  CardContainer,
  InformationContainer,
  PhotoContainer,
  ProfileContainer,
} from './styles'
import profilePlaceholder from 'assets/images/profile-placeholder.jpeg'
import photoPlaceholder from 'assets/images/photo-placeholder.jpeg'
import { Tag } from 'components/Tag'

export interface CardProfileProps {}
export const CardProfile: React.FC<CardProfileProps> = () => {
  const { color } = useTheme()

  const profile = {
    id: 1,
    name: 'Andréa Albuquerque de OliveiraaaaAAAAAAAAA',
    profession: 'Arquiteto(a)',
    rating: 4.5,
    tags: ['Interiores', 'Reformas', 'Ambientes pequenos', 'Acessibilidade'],
  }

  return (
    <CardContainer>
      <PhotoContainer>
        <img src={photoPlaceholder} alt="projeto em destaque" />
      </PhotoContainer>
      <ProfileContainer src={profilePlaceholder} alt="foto do profissional" />
      <InformationContainer
        direction="column"
        p={0.5}
        pt={1.5}
        justifyContent="flex-end"
        gap={1}
        full
      >
        <div>
          <p>{profile.profession}</p>
          <h3 className={`${profile.name.length > 22 ? 'small' : ''}`}>
            {profile.name}
          </h3>
        </div>
        <FlexBox alignItems="center" gap={0.5}>
          <Star size={32} weight="fill" color={color.secondary.yellow} />
          <h3>x {profile.rating}</h3>
        </FlexBox>
        <FlexBox wrap gap={0.25}>
          {profile.tags.slice(0, 3).map((tag, index) => (
            <Tag tagName={tag} key={`${profile.id}${index}${tag}`} />
          ))}
          {profile.tags.length > 3 && <Tag tagName="..." />}
        </FlexBox>
        <ButtonContainer full justifyContent="flex-end">
          <Button
            variant="text"
            color={color.secondary.lightTeal}
            onClick={() => window.alert('open profile')}
          >
            Ver mais <CaretRight />
          </Button>
        </ButtonContainer>
      </InformationContainer>
    </CardContainer>
  )
}
