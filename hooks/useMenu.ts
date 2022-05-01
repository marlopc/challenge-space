import React from "react";

const useMenu = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = React.useState(initialState);

  const open = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = React.useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    close,
    isOpen,
    open,
    toggle,
  };
};

export default useMenu;
