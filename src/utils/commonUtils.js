export const capitalizeAllWords = function (input) {
  return input.replace(/(\s|^)(.)/g, (_, a, b) => `${a}${b.toUpperCase()}`);
};
