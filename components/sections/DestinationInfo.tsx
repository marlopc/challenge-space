import Tabs from "components/Tabs/Tabs";
import { BodyText, Heading2, Subheading1, Subheading2 } from "components/Text";
import useSelection from "hooks/useSelection";
import Image from "next/image";
import data from "public/data.json";
import React from "react";
import styled from "styled-components";
import {
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
    padding: 80px 0;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
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
    width: 445px;
    height: 445px;
  }
`;

const ImageSlide = styled(Image)<{ isSelected: boolean }>`
  opacity: ${(props) => (props.isSelected ? "1" : "0")};
  z-index: ${(props) => (props.isSelected ? "1" : "0")};
  transition: opacity 300ms ease;
`;

const TabsAndInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 30px;

  ${desktopOnly} {
    width: 445px;
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
`;

const StatsWrapper = styled.div`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.colors.transparentWhite};

  ${tabletAndDesktop} {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;

  ${desktopOnly} {
    gap: 5px;
  }
`;

const DestinationInfo = () => {
  const { select, selected } = useSelection(destinations);

  return (
    <Wrapper>
      <ImageSlidesWrapper>
        {destinations.map((destination) => (
          <ImageSlide
            isSelected={destination.id === selected}
            key={destination.id}
            src={destination.images.png}
            layout="fill"
            alt={destination.name}
          />
        ))}
      </ImageSlidesWrapper>
      <TabsAndInfoWrapper>
        <Tabs onSelection={select} selected={selected} tabs={destinations} />
        <InfoSlidesWrapper>
          {destinations.map((destination) => (
            <InfoWrapper
              key={destination.id}
              isSelected={destination.id === selected}
            >
              <Heading2>{destination.name}</Heading2>
              <BodyText color="secon" center>
                {destination.description}
              </BodyText>
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