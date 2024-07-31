/*
Обзор задачи: Проверить, может ли пользователь сесть за руль, исходя из трех параметров:

Наличие водительских прав
Возраст 18 лет и старше
Трезвость пользователя
*/

const age = 18;
const hasLicense = true;
isDrunk = true;

const canDrive = age >= 18 && hasLicense && !isDrunk ? 'Может' : 'Не может';
console.log(canDrive);
