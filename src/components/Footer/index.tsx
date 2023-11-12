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
import { useNavigate } from "react-router-dom";

const Footer = (props: FooterProps) => {
  const navigate = useNavigate();

  return (
    <FooterContainer>
      <FooterContent>
        <FlexBox full centralized gap={1.25}>
          <img src={logoText} alt="" loading="lazy" />
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
              <Button
                variant="text"
                color="white"
                onClick={() => navigate("/faq")}
              >
                FAQ
              </Button>
            </FlexBox>
            <FlexBox justifyContent="center" alignItems="center" gap={2}>
              <Button
                variant="text"
                color="white"
                onClick={() => navigate("/terms-conditions")}
              >
                Termos de uso e politica de privacidade
              </Button>
            </FlexBox>
            <FlexBox justifyContent="center" alignItems="center" gap={2}>
              <Button
                variant="text"
                color="white"
                href="/register/professional"
              >
                Seja um Profissional da Casa
              </Button>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <FlexBox centralized gap={2}>
          <Button
            variant="text"
            color="white"
            href="https://www.facebook.com/people/Viva-Cada-Casa/100083397247781/"
          >
            <img src={facebookLogo} alt="facebook" loading="lazy" />
          </Button>
          <Button
            variant="text"
            color="white"
            href="https://www.instagram.com/vivacadacasa/"
          >
            <img src={instagramLogo} alt="instagram" loading="lazy" />
          </Button>
          <Button
            variant="text"
            color="white"
            href="https://br.linkedin.com/company/cadacasa"
          >
            <img src={linkedinLogo} alt="linkedin" loading="lazy" />
          </Button>
          {/* <Button variant="text" color="white" href="https://br.pinterest.com/">
          <img src={pinterestLogo} alt="pinterest" />
        </Button> */}
          <Button
            variant="text"
            color="white"
            href="https://www.youtube.com/@cadacasa7844"
          >
            <img src={youtubeLogo} alt="youtube" loading="lazy" />
          </Button>
        </FlexBox>
      </FooterContent>
    </FooterContainer>
  );
};
export default Footer;
