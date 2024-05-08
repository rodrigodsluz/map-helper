import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f00;

    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: none;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;

    position: fixed;
    right: 2rem;
    bottom: 2rem;

    &:hover {
      filter: brightness(0.7);
    }
  `}
`;
