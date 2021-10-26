import RomanNumerals from "./romanNumerals"
import each from 'jest-each';

describe("roman numerals should", () => {

        let romanNumerals = new RomanNumerals();

        each([
            {number: 1, roman: "I"},
            {number: 2, roman: "II"},
            {number: 3, roman: "III"},
            {number: 5, roman: "V"},
            {number: 6, roman: "VI"},
            {number: 7, roman: "VII"},
            {number: 8, roman: "VIII"},
            {number: 10, roman: "X"},
            {number: 11, roman: "XI"},
            {number: 12, roman: "XII"},
            {number: 13, roman: "XIII"},
            {number: 15, roman: "XV"},
            {number: 16, roman: "XVI"},
            {number: 17, roman: "XVII"},
            {number: 18, roman: "XVIII"},
            {number: 50, roman: "L"},
            {number: 100, roman: "C"},
            {number: 500, roman: "D"},
            {number: 1000, roman: "M"},
        ]).test("convert simple $number to $roman", ({number, roman}) => {
            expect(romanNumerals.convert(number)).toEqual(roman)
        });

        each([
            {number: 20, roman: "XX"},
            {number: 30, roman: "XXX"},
            {number: 70, roman: "LXX"},
            {number: 770, roman: "DCCLXX"},
        ]).test("convert $number with duplicates that arent I to $roman", ({number, roman}) => {
            expect(romanNumerals.convert(number)).toEqual(roman)
        });

        each([
            {number: 4, roman: "IV"},
            {number: 14, roman: "XIV"},
            {number: 40, roman: "XL"},
            {number: 400, roman: "CD"},
        ]).test("convert $number with a 4 to $roman", ({number, roman}) => {
            expect(romanNumerals.convert(number)).toEqual(roman)
        });

        each([
            {number: 9, roman: "IX"},
            {number: 19, roman: "XIX"},
            {number: 90, roman: "XC"},
            {number: 900, roman: "CM"},
        ]).test("convert $number with a 9 to $roman", ({number, roman}) => {
            expect(romanNumerals.convert(number)).toEqual(roman)
        });
    }
);