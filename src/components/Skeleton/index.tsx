import { Children, ReactNode } from 'react'
import { SkeletonContainer } from './styles'
import { FlexBox } from 'components/FlexBox'

export interface SkeletonProps {
  variant: 'line' | 'rectangle' | 'round'
  width: number
  height?: number
  pulse?: boolean
  children?: ReactNode
}
export const Skeleton: React.FC<SkeletonProps> = (props) => {
  return <SkeletonContainer {...props}>{props.children}</SkeletonContainer>
}
