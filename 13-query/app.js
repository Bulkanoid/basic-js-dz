const object = { search: 'Вася', take: 10 };

const convertToQuery = (object) => {
  let query = '';
  const data = Object.keys(object);
  data.map((key, index) => {
    query += `${index == 0 ? '?' : ''}${key}=${object[key]}${index < data.length - 1 ? '&' : ''}`;
  });
  return query;
};

console.log(convertToQuery(object));
