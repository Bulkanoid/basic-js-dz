window.addEventListener('load', () => {
  function showKeypad() {
    const operators = [
      { addition: '+' },
      { subtraction: '-' },
      { multiplication: '*' },
      { division: '/' },
    ];
    const calcBody = document.querySelector('.calc__body');
    const calcOperators = document.createElement('div');
    calcOperators.classList.add('calc__operators');
    calcBody.appendChild(calcOperators);

    operators.forEach((operator) => {
      const operatorButton = document.createElement('button');
      const key = Object.keys(operator);
      operatorButton.setAttribute('operator', operator[key]);
      operatorButton.classList.add('operator');
      operatorButton.innerHTML = operator[key];
      calcOperators.appendChild(operatorButton);
    });

    const calcDigit = document.createElement('div');
    calcDigit.classList.add('calc__digit');
    calcBody.appendChild(calcDigit);

    for (let i = 0; i < 10; i++) {
      const digit = document.createElement('button');
      digit.classList.add('calc__digit-element');
      digit.setAttribute('digit', i);
      digit.innerHTML = i;
      calcDigit.appendChild(digit);
    }

    const calculate = document.createElement('button');
    calculate.classList.add('calculate');
    calculate.innerText = '=';
    calcDigit.appendChild(calculate);
  }

  function getElements() {
    const operators = document.querySelectorAll('.operator');
    const digits = document.querySelectorAll('.calc__digit-element');
    const calculate = document.querySelector('.calculate');
    const result = document.querySelector('.calc__header');

    return { operators, digits, calculate, result };
  }

  function addHistory(object, history) {
    if (typeof object === 'string' && history.length > 0 && typeof history.at(-1) !== 'string')
      history.push(object);

    if (typeof object === 'number' && typeof history.at(-1) !== 'number') history.push(object);

    showResult(null, history);
  }

  function getResult(history) {
    if (!history) return null;
    let intermediate = [];
    let i = 0;

    while (i < history.length) {
      if (history[i] === '*') {
        const prev = intermediate.pop();
        intermediate.push(prev * history[i + 1]);
        i += 2;
      } else if (history[i] === '/') {
        const prev = intermediate.pop();
        intermediate.push(prev / history[i + 1]);
        i += 2;
      } else {
        intermediate.push(history[i]);
        i++;
      }
    }

    let result = intermediate[0];
    for (let j = 1; j < intermediate.length; j += 2) {
      const operator = intermediate[j];
      const nextNumber = intermediate[j + 1];

      if (operator === '+') {
        result += nextNumber;
      } else if (operator === '-') {
        result -= nextNumber;
      }
    }

    return showResult(result, history);
  }

  function showResult(res, history) {
    const { result } = getElements();
    if (!res) {
      result.innerHTML = history.join(' ');
      return history;
    } else {
      result.innerHTML = res;
      return [];
    }
  }

  function addEvents({ operators, digits, calculate }, history) {
    operators.forEach((operator) => {
      operator.addEventListener('click', () => {
        addHistory(operator.getAttribute('operator'), history);
      });
    });
    digits.forEach((digit) => {
      digit.addEventListener('click', () => {
        addHistory(+digit.getAttribute('digit'), history);
      });
    });
    calculate.addEventListener('click', () => {
      history = getResult(history);
    });
  }

  function main() {
    showKeypad();
    let history = [];
    const { operators, digits, calculate } = getElements();
    addEvents({ operators, digits, calculate }, history);
  }

  main();
});
