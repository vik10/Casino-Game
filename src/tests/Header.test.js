import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Header from "../componets/Header";

const mockStore = configureStore();
const initialState = {
  rootReducer: {
    HomeSlice: {},
  },
};
const storeFake = mockStore(initialState);

test("Header-test", () => {
  render(
    <Provider store={storeFake}>
      <Header />
    </Provider>
  );

  expect(screen.getByRole("button", { name: "LOGIN" })).toBeInTheDocument();
  userEvent.click(screen.getByRole("button", { name: "LOGIN" }));
  expect(screen.getByRole("button", { name: "sign up" })).toBeInTheDocument();
  userEvent.click(screen.getByRole("button", { name: "Login" }));
  expect(screen.queryByRole("textbox", { name: "Name" })).toBeNull();
});
