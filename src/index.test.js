import { convertToRomanNumeral } from "./index.js"
import { test, expect } from "vitest"

test("convert 1 to a roman numeral", () => {
    expect(convertToRomanNumeral(1)).toBe("I")
})

test("convert 11 to a roman numeral", () => {
    expect(convertToRomanNumeral(11)).toBe("II")
})

test("convert 54321 to a roman numeral", () => {
    expect(convertToRomanNumeral(54321)).toBe("VIVIIIIII")
})