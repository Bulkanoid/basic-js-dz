const isDayOrMonth = (data) => {
  const firstNum = Number(data[0]);
  const secondNum = Number(data[1]);

  if (
    isNaN(firstNum) ||
    isNaN(secondNum) ||
    firstNum < 0 ||
    secondNum < 0 ||
    firstNum > 31 ||
    secondNum > 31
  ) {
    return false;
  }

  if (firstNum <= 12 && secondNum <= 12) {
    return [firstNum, secondNum, data[2]];
  } else if (firstNum <= 12 && secondNum > 12) {
    return [secondNum, firstNum, data[2]];
  } else if (firstNum > 12 && secondNum <= 12) {
    return [firstNum, secondNum, data[2]];
  } else {
    return false;
  }
};

const isYear = (data) => {
  const year = Number(data[2]);

  if (isNaN(year)) {
    return false;
  }

  if (year > 99) {
    return [data[0], data[1], year];
  } else if (year >= 40) {
    return [data[0], data[1], '19' + year];
  } else {
    return [data[0], data[1], '20' + year];
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
  const isValidYear = isYear(data);

  if (!isValidDayOrMonth || !isValidYear) {
    return false;
  }

  return isValidYear;
};

const parseDates = (array) => {
  return array
    .map(isDate)
    .filter(Boolean)
    .map((el) => el.join('-'));
};

const array = ['10-02-2022', 'test', '11/12/2023', '00/12/2022', '41/12/2023'];
console.log(parseDates(array));
