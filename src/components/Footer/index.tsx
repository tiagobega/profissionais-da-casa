import { FlexBox } from "components/FlexBox";
import {
  FooterContainer,
  FooterContent,
  FooterHeader,
  FooterHeaderContainer,
  FooterMain,
  FooterSocial,
} from "./styles";
import type { FooterProps } from "./types";
import logoText from "assets/images/logoText.png";
import facebookLogo from "assets/images/facebookLogo.png";
import instagramLogo from "assets/images/instagramLogo.png";
import linkedinLogo from "assets/images/linkedinLogo.png";
import pinterestLogo from "assets/images/pinterestLogo.png";
import youtubeLogo from "assets/images/youtubeLogo.png";
import { Button } from "components/Button";
import { useNavigate } from "react-router-dom";

const footerSocialImages = [
  {
    image: facebookLogo,
    link: "https://www.facebook.com/people/Viva-Cada-Casa/100083397247781/",
    alt: "facebook",
  },
  {
    image: instagramLogo,
    link: "https://www.instagram.com/vivacadacasa/",
    alt: "instagram",
  },
  {
    image: linkedinLogo,
    link: "https://br.linkedin.com/company/cadacasa",
    alt: "linkeIn",
  },
  {
    image: youtubeLogo,
    link: "https://www.youtube.com/@cadacasa7844",
    alt: "youtube",
  },
];

const Footer = (props: FooterProps) => {
  const navigate = useNavigate();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterHeader>
          <FooterHeaderContainer>
            <img src={logoText} alt="" loading="lazy" />
          </FooterHeaderContainer>
          <FooterHeaderContainer>
            <h6>
              Seu lar,
              <br />
              nossa casa
            </h6>
          </FooterHeaderContainer>
        </FooterHeader>

        <FooterMain>
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
        </FooterMain>

        <FooterSocial>
          {footerSocialImages.map(({ image, link }, index) => (
            <Button color="white" variant="text" href={link} key={index}>
              <img src={image} alt="" loading="lazy" />
            </Button>
          ))}
        </FooterSocial>
      </FooterContent>
    </FooterContainer>
  );
};
export default Footer;
