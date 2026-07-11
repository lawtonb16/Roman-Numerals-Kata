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

test("convert 6 to roman numeral", () => {
    expect(convertToRomanNumeral(6)).toBe("VI")
})

test("convert 10 to roman numeral", () => {
    expect(convertToRomanNumeral(10)).toBe("X")
})

test("convert 40 to roman numeral", () => {
    expect(convertToRomanNumeral(40)).toBe("XL")
})

test("convert 50 to roman numeral", () => {
    expect
})