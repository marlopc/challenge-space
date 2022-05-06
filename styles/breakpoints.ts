const mobileMax = "649px";
const tabletMin = "650px";
const tabletMax = "1024px";
const desktopMin = "1025px";

const above2K = `@media (min-width: 1440px)`;
const desktopOnly = `@media (min-width: ${desktopMin})`;
const tabletOnly = `@media (min-width: ${tabletMin}) and (max-width: ${tabletMax})`;
const mobileOnly = `@media (max-width: ${mobileMax})`;
const mobileAndTablet = `@media (max-width: ${tabletMax})`;
const tabletAndDesktop = `@media (min-width: ${tabletMin})`;
const mobileAndDesktop = `@media (max-width: ${mobileMax}), (min-width: ${desktopMin})`;

export {
  mobileMax,
  tabletMin,
  tabletMax,
  desktopMin,
  above2K,
  desktopOnly,
  tabletOnly,
  mobileOnly,
  tabletAndDesktop,
  mobileAndDesktop,
  mobileAndTablet,
};
