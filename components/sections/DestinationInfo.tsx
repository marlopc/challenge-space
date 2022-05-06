import Tabs from "components/Tabs/Tabs";
import { BodyText, Heading2, Subheading1, Subheading2 } from "components/Text";
import useSelection from "hooks/useSelection";
import Image from "next/image";
import data from "public/data.json";
import React from "react";
import styled from "styled-components";
import {
  above2K,
  desktopOnly,
  tabletAndDesktop,
  tabletMin,
  tabletOnly,
} from "styles/breakpoints";

const destinations = data.destinations.map((destination) => ({
  ...destination,
  id: destination.name.toLowerCase(),
  label: destination.name,
}));

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  gap: 30px;

  ${tabletOnly} {
    padding: 0 100px;
  }

  ${desktopOnly} {
    padding: 80px 13vw;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 50px;
  }

  ${above2K} {
    padding: 80px 187px;
  }
`;

const ImageSlidesWrapper = styled.figure`
  position: relative;
  width: 170px;
  height: 170px;

  @media (min-width: ${tabletMin}) and (max-width: 1049px) {
    margin: 20px;
    width: 300px;
    height: 300px;
  }

  @media (min-width: 1050px) {
    width: 60%;
    height: 445px;
  }
`;

const ImageSlide = styled(Image)`
  opacity: 0;
  z-index: 0;
  transition: opacity 300ms ease;

  &[data-selected="true"] {
    opacity: 1;
    z-index: 1;
  }
`;

const TabsAndInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 30px;

  ${desktopOnly} {
    min-width: min-content;
    width: 40%;
    align-items: flex-start;
  }
`;

const InfoSlidesWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  & > *:not(:first-child) {
    position: absolute;
    top: 0;
  }
`;

const InfoWrapper = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${(props) => (props.isSelected ? "1" : "0")};
  z-index: ${(props) => (props.isSelected ? "1" : "0")};
  transition: opacity 300ms ease;
  gap: 20px;

  ${desktopOnly} {
    align-items: flex-start;
  }
`;

const Description = styled(BodyText)`
  text-align: center;

  ${desktopOnly} {
    text-align: start;
  }
`;

const StatsWrapper = styled.div`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.colors.transparentWhite};

  ${tabletOnly} {
    justify-content: center;
  }

  ${tabletAndDesktop} {
    display: flex;
    margin-top: 10px;
  }
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;

  ${desktopOnly} {
    align-items: flex-start;
    gap: 5px;
    margin-left: 0;
  }
`;

const DestinationInfo = () => {
  const { items, select } = useSelection(destinations);

  return (
    <Wrapper>
      <ImageSlidesWrapper>
        {items.map((destination, index) => (
          <ImageSlide
            data-selected={destination.isSelected}
            key={destination.id}
            src={destination.images.png}
            layout="fill"
            objectFit="contain"
            alt={destination.name}
            priority={index === 0}
          />
        ))}
      </ImageSlidesWrapper>
      <TabsAndInfoWrapper>
        <Tabs onSelection={select} tabs={items} />
        <InfoSlidesWrapper>
          {items.map((destination) => (
            <InfoWrapper
              key={destination.id}
              isSelected={destination.isSelected}
            >
              <Heading2>{destination.name}</Heading2>
              <Description color="secon">{destination.description}</Description>
              <StatsWrapper>
                <Stat>
                  <Subheading2 color="secon">Avg. distance</Subheading2>
                  <Subheading1>{destination.distance}</Subheading1>
                </Stat>
                <Stat>
                  <Subheading2 color="secon">Est. travel time</Subheading2>
                  <Subheading1>{destination.travel}</Subheading1>
                </Stat>
              </StatsWrapper>
            </InfoWrapper>
          ))}
        </InfoSlidesWrapper>
      </TabsAndInfoWrapper>
    </Wrapper>
  );
};

export default DestinationInfo;
