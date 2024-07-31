let req = prompt(`Укажите язык: 
(пример: en, ru, de)`);

switch (req) {
  case 'error':
    alert('Enter two letter country code');
    break;
  case 'en':
    alert('Hello in English');
    break;
  case 'de':
    alert('Hello in Germanskiy');
  case 'ru':
  case 'pl':
    alert('Hello in Russian');
    break;
  default:
    alert('Enter existing language');
}
