import { render, screen } from "@testing-library/react";
import App from "./App";

test("App-test", () => {
  render(<App />);
  expect(screen.getByRole("button", { name: "PLAY" })).toBeInTheDocument();
  expect(
    screen.getByRole("table", { name: "simple table" })
  ).toBeInTheDocument();
  expect(screen.getAllByRole("listitem")).toHaveLength(14);
  expect(screen.getByText(/Vikas Casino Game/)).toBeInTheDocument();
});
