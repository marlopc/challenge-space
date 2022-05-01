import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import {
  desktopOnly,
  mobileAndDesktop,
  screen2KOnly,
  tabletAndDesktop,
  tabletOnly,
} from "styles/queries";

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;

  ${tabletAndDesktop} {
    flex-direction: row;
    gap: 48px;
    height: 100%;
  }

  ${tabletOnly} {
    padding: 0 48px;
  }

  ${desktopOnly} {
    padding: 0 15vw 0 8vw;
  }

  ${screen2KOnly} {
    padding: 0 195px 0 120px;
  }
`;

const A = styled.a<{ prefix: string; isActive: boolean }>`
  display: flex;
  letter-spacing: ${(props) => props.theme.fonts.spacing.nav};
  font-size: ${(props) => props.theme.fonts.sizes.nav};
  font-weight: 400;
  width: 100%;
  padding: 5px 0 5px 15px;
  min-height: 48px;
  align-items: center;
  border-right: 3px solid
    ${(props) => (props.isActive ? props.theme.colors.white : "transparent")};
  transition: border-color 100ms ease;

  ${mobileAndDesktop} {
    &::before {
      margin-right: 8px;
      font-weight: 700;
      min-width: 20px;
      content: "${(props) => props.prefix}";
    }
  }

  ${tabletAndDesktop} {
    padding: 0;
    border: 0;
    height: 100%;
    border-bottom: 3px solid
      ${(props) => (props.isActive ? props.theme.colors.white : "transparent")};
  }
`;

const NavItem: React.FC<LinkProps & { label: string; prefix: string }> = ({
  label,
  prefix,
  ...linkProps
}) => {
  const { asPath } = useRouter();

  const isActive = asPath === linkProps.href;

  return (
    <li>
      <Link {...linkProps}>
        <A prefix={prefix} isActive={isActive}>
          {label}
        </A>
      </Link>
    </li>
  );
};

const NavLinks = () => {
  return (
    <Wrapper>
      <NavItem href="/" label="Home" prefix="00" />
      <NavItem href="/destination" label="Destination" prefix="01" />
      <NavItem href="/crew" label="Crew" prefix="02" />
      <NavItem href="/technology" label="Technology" prefix="03" />
    </Wrapper>
  );
};

export default NavLinks;
