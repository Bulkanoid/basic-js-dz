/*
Цель задания:
Научиться работать с массивами.
Создать простую функцию шифрования пароля.
Ключевые пункты:
Задача:
Необходимо написать две функции: одна для шифрования пароля и другая для его проверки.
Шифратор пароля:
Функция принимает строку (пароль) для шифрования.
По заданному алгоритму происходит перестановка символов в строке.
Алгоритм примера: меняем местами символы (середину с первым, второй с последним и т.д.).
Важно: шифрование должно быть обратимым.
Проверка пароля:
Функция сравнивает зашифрованное слово с исходным паролем.
Если после дешифровки полученный результат совпадает с исходным паролем, функция возвращает true.
В противном случае — false.
*/

function cryptPassword(password) {
  const lengthPassword = password.length;
  const firstIteration = password
    .slice(0, Math.round(lengthPassword / 3))
    .split('')
    .reverse()
    .join('');
  const lastIteration = password
    .slice(Math.round(lengthPassword / 3), lengthPassword)
    .split('')
    .reverse()
    .join('');
  return lastIteration + firstIteration;
}

function checkPassword(crPassword, password) {
  const lengthPassword = crPassword.length;
  const firstOperation = crPassword
    .slice(0, Math.round(lengthPassword / 3))
    .split('')
    .reverse()
    .join('');
  const secondaryOperation = crPassword
    .slice(Math.round(lengthPassword / 3), lengthPassword)
    .split('')
    .reverse()
    .join('');

  res = secondaryOperation + firstOperation;

  if (res === password) {
    return true;
  }

  return false;
}

console.log(checkPassword(cryptPassword('password'), 'password'));
