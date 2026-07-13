const romanNumeralConversionTable = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
}

const romanSymbolValueTable = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

function findHighestBelow(obj, target) {
  return Object.entries(obj).reduce((highest, [key]) => {
    const numericKey = Number(key);
    if (numericKey <= target && (highest === null || numericKey > highest)) {
      return numericKey;
    }
    return highest;
  }, null);
}

function convertAbnormalNumberToRomanNumeral(number) {
    let remainingNumber = number;
    let romanNumeralArray = [];

    while (remainingNumber > 0) {
        const highestNumberNumeralKey = findHighestBelow(romanNumeralConversionTable, remainingNumber);
        if (highestNumberNumeralKey === null) {
            break;
        }

        romanNumeralArray.push(romanNumeralConversionTable[highestNumberNumeralKey]);
        remainingNumber -= highestNumberNumeralKey;
    }

    return romanNumeralArray.join("")
}

export function convertToRomanNumeral(number) {
    let romanNumeral
    if (romanNumeralConversionTable[number]) {
        return romanNumeral = romanNumeralConversionTable[number] 
    } else {
        return convertAbnormalNumberToRomanNumeral(number)
    }
}

export function convertToInteger(numeral) {
    return [...numeral].reduce((total, symbol, index, symbols) => {
        const value = romanSymbolValueTable[symbol];
        const nextValue = romanSymbolValueTable[symbols[index + 1]] ?? 0;

        if (value < nextValue) {
            return total - value;
        }

        return total + value;
    }, 0);
}