export default {
  minWidthBreakpoint: (width: number) =>
    `@media screen and (min-width: ${width}px)`,
  maxWidthBreakpoint: (width: number) =>
    `@media screen and (max-width: ${width}px)`,
  mobileBreakpoint: () => '@media screen and (max-width: 900px)',
  tabletBreakpoint: () => '@media screen and (min-width: 901px)',
  desktopBreakpoint: () => '@media screen and (min-width: 1200px)',
};
