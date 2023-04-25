import { Geometry } from 'components/Geometry'
import { LoadingShapes, LoadingWrapper } from './styles'
import Text from 'components/Text'

export interface LoadingProps {}
export const Loading: React.FC<LoadingProps> = () => {
  return (
    <LoadingWrapper>
      <LoadingShapes triangle width={24} color="white" direction="ccw" />
      <LoadingShapes width={24} color="white" direction="ccw" />
      <LoadingShapes
        triangle
        width={24}
        color="white"
        direction="cw"
        angle={90}
      />
      <LoadingShapes triangle width={24} color="white" direction="ccw" />
      <p>Loading...</p>
      <LoadingShapes triangle width={24} color="white" direction="cw" />
      <LoadingShapes width={24} color="white" direction="ccw" />
      <LoadingShapes width={24} color="white" direction="cw" angle={90} />
      <LoadingShapes
        triangle
        width={24}
        color="white"
        direction="ccw"
        angle={180}
      />
    </LoadingWrapper>
  )
}
