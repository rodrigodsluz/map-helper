import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  `}
`;

export const PlacesList = styled.ul`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style: none;
  `}
`;
