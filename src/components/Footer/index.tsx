import { FlexBox } from "components/FlexBox";
import { FooterContainer, FooterContent } from "./styles";
import type { FooterProps } from "./types";
import logoText from "assets/images/logoText.png";
import facebookLogo from "assets/images/facebookLogo.png";
import instagramLogo from "assets/images/instagramLogo.png";
import linkedinLogo from "assets/images/linkedinLogo.png";
import pinterestLogo from "assets/images/pinterestLogo.png";
import youtubeLogo from "assets/images/youtubeLogo.png";
import { Button } from "components/Button";

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
            <Button variant="text" color="white" href="/faq">
              FAQ
            </Button>
            <Button variant="text" color="white" href="/cancel-policy">
              Política de Troca e Cancelamento
            </Button>
          </FlexBox>
          <FlexBox justifyContent="center" alignItems="center" gap={2}>
            <Button variant="text" color="white" href="/terms-conditions">
              Termos de uso
            </Button>
            <Button variant="text" color="white" href="#">
              Politica de Privacidade
            </Button>
            <Button variant="text" color="white" href="return-policy">
              Politica de Devolução e Reembolso
            </Button>
          </FlexBox>
          <FlexBox justifyContent="center" alignItems="center" gap={2}>
            <Button variant="text" color="white" href="/register/professional">
              Seja um Profissional da Casa
            </Button>
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <FlexBox centralized gap={2}>
        <Button variant="text" color="white" href="#">
          <img src={facebookLogo} alt="facebook" />
        </Button>
        <Button variant="text" color="white" href="#">
          <img src={instagramLogo} alt="instagram" />
        </Button>
        <Button
          variant="text"
          color="white"
          href="https://br.linkedin.com/company/cadacasa"
        >
          <img src={linkedinLogo} alt="linkedin" />
        </Button>
        <Button variant="text" color="white" href="#">
          <img src={pinterestLogo} alt="pinterest" />
        </Button>
        <Button variant="text" color="white" href="#">
          <img src={youtubeLogo} alt="youtube" />
        </Button>
      </FlexBox>
    </FooterContent>
  </FooterContainer>
);
export default Footer;
