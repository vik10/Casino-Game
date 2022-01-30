import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import GameContainer from "../componets/GameContainer";

const mockStore = configureStore();
const initialState = {
  rootReducer: {
    HomeSlice: {
      randomNumObj: {
        random1: 0,
        random2: 0,
        random3: 0,
      },
    },
  },
};
const storeFake = mockStore(initialState);
const mockFn = jest.fn();
const setOpen = function () {};

test("GameCont-test", () => {
  render(
    <Provider store={storeFake}>
      <GameContainer setOpen={setOpen} />
    </Provider>
  );
  expect(
    screen.getByRole("button", { name: "Start-Game" })
  ).toBeInTheDocument();

  userEvent.click(screen.getByRole("button", { name: "Debug" }));
  userEvent.click(screen.getByRole("button", { name: "Start-Game" }), mockFn());
  expect(mockFn).toBeCalled();
  userEvent.click(screen.getByRole("button", { name: "X" }), mockFn());
  expect(mockFn).toBeCalled();
});
