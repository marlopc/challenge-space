import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    white: "#ffffff",
    primary: "#0b0d17",
    secon: "#d0d6f9",
    transparentWhite: "#ffffff88",
    grey: "#cccccc",
    black: "#000000",
  },
  fonts: {
    names: ["Bellefair", "Barlow Condensed"],
    sizes: {
      heading1: {
        desktop: "150px",
        tablet: "150px",
        mobile: "80px",
      },
      heading2: {
        desktop: "100px",
        tablet: "80px",
        mobile: "56px",
      },
      heading3: {
        desktop: "56px",
        tablet: "40px",
        mobile: "24px",
      },
      heading4: {
        desktop: "32px",
        tablet: "24px",
        mobile: "16px",
      },
      heading5: {
        desktop: "28px",
        tablet: "20px",
        mobile: "16px",
      },
      subheading1: {
        desktop: "28px",
        tablet: "28px",
        mobile: "28px",
      },
      subheading2: {
        desktop: "14px",
        tablet: "14px",
        mobile: "14px",
      },
      nav: {
        desktop: "16px",
        tablet: "14px",
        mobile: "16px",
      },
      body: {
        desktop: "18px",
        tablet: "16px",
        mobile: "15px",
      },
    },
    spacing: {
      heading5: "0.18em",
      subheading2: "2.35px",
      nav: "2.7px",
    },
  },
  background: {
    home: {
      desktop: "/assets/images/home/background-home-desktop.jpg",
      tablet: "/assets/images/home/background-home-tablet.jpg",
      mobile: "/assets/images/home/background-home-mobile.jpg",
    },
    destination: {
      desktop: "/assets/images/destination/background-destination-desktop.jpg",
      tablet: "/assets/images/destination/background-destination-tablet.jpg",
      mobile: "/assets/images/destination/background-destination-mobile.jpg",
    },
    crew: {
      desktop: "/assets/images/crew/background-crew-desktop.jpg",
      tablet: "/assets/images/crew/background-crew-tablet.jpg",
      mobile: "/assets/images/crew/background-crew-mobile.jpg",
    },
    technology: {
      desktop: "/assets/images/technology/background-technology-desktop.jpg",
      tablet: "/assets/images/technology/background-technology-tablet.jpg",
      mobile: "/assets/images/technology/background-technology-mobile.jpg",
    },
  },
  effects: {
    glass: `background: rgba(255, 255, 255, 0.04);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(81.5485px);
    -webkit-backdrop-filter: blur(81.5485px)
    `,
  },
  assets: {
    logo: "/assets/images/shared/logo.svg",
  },
};

export { theme };
