import { FlexBox } from 'components/FlexBox'
import { FooterContainer, FooterContent } from './styles'
import type { FooterProps } from './types'
import logoText from 'assets/images/logoText.png'
import facebookLogo from 'assets/images/facebookLogo.png'
import instagramLogo from 'assets/images/instagramLogo.png'
import linkedinLogo from 'assets/images/linkedinLogo.png'
import pinterestLogo from 'assets/images/pinterestLogo.png'
import youtubeLogo from 'assets/images/youtubeLogo.png'

const Footer = (props: FooterProps) => (
  <FooterContainer>
    <FooterContent>
      <FlexBox full centralized gap={1.25}>
        <img src={logoText} alt="" />
        <h6>Seu lar, nossa casa</h6>
      </FlexBox>
      <FlexBox full justifyContent="space-between" my={3} gap={5}>
        <FlexBox
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <strong>Contato</strong>
          <span>+55 11 5197-6500</span>
          <span>contato@vivacadacasa.com.br</span>
        </FlexBox>
        <FlexBox
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <FlexBox justifyContent="center" alignItems="center" gap={2}>
            <strong>FAQ</strong>
            <strong>Política de Troca e Cancelamento</strong>
          </FlexBox>
          <FlexBox justifyContent="center" alignItems="center" gap={2}>
            <strong>Termos de uso</strong>
            <strong>Politica de Privacidade</strong>
            <strong>Politica de Devolução e Reenbolso</strong>
          </FlexBox>
          <FlexBox justifyContent="center" alignItems="center" gap={2}>
            <strong>Seja um Profissional da Casa</strong>
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <FlexBox centralized gap={2}>
        <img src={facebookLogo} alt="facebook" />
        <img src={instagramLogo} alt="instagram" />
        <img src={linkedinLogo} alt="linkedin" />
        <img src={pinterestLogo} alt="pinterest" />
        <img src={youtubeLogo} alt="youtube" />
      </FlexBox>
    </FooterContent>
  </FooterContainer>
)
export default Footer
