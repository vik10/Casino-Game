import { Button, ButtonGroup, Dialog } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleClickSpin, handleDebugValue } from "../reducer/HomeSlice";

const GameContainer = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rootReducer.HomeSlice);

  const cardImgUrl = [
    "https://svgsilh.com/svg/48943.svg",
    "https://svgsilh.com/svg/48942-c21b0f.svg",
    "https://svgsilh.com/svg/37888-c21b0f.svg",
    "https://svgsilh.com/svg/48940.svg",
  ];

  return (
    <>
      <Box
        open={props.open}
        component="div"
        className="position-fixed w-100 h-100 top-0 start-0 d-flex justify-content-center align-items-center"
        sx={{ backgroundColor: `rgba(0,0,0,.8)`, zIndex: 10 }}
      >
        <div className="p-5 rounded bg-light">
          <Button
            onClick={() => props.setOpen(false)}
            color="error"
            variant="contained"
            sx={{
              position: "fixed",
              top: "20px",
              right: "20px",
            }}
          >
            X
          </Button>
          <ButtonGroup
            variant="outlined"
            aria-label="outlined button group"
            sx={{ marginBottom: "3em" }}
          >
            <Button
              color="warning"
              onClick={() => {
                state.balance >= 2
                  ? dispatch(handleClickSpin())
                  : alert("you cant not play minimum balance require $2");
              }}
            >
              Start-Game
            </Button>
            <Button onClick={() => dispatch(handleDebugValue())}>Debug</Button>
          </ButtonGroup>
          <div className="d-flex gap-1 justify-content-center">
            <div
              className="border border-2 border-info rounded py-1"
              style={{
                width: 70,
                height: 50,
              }}
            >
              <img
                src={cardImgUrl[state.randomNumObj.random1]}
                alt=""
                className="w-100 h-100"
              />
            </div>
            <div
              className="border border-2 border-info rounded py-1"
              style={{
                width: 70,
                height: 50,
              }}
            >
              <img
                src={cardImgUrl[state.randomNumObj.random2]}
                alt=""
                className="w-100 h-100"
              />
            </div>
            <div
              className="border border-2 border-info rounded py-1"
              style={{
                width: 70,
                height: 50,
              }}
            >
              <img
                src={cardImgUrl[state.randomNumObj.random3]}
                alt=""
                className="w-100 h-100"
              />
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default GameContainer;
