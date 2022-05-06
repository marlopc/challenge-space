import { Heading4 } from "components/Text";
import React from "react";
import styled from "styled-components";
import { desktopOnly, tabletOnly } from "styles/breakpoints";

type BulletId = string | number;

type Bullet = {
  id: BulletId;
  isSelected: boolean;
};

type BulletsTypes = "small" | "numeric";

type BulletsProps = {
  items: Bullet[];
  onSelection: (index: number) => void;
  className?: string;
};

const SmallBulletsWrapper = styled.ul`
  display: flex;
  justify-content: center;
  padding: 5px 0;
`;

const SmallBulletButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
`;

const Circle = styled.span<{ isSelected: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) =>
    props.theme.colors[props.isSelected ? "white" : "transparentWhite"]};
`;

const SmallBullets: React.FC<BulletsProps> = ({
  items,
  onSelection,
  className,
}) => {
  return (
    <SmallBulletsWrapper className={className}>
      {items.map((bullet, index) => (
        <li key={bullet.id} onClick={() => onSelection(index)}>
          <SmallBulletButton>
            <Circle isSelected={bullet.isSelected} />
          </SmallBulletButton>
        </li>
      ))}
    </SmallBulletsWrapper>
  );
};

const NumericBulletsWrapper = styled.ul`
  display: flex;
  gap: 15px;
`;

const NumericBulletButton = styled.button<{ isSelected: boolean }>`
  border: 1px solid ${(props) => props.theme.colors.white};
  height: 48px;
  width: 48px;
  border-radius: 50%;

  color: ${(props) =>
    props.theme.colors[props.isSelected ? "primary" : "white"]};
  background: ${(props) =>
    props.isSelected ? props.theme.colors.white : "transparent"};

  ${tabletOnly} {
    width: 60px;
    height: 60px;
  }

  ${desktopOnly} {
    width: 80px;
    height: 80px;
  }
`;

const NumericBullets: React.FC<BulletsProps> = ({
  items,
  onSelection,
  className,
}) => {
  return (
    <NumericBulletsWrapper className={className}>
      {items.map((bullet, index) => (
        <li key={bullet.id} onClick={() => onSelection(index)}>
          <NumericBulletButton isSelected={bullet.isSelected}>
            <Heading4>{index + 1}</Heading4>
          </NumericBulletButton>
        </li>
      ))}
    </NumericBulletsWrapper>
  );
};

const Bullets: React.FC<BulletsProps & { type: BulletsTypes }> = ({
  type,
  ...bulletsProps
}) => {
  switch (type) {
    case "small":
      return <SmallBullets {...bulletsProps} />;
    case "numeric":
      return <NumericBullets {...bulletsProps} />;
  }
};

export default Bullets;
