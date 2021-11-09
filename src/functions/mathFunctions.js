export const mathFunctions = {
    '+': function (paramOperandsList) {

        let tmp_result = 0;

        paramOperandsList.forEach(operand => {
            tmp_result += parseFloat(operand);
        });

        return tmp_result;
    },
    '-': function (paramOperandsList) {
        return paramOperandsList[0] - paramOperandsList[1];
    },
    'x': function (paramOperandsList) {
        return paramOperandsList[0] * paramOperandsList[1];
    },
    '÷': function (paramOperandsList) {
        return paramOperandsList[0] / paramOperandsList[1];
    },
    '+%': function (paramOperandsList) {
        return paramOperandsList[0] * (1.00 + (paramOperandsList[1] / 100));
    },
    '-%': function (paramOperandsList) {
        return paramOperandsList[0] * ((100 - paramOperandsList[1]) / 100);
    },
    'calculateSquareRoot': function (paramOperand) {
        return Math.sqrt(paramOperand);
    }
};