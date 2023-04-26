import { Plus } from '@phosphor-icons/react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import React, { ReactNode } from 'react'
import { Arrow, Content } from './styles'
import { Geometry } from 'components/Geometry'
import { useTheme } from 'styled-components'

export interface TooltipProps {
  children: ReactNode
  maxWidth?: number
  side?: 'top' | 'bottom'
  boxAlign: 'start' | 'center' | 'end'
}
export const Tooltip: React.FC<TooltipProps> = ({
  children,
  maxWidth,
  side = 'top',
  boxAlign,
}) => {
  const arrowIsInverted = () => {
    switch (side) {
      case 'top': {
        return boxAlign == 'start' ? true : false
        break
      }
      case 'bottom': {
        return boxAlign !== 'start' ? true : false
        break
      }
      default:
        return false
    }
  }

  return (
    <TooltipPrimitive.Portal>
      <Content
        sideOffset={5}
        side={side}
        data-side={side}
        align={boxAlign}
        maxWidth={maxWidth}
        data-align={boxAlign}
      >
        {children}
        <TooltipPrimitive.Arrow asChild>
          {boxAlign != 'center' && <CustomArrow inverted={arrowIsInverted()} />}
        </TooltipPrimitive.Arrow>
      </Content>
    </TooltipPrimitive.Portal>
  )
}

const CustomArrow = ({ inverted = false }) => {
  const theme = useTheme()
  const path = inverted ? 'M0 28 L28 0 L28 28 Z' : 'M0 0 L28 28 L0 28 Z'
  return (
    <Arrow inverted={inverted}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} fill={theme.color.brand.yellowLight} />
      </svg>
    </Arrow>
  )
}
