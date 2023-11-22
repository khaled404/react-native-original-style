export const isCamelCase = (str: string) => {
  return /^[a-z][a-zA-Z]*$/.test(str) && /[A-Z]/.test(str);
};

export const getFirstWordInCamelCase = (str: string) => {
  if (!isCamelCase(str)) return str;
  const match = /^[a-z]+/.exec(str);
  return match ? match[0] : str;
};
