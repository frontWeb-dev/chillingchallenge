import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mainBgColor: string;
    textColor: string;
    subTextColor: string;
    textInvertColor: string;
    green_100: string;
    green_200: string;
    borderColor: string;
  }

  // export interface Theme {
  //   colors: {
  //     green_100: string;
  //     green_200: string;
  //     blue_100: string;
  //     blue_200: string;
  //     black: string;
  //     white: string;
  //     yellow: string;
  //     grey_100: string;
  //     grey_200: string;
  //     grey_300: string;
  //     red: string;
  //   };
  // }
}
