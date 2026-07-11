const romanNumeralConversionTable = {
    "1": "I",
    "2": "II",
    "3": "III",
    "4": "IV",
    "5": "V"
}

export function convertToRomanNumeral(number) {
    let numberArray = []
    let numberString = number.toString()
    let romanNumeral
    for(let num of numberString) {
        numberArray.push(romanNumeralConversionTable[num])
    }

    return romanNumeral = numberArray.join("")
}