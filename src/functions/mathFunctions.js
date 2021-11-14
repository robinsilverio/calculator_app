export const mathFunctions = {
    '+': function (paramOperandsList) {

        let result = 0;

        paramOperandsList.forEach(operand => {
            result += parseFloat(operand);
        });

        return result;
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
    '%': function (paramOperandsList, paramOperatorsSet) {
        let result = (paramOperatorsSet.has('+')) ? 
                    paramOperandsList[0] * (1.00 + (paramOperandsList[1] / 100)) : 
                    paramOperandsList[0] * ((100 - paramOperandsList[1]) / 100);
        return result;
    },
    '√': function (paramOperand) {
        return Math.sqrt(paramOperand);
    }
};