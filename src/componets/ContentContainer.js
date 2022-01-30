import {
  Button,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GameContainer from "./GameContainer";
import { handleSortAccending, handleSortDecending } from "../reducer/HomeSlice";
import { handlePagination } from "../utils";

const ContentContainer = () => {
  const cardImgUrl = [
    "https://svgsilh.com/svg/48943.svg",
    "https://svgsilh.com/svg/48942-c21b0f.svg",
    "https://svgsilh.com/svg/37888-c21b0f.svg",
    "https://svgsilh.com/svg/48940.svg",
  ];
  const [open, setOpen] = useState(false);
  const [sortActiveUserId, setSortActiveUserId] = useState(false);
  const [sortActiveTime, setSortActiveTime] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rootReducer.HomeSlice);

  const rows = handlePagination(state.slotArr, page - 1);

  const handleClickOpen = () => {
    setOpen(true);
  };
  // console.log(state.slotArr.length, page);
  return (
    <>
      <div className="d-flex flex-column py-3 contentContainer ">
        <Button
          variant="contained"
          color="success"
          size="large"
          className="align-self-center"
          sx={{ justifySelf: "center" }}
          onClick={handleClickOpen}
        >
          PLAY
        </Button>
        {open && <GameContainer open={open} setOpen={setOpen} />}
        <div
          className="d-flex  justify-content-center mt-3"
          style={{ minHeight: 300 }}
        >
          <TableContainer
            component={Paper}
            sx={{
              maxWidth: 650,
              backgroundColor: "rgba(51,153,255,.8)",
            }}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <Button
                      size="small"
                      onClick={() => {
                        setSortActiveUserId(!sortActiveUserId);
                        sortActiveUserId
                          ? dispatch(handleSortDecending("loginUserNameArr"))
                          : dispatch(handleSortAccending("loginUserNameArr"));
                      }}
                    >
                      User Id
                      {sortActiveUserId ? (
                        <ArrowDropUpIcon />
                      ) : (
                        <ArrowDropDownIcon />
                      )}
                    </Button>
                  </TableCell>
                  <TableCell align="center" className="fw-bold">
                    Slot-1
                  </TableCell>
                  <TableCell align="center" className="fw-bold">
                    Slot-2
                  </TableCell>
                  <TableCell align="center" className="fw-bold">
                    Slot-3
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      size="small"
                      onClick={() => {
                        setSortActiveTime(!sortActiveTime);
                        sortActiveTime
                          ? dispatch(handleSortDecending("TimeArr"))
                          : dispatch(handleSortAccending("TimeArr"));
                      }}
                    >
                      Time
                      {sortActiveTime ? (
                        <ArrowDropUpIcon />
                      ) : (
                        <ArrowDropDownIcon />
                      )}
                    </Button>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">
                      {state.loginUserNameArr[i]}
                    </TableCell>
                    <TableCell align="center">
                      <img
                        src={cardImgUrl[row.random1]}
                        className="w-100"
                        alt=""
                        style={{ width: 25, height: 25 }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <img
                        src={cardImgUrl[row.random2]}
                        className="w-100"
                        alt=""
                        style={{ width: 25, height: 25 }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <img
                        src={cardImgUrl[row.random3]}
                        className="w-100"
                        alt=""
                        style={{ width: 25, height: 25 }}
                      />
                    </TableCell>
                    <TableCell align="center">{state.TimeArr[i]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <Paper sx={{ maxWidth: 650 }}>
            <Pagination
              color="primary"
              count={10}
              page={page}
              onChange={(e, val) => setPage(val)}
              variant="text"
              shape="rounded"
            />
          </Paper>
        </div>
      </div>
    </>
  );
};

export default ContentContainer;
