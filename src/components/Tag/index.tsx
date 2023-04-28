import { TagContainer, TagContainerProps } from './styles'

export interface TagProps extends TagContainerProps {
  tagName: string
}
export const Tag: React.FC<TagProps> = (props) => {
  return <TagContainer {...props}>{props.tagName}</TagContainer>
}
