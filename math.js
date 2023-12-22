// this file contains implementation to find GCD and LCM
var gcd = function (numberOne, numberTwo) {
    if (numberOne === 0)
        return numberTwo;
    if (numberTwo === 0)
        return numberOne;
    while (numberOne !== numberTwo) {
        if (numberOne > numberTwo) {
            numberOne = numberOne - numberTwo;
        }
        else {
            numberTwo = numberTwo - numberOne;
        }
    }
    return numberOne;
};
console.log(gcd(4, 12));
