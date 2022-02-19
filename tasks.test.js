import { stringLength } from "./task1";
import { reverseString } from "./task2"
import { Calculator } from "./task3"
import { capitalizeString } from "./task4"


// Task 1
test('book has 4 letters', () => {
    expect(stringLength('book')).toBe(4)
})

test('string must have at least 1 and at most 10 characters', () => {
    expect(() => stringLength()).toThrow('String length must be between 1 and 10 characters')
})

// Task 2
test('"book" must return reverse of it which is "koob"', () => {
    expect(reverseString('book')).toBe('koob')
})

// Task 3
const numberSetToBeTested = [
    { a: 2, b: 3, add: 5, substract: -1, divide: 2 / 3, multiply: 6 },
    { a: 6, b: 4, add: 10, substract: 2, divide: 6 / 4, multiply: 24 },
    { a: 8, b: 1, add: 9, substract: 7, divide: 8 / 1, multiply: 8 }
]

describe.each(numberSetToBeTested)('add method for $a and $b', ({ a, b, add }) => {
    test(`${a} added to ${b} returns ${add}`, () => {
        expect(new Calculator(a, b).add()).toBe(add)
    })
})

describe.each(numberSetToBeTested)('substract method for $a and $b', ({ a, b, substract }) => {
    test(`${b} substracted from ${a} returns ${substract} `, () => {
        expect(new Calculator(a, b).substract()).toBe(substract)
    })
})

describe.each(numberSetToBeTested)('divide method for $a and $b', ({ a, b, divide }) => {
    test(`${a} divided to ${b} returns ${divide}`, () => {
        expect(new Calculator(a, b).divide()).toBe(divide)
    })
})

describe.each(numberSetToBeTested)('multiply method for $a and $b', ({ a, b, multiply }) => {
    test(`${a} multiplied to ${b} returns ${multiply}`, () => {
        expect(new Calculator(a, b).multiply()).toBe(multiply)
    })
})

// Task 4
describe('capitalize string', () => {
    test('is a string', () => {
        expect(() => capitalizeString(123)).toThrow('Please input a string')
    })
    test('"book" returns "Book"', () => {
        expect(capitalizeString('book')).toBe('Book')
    })
})
