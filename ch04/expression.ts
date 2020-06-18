let a = 1,
  b = 0;
if (a > b) console.log("a is greater than b");

const isGreater = (a: number, b: number): boolean => a > b;
console.log(isGreater(10, 11));
