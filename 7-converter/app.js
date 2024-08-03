/*
Задание:

Создать функцию конвертации валют, принимающую три параметра:
Сумма для конвертации
Исходная валюта
Целевая валюта
Пример работы функции:

Примерно $1000 рублей к долларам вернет $30.
Обработка ошибок:

Если курс для пары валют неизвестен (например, нет курса рубль к ене), функция вернет null.
*/

function convertToRub(summa, currentCurrency) {
  switch (currentCurrency) {
    case 'usd':
      return summa * 87;
    case 'eu':
      return summa * 94;
    case 'uah':
      return summa * 2.11;
    case 'ru':
      return summa;
    default:
      return null;
  }
}

function convertT(convertToRu, targetCurrency) {
  switch (targetCurrency) {
    case 'usd':
      return convertToRu * 0.011;
    case 'eu':
      return convertToRu * 0.01;
    case 'uah':
      return convertToRu * 0.47;
    case 'ru':
      return convertToRu;
    default:
      return null;
  }
}

function converterCurrency(summa, currentCurrency, targetCurrency) {
  const convertToRu = convertToRub(summa, currentCurrency);
  const convertTo = convertT(convertToRu, targetCurrency);

  if (!convertTo) {
    return null;
  }

  return `При конвертации ${summa}${currentCurrency} в ${targetCurrency} получаем ${convertTo}${targetCurrency}`;
}

console.log(converterCurrency(1000, 'ru', 'usd'));
