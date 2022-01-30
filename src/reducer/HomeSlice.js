import { createSlice } from "@reduxjs/toolkit";
import { getTime, randomNum, winningCalcu } from "../utils";

const HomeSlice = createSlice({
  name: "HomeSlice",
  initialState: {
    slotArr: [],
    randomNumObj: {
      random1: 0,
      random2: 0,
      random3: 0,
    },
    TimeArr: [],
    balance: 5,
    loginUserNameArr: [],
    loginUserName: "",
    validUser: false,
  },
  reducers: {
    handleDebugValue: (state, action) => {
      state.randomNumObj.random1 = 0;
      state.randomNumObj.random2 = 0;
      state.randomNumObj.random3 = 0;
      state.balance = winningCalcu(
        state.randomNumObj.random1,
        state.randomNumObj.random2,
        state.randomNumObj.random3,
        state.balance
      );
    },
    handleClickSpin: (state, action) => {
      state.randomNumObj.random1 = randomNum();
      state.randomNumObj.random2 = randomNum();
      state.randomNumObj.random3 = randomNum();
      state.slotArr.push(state.randomNumObj);
      state.TimeArr.push(getTime());
      state.balance = winningCalcu(
        state.randomNumObj.random1,
        state.randomNumObj.random2,
        state.randomNumObj.random3,
        state.balance
      );
      state.loginUserNameArr.push(
        state.validUser ? state.loginUserName : "Guest"
      );
    },
    handleLoginUser: (state, action) => {
      state.loginUserName = action.payload;
      JSON.parse(localStorage.getItem("userData")).forEach((item) => {
        if (item.userName === action.payload) {
          state.balance = item.balance;
        }
      });
    },
    isUserLogedIn: (state, action) => {
      state.validUser = action.payload;
      if (action.payload === false) {
        state.balance = 5;
      }
    },
    handleSortDecending: (state, action) => {
      state[action.payload].sort((a, b) => b.localeCompare(a));
    },
    handleSortAccending: (state, action) => {
      state[action.payload].sort((a, b) => a.localeCompare(b));
    },
  },
});

export const {
  handleDebugValue,
  handleClickSpin,
  handleLoginUser,
  isUserLogedIn,
  handleSortDecending,
  handleSortAccending,
} = HomeSlice.actions;

export default HomeSlice.reducer;
