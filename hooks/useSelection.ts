import React from "react";

export type SelectionItems = { isSelected: boolean };

const getInitialSelection = <T>(items: T[]): (T & SelectionItems)[] => {
  return items.map((item, index) => ({ ...item, isSelected: index === 0 }));
};

const useSelection = <T>(items: T[]) => {
  const [selection, setSelection] = React.useState(getInitialSelection(items));
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const select = (index: number) => {
    if (index === currentIndex) return;

    const newSelection = [...selection];

    newSelection[currentIndex].isSelected = false;
    newSelection[index].isSelected = true;

    setSelection(newSelection);
    setCurrentIndex(index);
  };

  return {
    items: selection,
    select,
  };
};

export default useSelection;
