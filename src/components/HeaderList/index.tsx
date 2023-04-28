import { FlexBox } from 'components/FlexBox'
import {
  ButtonContainer,
  InviteContainer,
  RightContainer,
  TextContainer,
} from './styles'
import { Button } from 'components/Button'
import { Geometry } from 'components/Geometry'
import { useTheme } from 'styled-components'

export interface HeaderListProps {}
export const HeaderList: React.FC<HeaderListProps> = () => {
  const { color } = useTheme()
  return (
    <FlexBox full gap={1.75} px={8}>
      <TextContainer direction="column" justifyContent="space-between">
        <h2>Encontre o profissional certo para a sua reforma</h2>
        <div>
          <p>
            Pesquise por arquitetos e engenheiros de acordo com seu portifólio e
            especialização.
          </p>
          <p>Depois, deixe a sua avaliação.</p>
        </div>
      </TextContainer>
      <RightContainer>
        <InviteContainer
          alignItems="center"
          p={2}
          pl={5}
          gap={3}
          justifyContent="space-between"
        >
          <h2>Seja um profissional da casa</h2>
          <FlexBox gap={3} alignItems="center">
            <div>
              <p>
                Estamos sempre procurando novos profissionais de arquitetura e
                engenharia.
              </p>
              <p>
                Faça o cadastro como Profissional da Casa para expor seu
                trabalho e se conectar com clientes em potencial.
              </p>
            </div>
            <ButtonContainer centralized>
              <Button background="white">Seja um Profissional da Casa</Button>
            </ButtonContainer>
          </FlexBox>
        </InviteContainer>
        <FlexBox full justifyContent="space-between">
          <FlexBox>
            <Geometry color={color.brand.pinkLight} width={155} triangle />
            <Geometry color={color.brand.yellowLight} width={155} />
          </FlexBox>
          <Geometry
            color={color.secondary.blue}
            width={155}
            triangle
            angle={270}
          />
        </FlexBox>
      </RightContainer>
    </FlexBox>
  )
}
