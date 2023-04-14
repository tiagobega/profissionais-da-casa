import styled, { css } from 'styled-components'

export interface FlexBoxStyleProps {
  direction?: 'row' | 'column'
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-evenly'
    | 'space-between'
  alignItems?: 'center' | 'flex-start' | 'flex-end'
  //gap size in REM
  gap?: number
  //vertical padding in REM
  py?: number
  //horizontal padding in REM
  px?: number
  //uniform padding in REM
  p?: number
  //vertical margin in REM
  my?: number
  //horizontal margin in REM
  mx?: number
  //uniform margin in REM
  m?: number
  //top margin in REM
  mt?: number
  //bottom margin in REM
  mb?: number
  //left margin in REM
  ml?: number
  //right margin in REM
  mr?: number
  //top padding in REM
  pt?: number
  //bottom padding in REM
  pb?: number
  //left padding in REM
  pl?: number
  //right padding in REM
  pr?: number
  centralized?: boolean
  full?: boolean
}

const setMargin = (
  m: number,
  my: number,
  mx: number,
  mt: number,
  mb: number,
  ml: number,
  mr: number
) => {
  let mTop = 0
  let mBottom = 0
  let mLeft = 0
  let mRight = 0
  if (m > 0) {
    mTop = m
    mBottom = m
    mLeft = m
    mRight = m
  }
  if (mx > 0) {
    mLeft = mx
    mRight = mx
  }
  if (my > 0) {
    mTop = my
    mBottom = my
  }
  if (mt > 0) {
    mTop = mt
  }
  if (mb > 0) {
    mBottom = mb
  }
  if (ml > 0) {
    mLeft = ml
  }
  if (mr > 0) {
    mRight = mr
  }

  return `${mTop}rem ${mRight}rem ${mBottom}rem ${mLeft}rem`
}

const setPadding = (
  p: number,
  py: number,
  px: number,
  pt: number,
  pb: number,
  pl: number,
  pr: number
) => {
  let pTop = 0
  let pBottom = 0
  let pLeft = 0
  let pRight = 0
  if (p > 0) {
    pTop = p
    pBottom = p
    pLeft = p
    pRight = p
  }
  if (px > 0) {
    pLeft = px
    pRight = px
  }
  if (py > 0) {
    pTop = py
    pBottom = py
  }
  if (pt > 0) {
    pTop = pt
  }
  if (pb > 0) {
    pBottom = pb
  }
  if (pl > 0) {
    pLeft = pl
  }
  if (pr > 0) {
    pRight = pr
  }

  return `${pTop}rem ${pRight}rem ${pBottom}rem ${pLeft}rem`
}

export const FlexBoxContainer = styled.div<FlexBoxStyleProps>`
  ${({
    centralized = false,
    alignItems = 'flex-start',
    justifyContent = 'flex-start',
    m = 0,
    mx = 0,
    my = 0,
    mt = 0,
    mb = 0,
    mr = 0,
    ml = 0,
    pt = 0,
    pb = 0,
    pr = 0,
    pl = 0,
    p = 0,
    px = 0,
    py = 0,
    gap = 0,
    direction = 'row',
    full = false,
  }) => css`
    flex-direction: ${direction};
    display: flex;
    align-items: ${centralized ? 'center' : alignItems};
    justify-content: ${centralized ? 'center' : justifyContent};
    gap: ${gap}rem;
    margin: ${setMargin(m, my, mx, mt, mb, ml, mr)};
    padding: ${setPadding(p, py, px, pt, pb, pl, pr)};
    width: ${full && '100%'};
  `}
`
