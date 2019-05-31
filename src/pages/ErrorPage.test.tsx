import React from "react";
import { render, cleanup } from "@testing-library/react";
import ErrorPage from "./ErrorPage";

afterEach(cleanup);

test("displays ErrorPage", () => {
  const { getByText, container } = render(<ErrorPage />);

  getByText("Oops! Something went wrong.");
  getByText("Please contact Thew.");
});
