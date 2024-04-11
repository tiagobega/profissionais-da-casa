import styled, { css } from 'styled-components';
import { FlexBox } from 'components/FlexBox';
import { FullContainer, MarginContainer } from 'styles/commonComponents';
import { crossm, media, px, vw } from 'styles/utils';

export const GalleryContainer = styled(FullContainer)`
  ${({ theme }) => css`
    .carousel-bg {
      width: 100%;
      height: 300px;
      overflow: hidden;
      background-color: black;
      display: flex;
      justify-content: center;
      img {
        width: 100%;
        max-width: 1366px;
        height: 100%;
        object-fit: cover;
      }

      ${media.md`
      height: 610px;
    `}
    }
  `}
`;
export const InformationContainer = styled(MarginContainer)`
  ${({ theme }) => css`
    display: flex;
    gap: 2rem;
    flex-direction: column-reverse;
    ${media.lg`
      height: 610px;
      flex-direction: row;
    `}
  `}
`;

export const ProfessionalInformation = styled.section`
  ${({ theme }) => css`
    width: 350px;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    .rating {
      font-size: 2rem;
      font-weight: bolder;
    }
    .quantity {
      font-size: 1.5rem;
      font-weight: 400;
    }
  `}
`;

export const ProjectInformation = styled.section`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `}
`;
