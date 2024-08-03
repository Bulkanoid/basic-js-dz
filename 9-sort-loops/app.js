const array = [1, 40, -5, 10, 20, 0, 80];

function sortArray(array) {
  const sortableArr = [...array];
  let length = sortableArr.length;
  let i = 0;

  while (i < length) {
    for (let index = 0; index < length; index++) {
      if (sortableArr[index + 1] < sortableArr[index]) {
        [sortableArr[index], sortableArr[index + 1]] = [sortableArr[index + 1], sortableArr[index]];
      }
    }
    i++;
    length--;
  }
  return sortableArr;
}

console.log(sortArray(array));
