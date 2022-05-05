import { Heading5 } from "components/Text";
import React from "react";
import styled from "styled-components";
import {
  above2K,
  desktopOnly,
  tabletAndDesktop,
  tabletOnly,
} from "styles/breakpoints";

type TopStepMessageProps = {
  message: string;
  prefix: string;
};

const MessageWithPrefix = styled(Heading5)<{ prefix: string }>`
  width: 100%;
  text-align: center;
  padding: 20px 0;

  ${tabletAndDesktop} {
    text-align: start;
  }

  ${tabletOnly} {
    padding-top: 30px;
    padding-left: 39px;
  }

  ${desktopOnly} {
    padding-top: 2vh;
    padding-left: 13vw;
    padding-bottom: 0;
  }

  ${above2K} {
    padding-left: 190px;
  }

  &:before {
    content: "${(props) => props.prefix}";
    color: ${(props) => props.theme.colors.transparentWhite};
    margin-right: 15px;
  }
`;

const TopStepMessage: React.FC<TopStepMessageProps> = ({ message, prefix }) => {
  return <MessageWithPrefix prefix={prefix}>{message}</MessageWithPrefix>;
};

export default TopStepMessage;
