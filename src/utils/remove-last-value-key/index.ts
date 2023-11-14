export const removeLastValueKey = (key: string) => {
  const keyArr = key.split('-');
  const name = keyArr.slice(0, -1).join('-');
  const value = keyArr[keyArr.length - 1];

  return { name, value };
};
