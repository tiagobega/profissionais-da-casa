import { Star, StarHalf } from "@phosphor-icons/react";
import { FlexBox } from "components/FlexBox";
import { useTheme } from "styled-components";
import { starsArray } from "utils/starsArray";

export interface StarMeterProps {
  rating: number;
  size?: number;
}

export const StarMeter: React.FC<StarMeterProps> = ({ rating, size = 24 }) => {
  const { color } = useTheme();
  const yellow = color.secondary.yellow;
  return (
    <FlexBox gap={1}>
      {starsArray(rating).map((star) => {
        switch (star) {
          case 0:
            return <Star size={size} color={yellow} />;
            break;
          case 1:
            return <StarHalf weight="fill" size={size} color={yellow} />;
            break;
          case 2:
            return <Star size={size} color={yellow} weight="fill" />;
            break;

          default:
            break;
        }
      })}
    </FlexBox>
  );
};
