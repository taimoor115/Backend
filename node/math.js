export const sum = (a, b) => a + b;
export const div = (a, b) => {
  if (b != 0) {
    return a / b;
  } else {
    return "Number cannot divide by zero";
  }
};

export const SPEED = 50;

// module.exports = 123;

// module.exports = {
//   sum: sum,
//   div: div,
//   SPEED: SPEED,
// };

// module.exports = obj;
