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
    if(numeral == "I") {
        return 1
    } else {
        return 2
    }
}