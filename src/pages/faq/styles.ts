import { FlexBox } from 'components/FlexBox'
import styled, { css } from 'styled-components'

export const FAQContainer = styled.section`
  ${({ theme }) => css`
    width: 1171px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    min-height: calc(100vh - 96px - 372px);
    margin: 1rem auto;
  `}
`

export const InformationContainer = styled(FlexBox)`
  ${() => css`
    width: 770px;
    height: 680px;
    h2 {
      font-size: 2rem;
      width: 100%;
      text-align: center;
    }
    .questions {
      width: 100%;
      max-height: 520px;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      overflow-y: scroll;
    }
  `}
`

export const CollapsibleInformation = styled.div`
  ${() => css`
    width: 100%;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    hr {
      border: 1px solid black;
      margin-top: 1rem;
    }
    .question-item {
      h4 {
        margin-bottom: 0.5rem;
      }
    }
  `}
`
