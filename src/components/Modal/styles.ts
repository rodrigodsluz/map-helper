import styled, { css } from 'styled-components';

import Modal from '@mui/material/Modal';

export const StyledMUIModal = styled(Modal)``;

export const ModalContainer = styled.div`
  ${({
    theme: {
      colors: { secondary },
      mediaQueries: { desktopBreakpoint },
    },
  }) => css`
    background-color: ${secondary};
    border: 1px solid ${secondary};

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 1rem;
    box-shadow: 24;
    padding: 3px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    ${desktopBreakpoint} {
      height: 1000px;
      max-width: 1200px;
    }
  `}
`;

export const ModalHeader = styled.div`
  ${({
    theme: {
      colors: { primary },
    },
  }) => css`
    border: 1px solid ${primary};

    svg {
      fill: ${primary};
      width: 25px;
      height: 25px;
    }

    width: 100%;
    height: 38px;

    margin-bottom: 3px;
    line-height: 1.5rem;

    border-radius: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  `}
`;

export const ModalButtonAction = styled.button`
  ${({
    theme: {
      colors: { primary },
    },
  }) => css`
    color: ${primary};

    &:hover {
      transform: scale(1.3);
    }

    &:focus {
      outline: none;
    }

    border: none;
    background-color: transparent;

    cursor: pointer;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const ModalTitle = styled.div`
  ${({
    theme: {
      colors: { primary },
    },
  }) => css`
    color: ${primary};

    width: 100%;

    font-size: 16px;
    font-weight: 600;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const ModalChildrenContainer = styled.div`
  ${() => css`
    width: 100%;
    height: 100%;

    border-radius: 1rem;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  `}
`;
