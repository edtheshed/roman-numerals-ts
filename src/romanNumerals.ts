export default class RomanNumerals {

    convert(number: number): string {
        let numeralMap = new Map([
            [1, "I"],
            [4, "IV"],
            [5, "V"],
            [9, "IX"],
            [10, "X"],
            [40, "XL"],
            [50, "L"],
            [90, "XC"],
            [100, "C"],
            [400, "CD"],
            [500, "D"],
            [900, "CM"],
            [1000, "M"],
        ]);
        let result = "";

        while (number >= 1000) {
            result += numeralMap.get(1000);
            number -= 1000;
        }

        if (number >= 900) {
            result += numeralMap.get(900);
            number -= 900;
        }

        if (number >= 500) {
            result += numeralMap.get(500);
            number -= 500;
        }

        if (number >= 400) {
            result += numeralMap.get(400);
            number -= 400;
        }

        while (number >= 100) {
            result += numeralMap.get(100);
            number -= 100;
        }

        if (number >= 90) {
            result += numeralMap.get(90);
            number -= 90;
        }

        if (number >= 50) {
            result += numeralMap.get(50);
            number -= 50;
        }

        if (number >= 40) {
            result += numeralMap.get(40);
            number -= 40;
        }

        while (number >= 10) {
            result += numeralMap.get(10);
            number -= 10;
        }

        if (number >= 9) {
            result += numeralMap.get(9);
            number -= 9;
        }

        if (number >= 5) {
            result += numeralMap.get(5);
            number -= 5;
        }

        if (number >= 4) {
            result += numeralMap.get(4);
            number -= 4;
        }

        for (let i = 0; i < number; i++) {
            result += numeralMap.get(1);
        }
        return result;
    }

}