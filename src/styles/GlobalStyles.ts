import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  ${({
    theme: {
      colors: { mainBackground, primary, scrollBar, nProgressLoadingBar },
    },
  }) => css`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      text-decoration: none !important;
      -webkit-font-smoothing: antialiased !important;
      list-style: none !important;
      outline: none;
      font-family: 'Poppins', 'Arial', sans-serif !important;
    }

    html {
      font-size: 62.5%;
    }

    body,
    html,
    #__next {
      background: ${mainBackground};

      color: ${primary};
    }

    body,
    #root,
    input,
    select,
    textarea,
    button {
      font: 400 1.6rem 'Poppins', sans-serif;
    }

    button {
      border: none;
      border-radius: 0.6rem;
    }

    #__next {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      min-height: 100vh;
    }

    a,
    a:active {
      color: inherit;
      text-decoration: none;
    }

    button {
      cursor: pointer;
    }

    :root {
      scrollbar-color: ${primary} ${mainBackground} !important;
      scrollbar-width: 0.7rem !important;
    }

    /* **** Scrollbar **** */
    ::-webkit-scrollbar,
    scrollbar-width {
      width: 0.7rem !important;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${scrollBar};
      border-radius: 2rem;
    }
    /* **** Scrollbar **** */

    /* **** NProgress Loading Bar **** */
    #nprogress .bar {
      background: ${nProgressLoadingBar};

      position: fixed;
      z-index: 1032;
      top: 0;
      left: 0;

      width: 100%;
      height: 0.5rem;

      border-radius: 1rem;
    }
    /* **** NProgress Loading Bar **** */

    // Remove following styles Rodrigo, they are for the Landing Page
    .container {
      max-width: 80%;
      margin: auto;
    }
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .heading {
      text-align: center;
      width: 60%;
      margin: auto;
    }
    .heading h1 {
      color: #2d3954;
      font-weight: 600;
      text-transform: capitalize;
      font-size: 35px;
    }
    .heading p {
      color: #72809d;
    }

    .background {
      padding: 80px 0;
      position: relative;
      background: #f7f9fc;
    }

    .grid5 {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 30px;
    }

    .mtop {
      margin-top: 50px;
    }

    .shadow {
      box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%);
    }
    .padding {
      padding: 80px 0;
    }
    .grid3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 30px;
    }

    .btn2 {
      border-radius: 50px;
      font-size: 20px;
    }
    .grid4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 30px;
    }
    .btn3 {
      background: #ff6922;
      border-radius: 50px;
    }
    .btn4 {
      background-color: #000;
      color: #fff;
    }
    .btn5 {
      border-radius: 50px;
      padding: 20px 40px;
      color: #27ae60;
      font-size: 20px;
      font-weight: 400;
      border: 5px solid #27ae601f;
      background: #fff;
    }
    .back {
      height: 40vh;
      position: relative;
    }
    .back img {
      height: 40vh;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      object-fit: cover;
    }
    .back::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 40vh;
      background: rgba(17, 40, 72, 0.629);
      z-index: -1;
    }
    .back .container {
      color: #fff;
      padding: 120px 0;
    }
    .back h1 {
      font-size: 40px;
      font-weight: 500;
    }
    .mb {
      margin-bottom: 80px;
    }
    @media screen and (max-width: 800px) {
      .grid4,
      .grid3,
      .grid5 {
        grid-template-columns: repeat(2, 1fr);
      }
      .heading {
        width: 100%;
      }
      .container {
        max-width: 90%;
      }
      .back::after,
      .back img,
      .back {
        height: 30vh;
      }
    }
  `}
`;
