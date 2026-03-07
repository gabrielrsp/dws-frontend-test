import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      neutrals: {
        lightest: string;
        extraLight: string;
        light: string;
        medium: string;
        dark: string;
        extraDark: string;
        darkest: string;
      };
      primary: {
        light: string;
        medium: string;
        dark: string;
      };
      secondary: {
        light: string;
        medium: string;
        dark: string;
      };
      accent1: {
        light: string;
        medium: string;
        dark: string;
      };
    };

    typography: {
      large: {
        fontSize: string;
        lineHeight: string;
        fontWeight: number;
      };
      small: {
        fontSize: string;
        lineHeight: string;
        fontWeight: number;
      };
      caption: {
        fontSize: string;
        lineHeight: string;
        fontWeight: number;
      };
    };
  }
}