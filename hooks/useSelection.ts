import React from "react";

type SelectionId = string | number;

const useSelection = <T extends { id: SelectionId }>(items: T[]) => {
  const [selected, setSelected] = React.useState(items[0].id);

  function select(id: SelectionId): void;
  function select(itemOrId: { id: SelectionId } | SelectionId): void {
    const selection = typeof itemOrId === "object" ? itemOrId.id : itemOrId;

    setSelected(selection);
  }

  return {
    selected,
    select,
  };
};

export default useSelection;
