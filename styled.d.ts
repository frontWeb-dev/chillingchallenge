import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      mainBgColor: string;
      textColor: string;
      subTextColor: string;
      textInvertColor: string;
      green_100: string;
      green_200: string;
      borderColor: string;
      black: string;
      white: string;
    };

    font: {
      title: string;
      subtitle: string;
      normal: string;
      small: string;
      smaller: string;
    };
  }
}
