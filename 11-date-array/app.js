const isDayOrMonth = (data) => {
  const firstNum = parseInt(data[0]);
  const secondNum = parseInt(data[1]);

  if (
    isNaN(firstNum) ||
    isNaN(secondNum) ||
    firstNum <= 0 ||
    secondNum <= 0 ||
    firstNum > 31 ||
    secondNum > 31
  ) {
    return false;
  }

  if (firstNum <= 12 && secondNum <= 31) {
    return [secondNum, firstNum, data[2]];
  }

  if (firstNum > 12 && secondNum <= 12) {
    return [firstNum, secondNum, data[2]];
  }

  return false;
};

const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};


const isValidDate = (day, month, year) => {
  const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return day <= daysInMonth[month - 1];
};

const isYear = (data) => {
  const year = parseInt(data[2]);

  if (isNaN(year)) {
    return false;
  }

  if (year > 99) {
    return [data[0], data[1], year];
  } else if (year >= 40) {
    return [data[0], data[1], 1900 + year];
  } else {
    return [data[0], data[1], 2000 + year];
  }
};

const isDate = (string) => {
  const separators = ['.', '/', '-'];
  let separator = '';

  for (let sep of separators) {
    if (string.includes(sep)) {
      separator = sep;
      break;
    }
  }

  if (!separator) {
    return false;
  }

  const data = string.split(separator);

  if (data.length !== 3) {
    return false;
  }

  const isValidDayOrMonth = isDayOrMonth(data);
  const isValidYear = isYear(isValidDayOrMonth || []);

  if (!isValidDayOrMonth || !isValidYear) {
    return false;
  }

  const [day, month, year] = isValidYear;

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

const array = [
  '10-02-2022',
  '02/10/2022',
  's02-12-1992s',
  '11d-12m-1985y',
  '12-11-2023',
  '11/12/2023',
  '02/29/2023',
  '02/29/2024',
  '29-02-2024',
  '29-02-2023',
  '30-06-2024',
  '06/30/2024',
  '31-06-2024',
  '06/31/2024',
  '31-07-2024',
  '07/31/2024',
];

console.log(parseDates(array));
