// Test away!
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Controls from "../controls/Controls";

test("can it unlocked and open", () => {
  const closeLookout = jest.fn();
  const { queryByText } = render(
    <Controls locked={false} toggleClosed={closeLookout} />
  );
  const buttonLock = queryByText("Lock Gate");
  expect(buttonLock);
  expect(buttonLock.disabled).toBe(true);
  const closeButton = queryByText("Close Gate");
  expect(closeButton);
  expect(closeButton.disabled).toBe(false);
});
