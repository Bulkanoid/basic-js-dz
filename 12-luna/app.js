const card = '4561-1213-4367-2612';

function isNumber(string) {
  const numClear = string.replaceAll('-', '').trim();
  for (let i of numClear) {
    if (isNaN(i)) {
      return false;
    }
  }
  return numClear;
}

function isValidCard(string) {
  const isCard = isNumber(string);
  if (!isCard) {
    return false;
  }

  let sum = 0;

  for (let i = 0; i < isCard.length; i++) {
    if (i % 2 == 0) {
      let notEven = Number(isCard[i]) * 2;
      if (notEven >= 9) {
        notEven -= 9;
      }
      sum += notEven;
    } else if (i % 2 != 0) {
      sum += Number(isCard[i]);
    }
  }

  if (sum % 10 != 0) {
    return false;
  }

  return true;
}

console.log(isValidCard(card));
