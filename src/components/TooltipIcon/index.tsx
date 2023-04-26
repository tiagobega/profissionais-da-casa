import * as PrimitiveTooltip from '@radix-ui/react-tooltip'
import { ContentContainer, IconContainer } from './styles'
import { ReactNode } from 'react'
import { Question } from '@phosphor-icons/react'
import { Tooltip } from 'components/Tooltip'
import styled from 'styled-components'

export interface TooltipIconProps {
  text: string
  title: string
  icon?: ReactNode
  side?: 'top' | 'bottom'
  boxAlign: 'start' | 'center' | 'end'
}
export const TooltipIcon: React.FC<TooltipIconProps> = ({
  text,
  icon = <Question size={24} />,
  title,
  side,
  boxAlign,
}) => {
  return (
    <PrimitiveTooltip.Root>
      <PrimitiveTooltip.Trigger asChild>
        <IconContainer>{icon}</IconContainer>
      </PrimitiveTooltip.Trigger>
      <Tooltip side={side} boxAlign={boxAlign}>
        <ContentContainer>
          <p className="title">{title}</p>
          <p>{text}</p>
        </ContentContainer>
      </Tooltip>
    </PrimitiveTooltip.Root>
  )
}
