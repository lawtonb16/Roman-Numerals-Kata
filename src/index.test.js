import { convertToRomanNumeral, convertToInteger } from "./index.js"
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
    expect(convertToRomanNumeral(50)).toBe("L")
})

test("convert 90 to roman numeral", () => {
    expect(convertToRomanNumeral(90)).toBe("XC")
})

test("convert 100 to roman numeral", () => {
    expect(convertToRomanNumeral(100)).toBe("C")
})

test("convert 400 to roman numeral", () => {
    expect(convertToRomanNumeral(400)).toBe("CD")
})

test("convert 500 to roman numeral", () => {
    expect(convertToRomanNumeral(500)).toBe("D")
})


test("convert 900 to roman numeral", () => {
    expect(convertToRomanNumeral(900)).toBe("CM")
})


test("convert 1000 to roman numeral", () => {
    expect(convertToRomanNumeral(1000)).toBe("M")
})

test("convert 2022 to roman numeral", () => {
    expect(convertToRomanNumeral(2022)).toBe("MMXXII")
})

test("convert I to integer", () => {
    expect(convertToInteger("I")).toBe(1)
})

test("convert II to integer", () => {
    expect(convertToInteger("II")).toBe(2)
})