import { CaretDown, CaretRight } from '@phosphor-icons/react'
import { FlexBox } from 'components/FlexBox'
import { ReactElement, ReactNode, useState } from 'react'
import { BodyContainer, CollapsibleContainer, TitleContainer } from './styles'

export interface CollapsibleProps {
  title: string
  children: ReactNode
  actionButton?: ReactElement
  titleButton?: ReactElement
}
export const Collapsible: React.FC<CollapsibleProps> = ({
  title,
  children,
  actionButton,
  titleButton,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <CollapsibleContainer>
      <TitleContainer
        isOpen={isOpen}
        alignItems="center"
        justifyContent="space-between"
        full
        p={1}
      >
        <FlexBox alignItems="center" gap={1} onClick={() => setIsOpen(!isOpen)}>
          <CaretRight
            onClick={() => setIsOpen(true)}
            size={24}
            className="toggle"
          />
          <h4>{title}</h4>
          {titleButton}
        </FlexBox>
        {actionButton}
      </TitleContainer>
      <BodyContainer isOpen={isOpen} aria-hidden={!isOpen}>
        <div>{children}</div>
      </BodyContainer>
    </CollapsibleContainer>
  )
}
