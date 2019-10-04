//Test away
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Dashboard from "../dashboard/Dashboard";

//shows the controls and display

//default state
test("state unlocked and open", () => {
  const { getByText } = render(<Dashboard />);
  expect(getByText("Close Gate"));
  expect(getByText("Lock Gate"));
  expect(getByText("Open"));
  expect(getByText("Unlocked"));
});

// Testing all the unlock, open, locked and close
// test("does all the unlock states work?", () => {
// //render
// const {getByText, queryByText} = render(Dashboard/>)
// //

// })
