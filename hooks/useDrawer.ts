import React from "react";
import useClickOutside from "./useClickOutside";

const useDrawer = (
  drawerRef: React.RefObject<HTMLElement>,
  initiatorRef: React.RefObject<HTMLElement>,
  closeDrawerRef: React.RefObject<HTMLElement>,
  animationTime: number
) => {
  const [isHiding, setIsHiding] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const open = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = React.useCallback(() => {
    initiatorRef.current?.focus();
    setIsOpen(false);
  }, [initiatorRef]);

  const animatedClose = React.useCallback(() => {
    close();
    setIsHiding(true);
    setTimeout(() => {
      setIsHiding(false);
    }, animationTime);
  }, [animationTime, close]);

  useClickOutside([drawerRef, initiatorRef], close);

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        close();
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [close]);

  React.useEffect(() => {
    isOpen && closeDrawerRef.current?.focus();
  }, [isOpen, closeDrawerRef]);

  return {
    animatedClose,
    isHiding,
    close,
    isOpen,
    open,
  };
};

export default useDrawer;
