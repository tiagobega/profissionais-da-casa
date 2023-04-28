import styled, { css } from 'styled-components'
import { FlexBox } from 'components/FlexBox'

export const CardContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    min-width: 270px;
    width: 270px;
    height: 360px;
    border: 5px solid ${theme.color.base[500]};
  `}
`
export const PhotoContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 150px;
    background-color: black;
    overflow: hidden;
    img {
      width: 100%;
      object-fit: cover;
      transition: ease-in-out ${theme.transition.long};
      &:hover {
        scale: 1.1;
      }
    }
  `}
`
export const ProfileContainer = styled.img`
  ${({ theme }) => css`
    position: absolute;
    width: 84px;
    height: 84px;
    background-color: black;
    border-radius: 50%;
    border: 4px solid ${theme.color.brand.purple};
    overflow: hidden;
    right: 1rem;
    top: 90px;
    object-fit: cover;
  `}
`

export const InformationContainer = styled(FlexBox)`
  ${({ theme }) => css`
    height: 200px;
  `}
`
