import { BodyText, Heading1, Heading4, Heading5 } from "components/Text";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { desktopOnly, tabletMax, tabletOnly } from "styles/breakpoints";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 524px;
  height: calc(100vh - 86px);
  justify-content: space-between;
  padding: 5vh 35px 20px;

  ${tabletOnly} {
    min-height: 817px;
    padding: 10vh 150px 80px;
  }

  ${desktopOnly} {
    width: 90%;
    max-height: calc(100vh - 180px);
    min-height: 465px;
    gap: 35px;
    flex-direction: row;
    align-items: flex-end;
    padding: 0 100px 10vh;
    margin: 0 auto;
  }

  @media (min-width: ${tabletMax}) and (max-width: 1152px) {
    padding: 0 30px 10vh;
  }

  @media (max-height: 640px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  flex: 1;

  ${desktopOnly} {
    align-items: flex-start;
    flex: none;
  }
`;

const Paragraph = styled(BodyText)`
  max-width: 402px;

  ${desktopOnly} {
    text-align: start;
  }
`;

const ExploreWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0.5;

  ${desktopOnly} {
    flex: none;
    justify-content: flex-end;
  }
`;

const Explore = styled.a`
  width: 150px;
  height: 150px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    background: ${(props) => props.theme.colors.grey};
  }

  ${tabletOnly} {
    width: 242px;
    height: 242px;
  }

  ${desktopOnly} {
    width: 274px;
    height: 274px;
    position: relative;
    transition: box-shadow 200ms ease-in-out;

    &:not(:active):hover {
      box-shadow: 0 0 1px 80px #ffffff20;
    }
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <Heading5 color="secon">So, you want to travel to</Heading5>
        <Heading1>Space</Heading1>
        <Paragraph color="secon" center>
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </Paragraph>
      </TextWrapper>
      <ExploreWrapper>
        <Link href="/destination" passHref>
          <Explore>
            <Heading4 color="black">Explore</Heading4>
          </Explore>
        </Link>
      </ExploreWrapper>
    </Wrapper>
  );
};

export default Hero;
