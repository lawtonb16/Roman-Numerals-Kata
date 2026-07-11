import { convertToRomanNumeral } from "./index.js"
import { test, expect } from "vitest"

test("convert 1 to a roman numeral", () => {
    expect(convertToRomanNumeral(1)).toBe("I")
})

test("convert 2 to a roman numeral", () => {
    expect(convertToRomanNumeral(2)).toBe("II")
})

test("convert 3 to roman numeral", () => {
    expect(convertToRomanNumeral(3)).toBe("III")
})

test("convert 4 to roman numeral", () => {
    expect(convertToRomanNumeral(4)).toBe("IV")
})

test("convert 5 to roman numeral", () => {
    expect(convertToRomanNumeral(5)).toBe("V")
})
test("convert 9 to roman numeral", () => {
    expect(convertToRomanNumeral(9)).toBe("IX")
})