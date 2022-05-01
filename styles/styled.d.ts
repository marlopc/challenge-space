import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      primary: string;
      secon: string;
      grey: string;
    };
    fonts: {
      names: [string, string];
      sizes: {
        heading1: string;
        heading2: string;
        heading3: string;
        heading4: string;
        heading5: string;
        subheading1: string;
        subheading2: string;
        nav: string;
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
      glass: string;
    };
    assets: {
      logo: string;
    };
  }
}
