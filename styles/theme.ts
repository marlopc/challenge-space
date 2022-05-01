import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    white: "#ffffff",
    primary: "#0b0d17",
    secon: "#d0d6f9",
    grey: "#979797",
  },
  fonts: {
    names: ["Bellefair", "Barlow Condensed"],
    sizes: {
      heading1: "150px",
      heading2: "100px",
      heading3: "56px",
      heading4: "32px",
      heading5: "28px",
      subheading1: "28px",
      subheading2: "14px",
      nav: "16px",
    },
    spacing: {
      heading5: "4.75rem",
      subheading2: "2.35rem",
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
