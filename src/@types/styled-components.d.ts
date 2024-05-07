/* eslint @typescript-eslint/no-empty-interface: "off" */

import { theme } from '@styles/theme';
import 'styled-components';

export type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

/* Boilerplate of how to use the theme in styled components

${({
    theme: {
      colors: {},
      fonts: {},
      mediaQueries: { minWidthBreakpoint },
      animations: {},
    },
  }) => css`

  `}

*/
