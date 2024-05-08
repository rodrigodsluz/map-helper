import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({
    theme: {
      colors: { primary, secondary },
    },
  }) => css`
    background-color: ${primary};
    color: ${secondary};

    display: flex;
    align-items: center;
    justify-content: center;

    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: none;
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
