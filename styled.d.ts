import { DefaultTheme as ThemeType } from "styled-components/native";
import { colors } from "./src/theme"; // 예시로 theme 파일의 colors를 import

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {
    colors: typeof colors; // theme 파일에서 정의한 colors 타입을 사용
  }
}
