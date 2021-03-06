import { Burger, Close } from "components/icons";
import NavLinks from "components/Nav/NavLinks";
import useDrawer from "hooks/useDrawer";
import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";
import {
  above2K,
  desktopOnly,
  mobileOnly,
  tabletAndDesktop,
  tabletOnly,
} from "styles/breakpoints";
import { glassEffectNotSupported } from "styles/support";

const DRAWER_ANIMATION_TIME = 150;

const drawerButtons = `
  width: 48px;
  height: 48px;
  margin: 19px 8px 19px auto;

  ${tabletAndDesktop} {
    display: none;
  }
`;

const Wrapper = styled.nav`
  position: fixed;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  height: 86px;
  padding: 0 6px 0 24px;
  z-index: 99;

  ${tabletAndDesktop} {
    height: 96px;
    padding: 0;
  }

  ${tabletOnly} {
    padding-left: 39px;
  }

  ${desktopOnly} {
    padding-left: 55px;
    top: 40px;
  }

  ${above2K} {
    left: calc(50vw - 720px);
  }
`;

const HomeLogo = styled.a`
  width: 56px;
  height: 56px;
  padding: 8px;
  background: ${(props) => `url(${props.theme.assets.logo})`} no-repeat
    content-box;
  background-size: cover;

  ${tabletAndDesktop} {
    width: 64px;
    height: 64px;
  }
`;

const DrawerOpenButton = styled.button`
  ${drawerButtons}
`;

const DrawerCloseButton = styled.button`
  ${drawerButtons}
`;

const Line = styled.div`
  display: none;

  ${desktopOnly} {
    display: block;
    height: 1px;
    flex: 0.95;
    position: relative;
    right: -45px;
    z-index: 1;
    background: ${(props) => props.theme.colors.white};
    opacity: 0.25;
  }
`;

const DrawerOrBar = styled.div<{ isOpen: boolean; isHiding: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  max-width: 250px;
  width: 70vw;
  display: flex;
  flex-direction: column;

  ${(props) => props.theme.effects.glass};

  ${mobileOnly} {
    transition: transform ${DRAWER_ANIMATION_TIME}ms ease;
    transform: translateX(${(props) => (props.isOpen ? "0" : "100%")});

    ${glassEffectNotSupported} {
      background: ${(props) => props.theme.colors.glassFallback};
    }

    ${(props) =>
      !props.isHiding &&
      !props.isOpen &&
      css`
        visibility: hidden;
      `}
  }

  ${tabletAndDesktop} {
    width: auto;
    position: relative;
    height: 100%;
    max-width: max-content;
  }
`;

const Nav: React.FC = () => {
  const drawerRef = React.useRef<HTMLDivElement>(null);
  const burguerRef = React.useRef<HTMLButtonElement>(null);
  const closeDrawerRef = React.useRef<HTMLButtonElement>(null);

  const { animatedClose, isHiding, isOpen, open } = useDrawer(
    drawerRef,
    burguerRef,
    closeDrawerRef,
    DRAWER_ANIMATION_TIME
  );

  return (
    <Wrapper>
      <Link href="/" passHref>
        <HomeLogo aria-label="Home" />
      </Link>
      <DrawerOpenButton
        onClick={open}
        ref={burguerRef}
        aria-label="Open drawer"
      >
        <Burger />
      </DrawerOpenButton>
      <Line />
      <DrawerOrBar isOpen={isOpen} isHiding={isHiding} ref={drawerRef}>
        <DrawerCloseButton
          onClick={animatedClose}
          ref={closeDrawerRef}
          aria-label="Close drawer"
        >
          <Close />
        </DrawerCloseButton>
        <NavLinks />
      </DrawerOrBar>
    </Wrapper>
  );
};

export default Nav;
