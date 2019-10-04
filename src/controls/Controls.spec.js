// Test away!
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Controls from "../controls/Controls";

test("the gate is unlocked and open", () => {
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

  fireEvent.click(closeButton);
  expect(closeLookout).toBeCalled();
});

test(" is the gate is closed and unlocked ? ", () => {
  const gateOpen = jest.fn();
  const gateLocked = jest.fn();
  const { queryByText } = render(
    <Controls
      locked={false}
      close={true}
      toggleClosed={gateOpen}
      toggleLooked={gateLocked}
    />
  );
  const lockedButton = queryByText("Lock Gate");
  expect(lockedButton);
  expect(lockedButton.disabled).toBe(false);

  const buttonOpen = queryByText("Open Gate");
  expect(buttonOpen);
  expect(buttonOpen).toBe(false);

  fireEvent.click(buttonOpen);
  expect(gateOpen).toBeCalled();

  fireEvent.click(lockedButton);
  expect(gateLocked).toBeCalled();
});

test(" is the gate is closed and locked ?", () => {
  const unlock = jest.fn();
  const { queryByText } = render(
    <Controls locked={true} closed={true} toggleLocked={unlock} />
  );
  const unlockButton = queryByText("Unlock Gate");
  expect(unlockButton);
  expect(unlockButton.disabled).toBe(false);

  const openButton = queryByText("Open Gate");
  expect(openButton);
  expect(openButton.disabled).toBe(true);

  fireEvent.click(unlockButton);
  expect(unlock).toBeCalled();
});
