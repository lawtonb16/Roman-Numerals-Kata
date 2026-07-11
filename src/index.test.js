import { convertToRomanNumeral } from "./index.js"
import { test, expect } from "vitest"

test("convert 1 to a roman numeral", () => {
    expect(convertToRomanNumeral(1)).toBe("I")
})

test("convert 11 to a roman numeral", () => {
    expect(convertToRomanNumeral(11)).toBe("II")
})