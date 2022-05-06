import Bullets from "components/Bullets/Bullets";
import { BodyText, Heading3, Heading4 } from "components/Text";
import useSelection from "hooks/useSelection";
import Image from "next/image";
import data from "public/data.json";
import React from "react";
import styled from "styled-components";
import {
  above2K,
  desktopOnly,
  mobileOnly,
  tabletAndDesktop,
  tabletOnly,
} from "styles/breakpoints";

const crew = data.crew.map((member) => ({
  ...member,
  id: member.name.toLowerCase(),
}));

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  min-height: calc(90vh - 86px);
  gap: 2vh;

  ${tabletOnly} {
    flex-direction: column-reverse;
    min-height: 736px;
    height: calc(100vh - 74px - 90px);
    padding: 0;
  }

  ${desktopOnly} {
    flex-direction: row-reverse;
    margin-top: -55px;
    padding: 0;
    align-items: flex-end;
    max-height: 885px;
    min-height: auto;
  }
`;

const ImageSlidesWrapper = styled.figure`
  position: relative;
  width: 100%;
  height: 35vh;
  min-height: 232px;

  ${mobileOnly} {
    border-bottom: 1px solid ${(props) => props.theme.colors.grey};
  }

  ${tabletOnly} {
    min-height: 435px;
    height: 56vh;
    width: 100%;
  }

  ${desktopOnly} {
    margin-right: 5%;
    width: 45%;
    height: calc(100vh - 160px);
    min-height: 537px;
    max-height: 885px;
  }
`;

const ImageSlide = styled(Image)<{ isSelected: boolean }>`
  opacity: ${(props) => (props.isSelected ? "1" : "0")};
  opacity: ${(props) => (props.isSelected ? "1" : "0")};
  transition: opacity 300ms ease;
`;

const InfoAndBulletsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;

  ${tabletAndDesktop} {
    flex-direction: column-reverse;
  }

  ${desktopOnly} {
    width: 50%;
    padding-bottom: 30px;
    gap: 50px;
  }
`;

const InfoSlidesWrapper = styled.div`
  position: relative;

  & > *:not(:first-child) {
    position: absolute;
    top: 0;
  }
`;

const InfoWrapper = styled.article<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${(props) => (props.isSelected ? "1" : "0")};
  z-index: ${(props) => (props.isSelected ? "1" : "0")};
  transition: opacity 300ms ease;
  gap: 10px;
  padding-bottom: 20px;

  & * {
    text-align: center;
  }

  ${tabletOnly} {
    max-width: 480px;
  }

  ${desktopOnly} {
    align-items: flex-start;
    padding: 0;
    padding-left: 12vw;
    margin-bottom: 30px;

    & * {
      text-align: start;
    }
  }

  ${above2K} {
    padding-left: 190px;
  }
`;

const Bio = styled(BodyText)`
  ${desktopOnly} {
    max-width: 400px;
  }
`;

const CrewInfo = () => {
  const { select, selected } = useSelection(crew);

  return (
    <Wrapper>
      <ImageSlidesWrapper>
        {crew.map((member) => (
          <ImageSlide
            key={member.id}
            src={member.images.png}
            layout="fill"
            objectFit="contain"
            objectPosition="bottom"
            isSelected={member.id === selected}
          />
        ))}
      </ImageSlidesWrapper>
      <InfoAndBulletsWrapper>
        <Bullets
          type="small"
          items={crew}
          onSelection={select}
          selected={selected}
        />
        <InfoSlidesWrapper>
          {crew.map((member) => (
            <InfoWrapper key={member.id} isSelected={member.id === selected}>
              <Heading4 color="grey">{member.role}</Heading4>
              <Heading3 as="h2">{member.name}</Heading3>
              <Bio color="secon" center>
                {member.bio}
              </Bio>
            </InfoWrapper>
          ))}
        </InfoSlidesWrapper>
      </InfoAndBulletsWrapper>
    </Wrapper>
  );
};

export default CrewInfo;
