import { FaCheckCircle } from 'react-icons/fa';
import { FaTriangleExclamation } from 'react-icons/fa6';

import dynamic from 'next/dynamic';
import styled, { css } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

const ToastContainer = dynamic(
  () => import('react-toastify').then(module => module.ToastContainer),
  {
    ssr: false,
  },
);

export const ToastAlertContainer = styled(ToastContainer)`
  ${({
    theme: {
      colors: { error, secondary, primary },
      fonts: { textSubtitleCard },
    },
  }) => css`
    margin-bottom: 3rem;

    .Toastify__toast--error {
      background-color: ${primary};
      border-left: 0.5rem solid ${error};
      border-right: 0.5rem solid ${error};
      border-top: 0.5rem solid ${error};
      margin-top: 2rem;
      border-radius: 2rem;

      b {
        color: ${error};
      }

      .Toastify__progress-bar {
        background: ${error};
      }
    }

    .Toastify__toast--success {
      background-color: ${primary};
      border-left: 0.5rem solid ${secondary};
      border-right: 0.5rem solid ${secondary};
      border-top: 0.5rem solid ${secondary};
      border-radius: 2rem;

      margin-top: 2rem;

      b {
        color: ${secondary};
      }

      .Toastify__progress-bar {
        background: ${secondary};
      }
    }

    .Toastify__progress-bar {
      height: 0.4rem;
    }

    .Toastify__toast-body {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      color: ${secondary};

      b {
        margin-right: 0.5rem;
        font-weight: 600;
        font-size: ${textSubtitleCard};
        text-transform: uppercase;
      }
    }
  `}
`;

export const IconError = styled(FaTriangleExclamation)`
  ${({
    theme: {
      colors: { error },
    },
  }) => css`
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    margin-top: 0.2rem;
    color: ${error};
  `}
`;

export const IconSuccess = styled(FaCheckCircle)`
  ${({
    theme: {
      colors: { secondary },
    },
  }) => css`
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    margin-top: 0.2rem;
    color: ${secondary};
  `}
`;
