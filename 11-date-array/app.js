const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

const isValidDate = (day, month, year) => {
  const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return day > 0 && day <= daysInMonth[month - 1];
};

const stringToArray = (str) => {
  let day, month, year;

  if (str.includes('/')) {
    [month, day, year] = str.split('/');
  } else if (str.includes('-')) {
    [day, month, year] = str.split('-');
  } else if (str.includes('.')) {
    [day, month, year] = str.split('.');
  } else {
    return null;
  }

  if (!year || isNaN(day) || isNaN(month) || isNaN(year)) {
    return null;
  }

  return [parseInt(day), parseInt(month), parseInt(year)];
};

const isDate = (string) => {
  const dateArray = stringToArray(string);
  if (!dateArray) {
    return false;
  }

  const [day, month, year] = dateArray;

  if (!isValidDate(day, month, year)) {
    return false;
  }

  return [day, month, year];
};

const parseDates = (array) => {
  return array
    .map(isDate)
    .filter(Boolean)
    .map((el) => {
      const day = String(el[0]).padStart(2, '0');
      const month = String(el[1]).padStart(2, '0');
      return `${day}-${month}-${el[2]}`;
    });
};

const array = ['10-02-2022', '02/10/2022', '29.02.2024', '31-12-1999', '01/01/2000'];
const arrayRight = ['10-02-2022', '10-02-2022', '29-02-2024', '31-12-1999', '01-01-2000'];

const array2 = ['32-01-2020', '31/11/2020', '29.02.2023', '00-01-2020', '31-06-2020'];
const array2Right = [];

const array3 = ['10-02-2022', '02/10/2022', '29.02.2024', '31/12/2022', '12-31-2022'];
const array3Right = ['10-02-2022', '10-02-2022', '29-02-2024', '31-12-2022'];

const array4 = ['s10-02-2022s', '11d-12m-1985y', '12-11-2023'];
const array4Right = ['12-11-2023'];

const checkResult = (array, rightArray) => {
  const parseD = parseDates(array);
  let isNorm = true;
  if (parseD.length === 0 && rightArray === 0) {
    return isNorm;
  }
  for (let i in parseD) {
    if (parseD[i] != rightArray[i]) {
      console.log(`шото не так с ${parseD[i]} должно быть ${rightArray[i]} индекс ${i}`);
      isNorm = false;
    }
  }
  return isNorm;
};

console.log(checkResult(array, arrayRight));
console.log(checkResult(array2, array2Right));
console.log(checkResult(array3, array3Right));
console.log(checkResult(array4, array4Right));
