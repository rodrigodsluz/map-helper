import { keyframes } from 'styled-components';

export default {
  zoom: keyframes`
    0% {
      transform: scale(0.2);
    }
    100% {
      transform: scale(1.0);
    }
  `,

  glass: keyframes`
    0% {
      background-color: rgba(0, 0, 0, 0);
      backdrop-filter: blur(0);
      -webkit-backdrop-filter: blur(0);
    } 100% {
      background-color: rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(0.7rem);
      -webkit-backdrop-filter: blur(0.7rem);
    }
  `,

  moveUp: keyframes`
    0% {
      transform: translateY(3rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  `,

  fadeIn: keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `,

  moveIn: (string1: string, string2: string, string3: string) => keyframes`
    to {
      transform: translate3d(${string1}, ${string2}, ${string3});
    }
  `,

  bouncedelay: keyframes`
    0%, 80%, 100% {
      transform: scale(0.0);
    }
    40% {
      transform: scale(1.0);
    }
  `,

  rotate: keyframes`
  to {
    transform: rotate(360deg);
  }
  `,

  slideIn: keyframes`
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-50%);
    }
  `,

  shakeAnimation: keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
  `,
};
