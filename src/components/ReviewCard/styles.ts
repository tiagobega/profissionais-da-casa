import { FlexBox } from 'components/FlexBox'
import styled, { css } from 'styled-components'
export const ReviewContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 122px;
    padding: 1.5rem;
    border: 3px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    max-width: 770px;
    background-color: white;
    img {
      width: 76px;
      height: 76px;
      overflow: hidden;
      border-radius: 50%;
      object-fit: cover;
    }
  `}
`
export const InfoContainer = styled(FlexBox)`
  ${({ theme }) => css`
    height: 100%;
    flex: 1;
  `}
`