import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import useDrawer from "hooks/useDrawer";
import React from "react";

const ANIMATION_TIME = 10;

const TestDrawer = () => {
  const openRef = React.useRef<HTMLButtonElement>(null);
  const closeRef = React.useRef<HTMLButtonElement>(null);
  const drawerRef = React.useRef<HTMLDivElement>(null);

  const drawer = useDrawer(drawerRef, openRef, closeRef, ANIMATION_TIME);

  return (
    <div data-testid="container">
      <p data-testid="openState">{`${drawer.isOpen}`}</p>
      <p data-testid="hidingState">{`${drawer.isHiding}`}</p>
      <button ref={openRef} onClick={drawer.open}>
        Open
      </button>
      <div ref={drawerRef} data-testid="drawer">
        <button ref={closeRef} onClick={drawer.animatedClose}>
          Close
        </button>
      </div>
    </div>
  );
};

describe("useDrawer hook", () => {
  it("should start closed", () => {
    render(<TestDrawer />);

    expect(screen.getByTestId("openState")).toHaveTextContent("false");
  });

  it("should open when the open button is clicked", () => {
    render(<TestDrawer />);

    fireEvent.click(screen.getByText(/open/i));

    expect(screen.getByTestId("openState")).toHaveTextContent("true");
  });

  it("should close when the close button is clicked", () => {
    render(<TestDrawer />);

    fireEvent.click(screen.getByText(/open/i));

    fireEvent.click(screen.getByText(/close/i));

    expect(screen.getByTestId("openState")).toHaveTextContent("false");
  });

  it("should close when anything outside the drawer is clicked", () => {
    render(<TestDrawer />);

    fireEvent.click(screen.getByText(/open/i));

    fireEvent.click(screen.getByTestId("container"));

    expect(screen.getByTestId("openState")).toHaveTextContent("false");
  });
});
