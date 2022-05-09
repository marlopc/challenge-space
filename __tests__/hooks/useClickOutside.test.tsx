import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import useClickOutside from "hooks/useClickOutside";
import React from "react";

const TestClickOutside: React.FC<{
  callback: jest.Mock;
  multiple?: boolean;
}> = ({ callback, multiple = false }) => {
  const innerRef = React.useRef<HTMLDivElement>(null);
  const inner2Ref = React.useRef<HTMLDivElement>(null);

  useClickOutside(multiple ? [innerRef, inner2Ref] : innerRef, callback);

  return (
    <div>
      Outer
      <div ref={innerRef}>Inner 1</div>
      {multiple && <div ref={inner2Ref}>Inner 2</div>}
    </div>
  );
};

describe("useClickOutside hook", () => {
  describe("with single ref", () => {
    it("the callback should be called when clicking outside", () => {
      const fn = jest.fn();

      render(<TestClickOutside callback={fn} />);

      fireEvent.click(screen.getByText(/outer/i));

      expect(fn).toHaveBeenCalledTimes(1);
    });

    it("the callback should not be called when clicking inside", () => {
      const fn = jest.fn();

      render(<TestClickOutside callback={fn} />);

      fireEvent.click(screen.getByText(/inner 1/i));

      expect(fn).not.toHaveBeenCalled();
    });
  });

  describe("with multiple refs", () => {
    it("the callback should be called when clicking outside", () => {
      const fn = jest.fn();

      render(<TestClickOutside callback={fn} multiple />);

      fireEvent.click(screen.getByText(/outer/i));

      expect(fn).toHaveBeenCalledTimes(1);
    });

    it("the callback should not be called when clicking inside", () => {
      const fn = jest.fn();

      render(<TestClickOutside callback={fn} multiple />);

      fireEvent.click(screen.getByText(/inner 1/i));
      fireEvent.click(screen.getByText(/inner 2/i));

      expect(fn).not.toHaveBeenCalled();
    });
  });
});
