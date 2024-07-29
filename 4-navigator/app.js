/*
distance = корень(дельта x**2 + дельта y**2)
дельта x = x2 - x1
дельта y = y2 - y1
*/

const lat1 = 1;
const lat2 = 2;

const lon1 = 1;
const lon2 = 2;

const deltaLat = lat2 - lat1;
const deltaLon = lon2 - lon1;

const res = (deltaLat ** 2 + deltaLon ** 2) ** 0.5;

console.log(res);
