export const getOptionsList = (obj: { [key: string]: boolean }) => {
  const arr = [];
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const { length } = keys;
  for (let i = 0; i < length; i++) {
    arr.push({ [keys[i]]: values[i] });
  }
  let string = "";
  arr.forEach((el) => {
    const key = [Object.keys(el)[0]][0];
    if (el[key]) {
      string = string.concat(",", key);
    }
  });
  return string.slice(1);
};
