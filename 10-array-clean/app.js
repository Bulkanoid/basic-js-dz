const arr = [3, 6, 9, 2];

function filterArray(array, fn) {
  const filteredArray = [];
  for (el of array) {
    if (fn(el)) {
      filteredArray.push(el);
    }
  }
  return filteredArray;
}

const res = filterArray(arr, (num) => num <= 6);
console.log(res);
