module.exports = function toReadable (number) {
  const numbersNames = new Map([
    [0, "zero"],
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"],
    [5, "five"],
    [6, "six"],
    [7, "seven"],
    [8, "eight"],
    [9, "nine"],
    [10, "ten"],
    [11, "eleven"],
    [12, "twelve"],
    [13, "thirteen"],
    [14, "fourteen"],
    [15, "fifteen"],
    [16, "sixteen"],
    [17, "seventeen"],
    [18, "eighteen"],
    [19, "nineteen"],
    [20, "twenty"],
    [30, "thirty"],
    [40, "forty"],
    [50, "fifty"],
    [60, "sixty"],
    [70, "seventy"],
    [80, "eighty"],
    [90, "ninety"],
  ]);

  if (number < 20) return numbersNames.get(number);
  if (number < 100) {
    const tensDigit = Math.floor(number / 10) * 10;
    const onesDigit = number % 10;
    return `${numbersNames.get(tensDigit)}${onesDigit === 0 ? '' : ` ${numbersNames.get(onesDigit)}`}`
  }
  const hundredDigit = Math.floor(number / 100);
  const restNumber = toReadable(number % 100);
  return `${numbersNames.get(hundredDigit)} hundred${restNumber === numbersNames.get(0) ? '' : ` ${restNumber}`}`;
}
