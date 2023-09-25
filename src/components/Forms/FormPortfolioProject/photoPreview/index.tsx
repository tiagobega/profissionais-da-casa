import { Star, X } from "@phosphor-icons/react";
import { ImageContainer } from "./styles";
import { Button } from "components/Button";

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
  return (
    <ImageContainer isCover={isCover}>
      <img src={url} onClick={toggleCover} />
      <X className="delete" onClick={removePicture} />
      <Button
        className="cover"
        onClick={toggleCover}
        variant="text"
        disabled={isCover}
      >
        <Star />
        Capa
      </Button>
    </ImageContainer>
  );
};
