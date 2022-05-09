import { act, render } from "@testing-library/react";
import useSelection, { SelectionInterface } from "hooks/useSelection";

const data = [{ address: 1 }, { address: 2 }, { address: 3 }];

function setup<T>(items: T[]): SelectionInterface<T> {
  const selection = {};

  const TestComponent: React.FC = () => {
    Object.assign(selection, useSelection(items));

    return null;
  };

  render(<TestComponent />);

  return selection as SelectionInterface<T>;
}

describe("useSelection hook", () => {
  const { items, select } = setup(data);

  it("should add a isSelected property to each item", () => {
    items.forEach((item, index) => {
      expect(item).toHaveProperty("isSelected", index === 0);
    });
  });

  it("should keep the rest of item properties", () => {
    items.forEach((item, index) => {
      Object.entries(item).forEach(([key, value]) => {
        if (key === "isSelected") return;

        expect(data[index]).toHaveProperty(key, value);
      });
    });
  });

  it("should be able to select another item", () => {
    act(() => select(2));

    expect(items[2].isSelected).toBe(true);
  });

  it("multiple items should not be selected at one time", () => {
    expect(items[0].isSelected).toBe(false);
    expect(items[1].isSelected).toBe(false);
  });
});
