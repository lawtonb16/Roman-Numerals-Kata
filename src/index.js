const romanNumeralConversionTable = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C"
}

export function convertToRomanNumeral(number) {
    let romanNumeral
    return romanNumeral = romanNumeralConversionTable[number]
}