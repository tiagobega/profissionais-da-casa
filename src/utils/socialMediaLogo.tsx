import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  PinterestLogo,
} from "@phosphor-icons/react";

export const socialMediaIcon = (name: string) => {
  switch (name) {
    case "Facebook":
      return <FacebookLogo size={40} weight="fill" />;
      break;

    case "LinkedIn":
      return <LinkedinLogo size={40} weight="fill" />;
      break;

    case "Instagram":
      return <InstagramLogo size={40} weight="fill" />;
      break;

    case "Pinterest":
      return <PinterestLogo size={40} weight="fill" />;
      break;
    default:
      break;
  }
};
