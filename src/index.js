

export function convertToRomanNumeral(number) {
    let numberString = number.toString()
    for(let i = 0; i < numberString.length; i++) {
        numberString[i] = "I"
    }
    return numberString
}