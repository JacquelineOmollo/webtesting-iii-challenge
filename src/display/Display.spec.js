// Test away!
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Display from "../display/Display";

test("gate defaults to unlock", () => {
  const { getByText } = render(<Display locked={false} />);
  expect(getByText(/Unlocked/i));
});

test("gat defaults to open", () => {
  const { getByText } = render(<Display unlocked={false} />);
  expect(getByText(/Open/i));
});
