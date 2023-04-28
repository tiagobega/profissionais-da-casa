import { Shape } from './styles'

export interface GeometryStyleProps {
  triangle?: boolean
  color: string
  width: number
  height?: number
  angle?: 90 | 180 | 270 | 0
}
export interface GeometryProps extends GeometryStyleProps {}

export const Geometry: React.FC<GeometryProps> = (props) => {
  return <Shape {...props} />
}
