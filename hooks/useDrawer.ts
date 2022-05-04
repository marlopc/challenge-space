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

  React.useEffect(() => {
    isOpen && closeDrawerRef.current?.focus();
  }, [isOpen, closeDrawerRef]);

  const open = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = React.useCallback(() => {
    initiatorRef.current?.focus();
    setIsOpen(false);
  }, [initiatorRef]);

  useClickOutside([drawerRef, initiatorRef], close);

  const animatedClose = () => {
    close();
    setIsHiding(true);
    setTimeout(() => {
      setIsHiding(false);
    }, animationTime);
  };

  return {
    animatedClose,
    isHiding,
    close,
    isOpen,
    open,
  };
};

export default useDrawer;
