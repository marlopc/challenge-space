import Bullets from "components/Bullets/Bullets";
import { BodyText, Heading3, NavText } from "components/Text";
import useSelection from "hooks/useSelection";
import data from "public/data.json";
import React from "react";
import styled from "styled-components";
import {
  above2K,
  desktopOnly,
  mobileAndTablet,
  tabletOnly,
} from "styles/breakpoints";

const technologies = data.technology.map((tech) => ({
  ...tech,
  id: tech.name.toLowerCase(),
}));

type ImageSources = {
  landscape: string;
  portrait: string;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${desktopOnly} {
    flex-direction: row-reverse;
    margin-left: 12vw;
  }

  ${above2K} {
    margin-left: 173px;
  }
`;

const ImageSlidesWrapper = styled.figure`
  position: relative;
  width: 100%;

  & > *:not(:first-child) {
    top: 0;
    position: absolute;
  }

  ${desktopOnly} {
    width: 40%;
  }
`;

const ImageSlide = styled.div<{ sources: ImageSources }>`
  width: 100%;
  height: 41vw;
  max-height: 590px;
  margin: 15px 0 0;
  background-image: ${(props) => `url(${props.sources.landscape})`};
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0;
  z-index: 0;
  transition: opacity 300ms ease;

  &[data-selected="true"] {
    opacity: 1;
    z-index: 1;
  }

  ${desktopOnly} {
    background-image: ${(props) => `url(${props.sources.portrait})`};
  }
`;

const InfoAndBulletsWrapper = styled.div`
  ${desktopOnly} {
    display: flex;
    width: 60%;
  }
`;

const NumericBullets = styled(Bullets).attrs({ type: "numeric" })`
  margin: 30px 0 15px;
  justify-content: center;

  ${tabletOnly} {
    margin: 50px 0 40px;
  }

  ${desktopOnly} {
    flex-direction: column;
    margin: 0;
  }
`;

const InfoSlidesWrapper = styled.div`
  position: relative;

  & > *:not(:first-child) {
    top: 0;
    position: absolute;
  }
`;

const InfoWrapper = styled.div<{ isSelected: boolean }>`
  margin: 0 30px;
  opacity: ${(props) => (props.isSelected ? "1" : "0")};
  z-index: ${(props) => (props.isSelected ? "1" : "0")};
  transition: opacity 300ms ease;

  ${mobileAndTablet} {
    & > * {
      text-align: center;
      padding: 8px 0;
    }
  }

  ${desktopOnly} {
    & > * {
      margin-bottom: 15px;
    }
  }
`;

const Description = styled(BodyText)`
  max-width: 458px;
`;

const TechnologyInfo = () => {
  const { select, items } = useSelection(technologies);
  return (
    <Wrapper>
      <ImageSlidesWrapper>
        {items.map((tech) => (
          <ImageSlide
            sources={tech.images}
            data-selected={tech.isSelected}
            key={tech.id}
          />
        ))}
      </ImageSlidesWrapper>
      <InfoAndBulletsWrapper>
        <NumericBullets items={items} onSelection={select} />
        <InfoSlidesWrapper>
          {items.map((tech) => (
            <InfoWrapper key={tech.id} isSelected={tech.isSelected}>
              <NavText color="secon">The terminology...</NavText>
              <Heading3>{tech.name}</Heading3>
              <Description color="secon">{tech.description}</Description>
            </InfoWrapper>
          ))}
        </InfoSlidesWrapper>
      </InfoAndBulletsWrapper>
    </Wrapper>
  );
};

export default TechnologyInfo;
