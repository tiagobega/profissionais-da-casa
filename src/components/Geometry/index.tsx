import { Shape } from "./styles";

export interface GeometryStyleProps {
  triangle?: boolean;
  color: string;
  width: number;
  height?: number;
  angle?: 90 | 180 | 270 | 0;
  responsive?: boolean;
  sizes?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}
export interface GeometryProps extends GeometryStyleProps {}

export const Geometry: React.FC<GeometryProps> = ({ sizes = {}, ...props }) => {
  sizes.sm ??= props.width;
  sizes.md ??= sizes.sm;
  sizes.lg ??= sizes.md;
  sizes.xl ??= sizes.lg;

  return <Shape {...props} />;
};
