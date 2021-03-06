import "styled-components";
import type { FlattenSimpleInterpolation } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      primary: string;
      secon: string;
      transparentWhite: string;
      grey: string;
      black: string;
      glassFallback: string;
    };
    fonts: {
      names: [string, string];
      sizes: {
        heading1: {
          desktop: string;
          tablet: string;
          mobile: string;
        };
        heading2: {
          desktop: string;
          tablet: string;
          mobile: string;
        };
        heading3: {
          desktop: string;
          tablet: string;
          mobile: string;
        };
        heading4: {
          desktop: string;
          tablet: string;
          mobile: string;
        };
        heading5: {
          desktop: string;
          tablet: string;
          mobile: string;
        };
        subheading1: {
          desktop: string;
          tablet: string;
          mobile: string;
        };
        subheading2: {
          desktop: string;
          tablet: string;
          mobile: string;
        };
        nav: {
          desktop: string;
          tablet: string;
          mobile: string;
        };
        body: {
          desktop: string;
          tablet: string;
          mobile: string;
        };
      };
      spacing: {
        heading5: string;
        subheading2: string;
        nav: string;
      };
    };
    background: {
      home: {
        desktop: string;
        tablet: string;
        mobile: string;
      };
      destination: {
        desktop: string;
        tablet: string;
        mobile: string;
      };
      crew: {
        desktop: string;
        tablet: string;
        mobile: string;
      };
      technology: {
        desktop: string;
        tablet: string;
        mobile: string;
      };
    };
    effects: {
      glass: FlattenSimpleInterpolation;
    };
    assets: {
      logo: string;
    };
  }
}
