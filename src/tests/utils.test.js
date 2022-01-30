import { handlePagination, winningCalcu } from "../utils";

test("winningCalculation", () => {
  expect(winningCalcu(1, 1, 0, 5)).toBe(3.5);
});

test("pagination", () => {
  expect(
    handlePagination(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 3, 4, 4, 55, 66, 33],
      0
    )
  ).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
