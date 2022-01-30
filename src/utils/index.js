export const randomNum = () => {
  return Math.floor(Math.random() * 3);
};

export const getTime = () => {
  let hour = new Date().getHours() == 0 ? "12" : new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  return (
    isSingleDigit(hour) + ":" + isSingleDigit(min) + ":" + isSingleDigit(sec)
  );
};

const isSingleDigit = (str) => {
  let newstr = str < 10 ? "0" + str : str;
  return newstr;
};

export const winningCalcu = (x, y, z, amount) => {
  amount -= 2;
  if (x === y && y == z && x === 0) {
    amount += 5;
  } else if (x === y && y == z && x !== 0) {
    amount += 2;
  } else if (x === y || y == z || x === z) {
    amount += 0.5;
  }
  return amount;
};

export const handlePagination = (arr, i) => {
  let itemPerPage = 10;
  let start = i * itemPerPage;
  let newArr = arr.slice(start, start + itemPerPage);
  return newArr;
};
