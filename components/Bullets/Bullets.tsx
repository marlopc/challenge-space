import React from "react";
import styled from "styled-components";

type BulletId = string | number;

type Bullet = {
  id: BulletId;
};

type BulletsProps = {
  type: "small" | "numeric";
  items: Bullet[];
  selected: BulletId;
  onSelection: (id: BulletId) => void;
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

const SmallButton = styled.span<{ isSelected: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) =>
    props.theme.colors[props.isSelected ? "white" : "transparentWhite"]};
`;

const Bullets: React.FC<BulletsProps> = ({
  type,
  items,
  selected,
  onSelection,
}) => {
  switch (type) {
    case "small":
      return (
        <SmallBulletsWrapper>
          {items.map((bullet) => (
            <li key={bullet.id} onClick={() => onSelection(bullet.id)}>
              <SmallBulletButton>
                <SmallButton isSelected={bullet.id === selected} />
              </SmallBulletButton>
            </li>
          ))}
        </SmallBulletsWrapper>
      );
    case "numeric":
      return null;
  }
};

export default Bullets;
