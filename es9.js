// improve rest/spread on object
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const { a, ...others } = obj;
console.log(a);
console.log(others);

const options = { id: 1, ...others, name: 'D' };
console.log(options);