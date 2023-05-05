import { FlexBox } from 'components/FlexBox'
import { InfoContainer, ReviewContainer } from './styles'
import profile from 'assets/images/profile-placeholder.jpeg'
import { Star } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { Button } from 'components/Button'

export interface ReviewCardProps {}
export const ReviewCard: React.FC<ReviewCardProps> = () => {
  const { color } = useTheme()
  return (
    <ReviewContainer>
      <img src={profile} alt="" />
      <InfoContainer direction="column" gap={0.75}>
        <p>
          <strong>Aurélia Santana</strong> sobre
          <strong> Paulo Faguntes Arquitetura</strong>
        </p>
        <FlexBox gap={1}>
          <Star weight="fill" color={color.secondary.yellow} size={36} />
          <Star weight="fill" color={color.secondary.yellow} size={36} />
          <Star weight="fill" color={color.secondary.yellow} size={36} />
          <Star weight="fill" color={color.secondary.yellow} size={36} />
        </FlexBox>
      </InfoContainer>
      <Button background="white">Analisar</Button>
    </ReviewContainer>
  )
}
