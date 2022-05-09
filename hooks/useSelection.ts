import React from "react";

export type SelectionItems = { isSelected: boolean };
export type ItemsWithSelectIndex<T> = T & SelectionItems;

export interface SelectionInterface<T> {
  items: (T & SelectionItems)[];
  select: (index: number) => void;
}

const getInitialSelection = <T>(items: T[]): ItemsWithSelectIndex<T>[] => {
  return items.map((item, index) => ({ ...item, isSelected: index === 0 }));
};

const useSelection = <T>(items: T[]): SelectionInterface<T> => {
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
