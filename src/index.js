const romanNumeralConversionTable = {
    "1": "I",
    "2": "II",
    "3": "III",
    "4": "IV",
    "5": "V",
    "6": this["5"] + this["1"],
    "9": "IX"
}

export function convertToRomanNumeral(number) {
    let numberString = number.toString()
    let romanNumeral

    return romanNumeral = romanNumeralConversionTable[numberString]
}