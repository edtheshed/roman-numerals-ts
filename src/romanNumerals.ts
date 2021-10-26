export default class RomanNumerals {

    convert(number: number): string {
        let numeralMap = new Map([
            [1000, "M"],
            [900, "CM"],
            [500, "D"],
            [400, "CD"],
            [100, "C"],
            [90, "XC"],
            [50, "L"],
            [40, "XL"],
            [10, "X"],
            [9, "IX"],
            [5, "V"],
            [4, "IV"],
            [1, "I"],
        ]);
        let result = "";

        numeralMap.forEach((romanNumeral,value) => {
            while (number >= value){
                result += romanNumeral;
                number -= value;
            }
        });

        return result;
    }

}