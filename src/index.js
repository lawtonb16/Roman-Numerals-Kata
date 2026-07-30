const romanSymbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

// Subtractive notation rules: smaller symbol can subtract from larger symbol
const subtractiveRules = [
    ['I', 'V'],  // IV = 4
    ['I', 'X'],  // IX = 9
    ['X', 'L'],  // XL = 40
    ['X', 'C'],  // XC = 90
    ['C', 'D'],  // CD = 400
    ['C', 'M']   // CM = 900
];

// Derive the full symbol value table from rules
const romanSymbolValueTable = { ...romanSymbols };
for (const [smallSym, largeSym] of subtractiveRules) {
    romanSymbolValueTable[smallSym + largeSym] = romanSymbols[largeSym] - romanSymbols[smallSym];
}

// Pre-sorted array of [value, symbol] pairs in descending order for efficient lookup
const sortedRomanNumerals = Object.entries(romanSymbolValueTable)
    .map(([symbol, value]) => [value, symbol])
    .sort((a, b) => b[0] - a[0]);

export function convertToRomanNumeral(number) {
    let result = "";
    let remaining = number;

    for (const [value, symbol] of sortedRomanNumerals) {
        while (remaining >= value) {
            result += symbol;
            remaining -= value;
        }
    }

    return result;
}

export function convertToInteger(numeral) {
    return [...numeral].reduce((total, symbol, index, symbols) => {
        const value = romanSymbolValueTable[symbol];
        const nextValue = romanSymbolValueTable[symbols[index + 1]] ?? 0;

        return value < nextValue ? total - value : total + value;
    }, 0);
}