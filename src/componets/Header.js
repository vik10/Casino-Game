import {
  Avatar,
  Box,
  Button,
  Dialog,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { winningCalcu } from "../utils";
import { handleLoginUser, isUserLogedIn } from "../reducer/HomeSlice";

const Header = () => {
  const [open, setOpen] = useState(false);
  // const [validUser, setValidUser] = useState(false);
  const [registerUser, setRegisterUser] = useState(true);
  const [wrongCred, setWrongCred] = useState(false);
  const [balance, setBalance] = useState(4);
  const [values, setValues] = useState({
    name: "",
    age: "",
    userName: "",
    password: "",
    showPassword: false,
  });

  const state = useSelector((state) => state.rootReducer.HomeSlice);
  const dispatch = useDispatch();

  // const userObj = JSON.parse(localStorage.getItem("userData"));

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleUserDataSignUp = () => {
    let userData = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : [];
    userData.push(values);
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  const handleUserLogin = () => {
    JSON.parse(localStorage.getItem("userData")).forEach((item) => {
      if (
        item.userName === values.userName &&
        item.password === values.password
      ) {
        setOpen(false);
        dispatch(isUserLogedIn(true));
        dispatch(handleLoginUser(item.userName));
      } else setWrongCred(true);
    });
  };

  const handleUserLogout = () => {
    let userData = JSON.parse(localStorage.getItem("userData"));
    userData.forEach((item) => {
      if (item.userName === state.loginUserName) {
        return (item.balance = state.balance);
      }
    });
    localStorage.setItem("userData", JSON.stringify(userData));
  };
  // console.log(state.randomNumObj, state.balance);
  return (
    <>
      <Grid container className="p-2 bg-primary" spacing={2}>
        <Grid item xs={3}>
          <img
            src="https://www.paktolus.com/wp-content/uploads/2021/07/main-logo.svg"
            alt=""
            className="bg-light p-2"
          />
        </Grid>
        <Grid item xs></Grid>
        <Grid item xs="auto">
          <div className="d-flex align-items-center gap-2">
            <Box component={"h3"} className="text-light">
              $<span>{state.balance}</span>
            </Box>
            {state.validUser ? (
              <>
                <Avatar
                  alt="Cindy Baker"
                  src="https://cdn.vox-cdn.com/thumbor/pTa_yD0mbfDWi7AeAOA7Ym7R4qE=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23102001/DF_12080_rv2_1000x563_thumbnail.jpg"
                />
                <Button
                  variant="text"
                  className="text-light fw-bold"
                  onClick={() => {
                    dispatch(isUserLogedIn(false));
                    handleUserLogout();
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                variant="text"
                onClick={handleClickOpen}
                className="text-light fw-bold"
              >
                LOGIN
              </Button>
            )}
          </div>
          <Dialog open={open}>
            <Button
              onClick={handleClose}
              color="error"
              variant="contained"
              sx={{ position: "fixed", top: "20px", right: "20px" }}
            >
              X
            </Button>
            <Paper elevation={3} className="p-3">
              <Box component="p" className="text-capitalize">
                If You are new user{" "}
                <Button onClick={() => setRegisterUser(true)}>SingUp</Button>
                here or
                <Button onClick={() => setRegisterUser(false)}>Login</Button>
              </Box>
              {registerUser && (
                <>
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-name">
                      Name
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-name"
                      type={"text"}
                      value={values.name}
                      onChange={handleChange("name")}
                      label="name"
                    />
                  </FormControl>
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-age">
                      Age
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-age"
                      type={"number"}
                      value={values.age}
                      onChange={handleChange("age")}
                      label="age"
                    />
                  </FormControl>
                </>
              )}
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-userName">
                  User-Name
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-userName"
                  type={"text"}
                  value={values.userName}
                  onChange={handleChange("userName")}
                  label="userName"
                />
              </FormControl>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              {wrongCred && (
                <Box component="p" color={"red"}>
                  Invalid credentials try again
                </Box>
              )}
              <div className="d-flex mt-3 gap-3 justify-content-center">
                {registerUser ? (
                  <Button variant="contained" onClick={handleUserDataSignUp}>
                    sign up
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={handleUserLogin}
                  >
                    Login
                  </Button>
                )}
              </div>
            </Paper>
          </Dialog>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
