export default class RomanNumerals {

    convert(number: number): string {
        let numeralMap = new Map([
            [1, "I"],
            [4, "IV"],
            [5, "IV"],
            [9, "IV"],
            [10, "X"],
            [40, "XL"],
            [50, "XL"],
            [90, "XC"],
            [100, "C"],
            [400, "CD"],
            [500, "D"],
            [900, "CM"],
            [1000, "M"],
        ]);
        let numeralList = ["I", "IV", "IV", "IV", "X", "XL", "XL", "XC", "C", "CD", "D", "CM", "M"];
        let listIndex = 12;
        let result = "";

        while (number >= 1000) {
            result += numeralList[listIndex];
            number -= 1000;
        }

        if (number >= 500) {
            result += "D";
            number -= 500;
        }

        while (number >= 100) {
            result += "C";
            number -= 100;
        }

        if (number >= 50) {
            result += "L";
            number -= 50;
        }

        while (number >= 10) {
            result += "X";
            number -= 10;
        }

        if (number >= 5) {
            result += "V";
            number -= 5;
        }

        for (let i = 0; i < number; i++) {
            result += "I";
        }
        return result;
    }

}