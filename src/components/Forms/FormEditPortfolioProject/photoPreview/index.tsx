import { Star, X, XCircle } from "@phosphor-icons/react";
import { ImageContainer } from "./styles";
import { Button } from "components/Button";
import { useTheme } from "styled-components";

export interface PhotoPreviewProps {
  isCover: boolean;
  url: string;
  removePicture: () => void;
  toggleCover: () => void;
}

export const PhotoPreview: React.FC<PhotoPreviewProps> = ({
  isCover,
  url,
  removePicture,
  toggleCover,
}) => {
  const theme = useTheme();
  return (
    <ImageContainer isCover={isCover}>
      <img src={url} onClick={toggleCover} loading="lazy" />
      <XCircle
        className="delete"
        onClick={removePicture}
        weight="fill"
        color={theme.color.brand.yellowLight}
        size={18}
      />
      <Button
        className="cover"
        onClick={toggleCover}
        variant="text"
        disabled={isCover}
      >
        <Star />
      </Button>
    </ImageContainer>
  );
};
