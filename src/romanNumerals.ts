export default class RomanNumerals {

    convert(number: number): string {
        let result = "";

        while (number >= 1000){
            result += "M";
            number -= 1000;
        }

        if (number >= 500){
            result += "D";
            number -= 500;
        }

        while (number >= 100){
            result += "C";
            number -= 100;
        }

        if (number >= 50){
            result += "L";
            number -= 50;
        }

        while (number >= 10){
            result += "X";
            number -= 10;
        }

        if (number >= 5){
            result += "V";
            number -= 5;
        }

        for(let i = 0; i < number; i++) {
            result += "I";
        }
        return result;
    }

}