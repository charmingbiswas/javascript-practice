// this file contains implementation to find GCD and LCM

const gcd = (numberOne: number, numberTwo: number): number => {
  if (numberOne === 0) return numberTwo;
  if (numberTwo === 0) return numberOne;

  while (numberOne !== numberTwo) {
    if (numberOne > numberTwo) {
      numberOne = numberOne - numberTwo;
    } else {
      numberTwo = numberTwo - numberOne;
    }
  }

  return numberOne;
};

// Relation between LCM and GCD
// LCM(a, b) * GCD(a, b) = a * b;

const lcm = (a: number, b: number) => (a * b) / gcd(a, b);
