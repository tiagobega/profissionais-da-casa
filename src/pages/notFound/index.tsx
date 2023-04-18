import { FlexBox } from 'components/FlexBox'
import { Skeleton } from 'components/Skeleton'

const NotFound = () => (
  <div className="HomePage">
    <h1>notFound</h1>
    <FlexBox gap={2} p={2}>
      <Skeleton width={270} height={360} variant="rectangle" pulse />
      <Skeleton width={270} height={360} variant="rectangle" pulse />
      <Skeleton width={270} height={360} variant="rectangle" pulse />
      <Skeleton width={270} variant="round" pulse />
      <Skeleton width={180} variant="round" pulse />
    </FlexBox>
    <FlexBox direction="column" gap={1} p={2}>
      <Skeleton width={360} height={24} variant="rectangle" pulse />
      <Skeleton width={270} height={12} variant="rectangle" pulse />
      <Skeleton width={300} height={12} variant="rectangle" pulse />
      <Skeleton width={300} height={12} variant="rectangle" pulse />
      <Skeleton width={300} height={12} variant="rectangle" pulse />
    </FlexBox>
  </div>
)

export default NotFound
