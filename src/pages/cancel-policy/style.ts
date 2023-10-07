import { FlexBox } from 'components/FlexBox'
import styled, { css } from 'styled-components'

export const TermsContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: calc(100vh - 96px - 372px);
    background-color: white;
    header {
      height: 96px;
      display: flex;
      align-items: center;
      padding-inline: 72px;
    }
  `}
`
export const InformationContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - 96px);
    background-color: ${theme.color.base[100]};
    padding: 36px 0 72px;
    .content {
      width: 573px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    .text {
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      padding-inline-end: 2rem;
    }
  `}
`
