export const mathFunctions = {
    'performMathOperation': function (paramOperandList, paramOperatorsSet) {
        let tmp_result = 0

        if (paramOperatorsSet.size === 1) {
            paramOperandList.forEach(operand => {
                if (paramOperatorsSet.has('+')) {
                    tmp_result += parseFloat(operand);
                } else if (paramOperatorsSet.has('-')) {
                    tmp_result = paramOperandList[0] - paramOperandList[1];
                } else if (paramOperatorsSet.has('x')) {
                    tmp_result = paramOperandList[0] * paramOperandList[1]; 
                } else if (paramOperatorsSet.has('÷')) {
                    tmp_result = paramOperandList[0] / paramOperandList[1];
                }
            });
        } else {
            if (paramOperatorsSet.has('+')) {
                tmp_result = paramOperandList[0] * (1.00 + (paramOperandList[1] / 100)); 
            } else {
                tmp_result = paramOperandList[0] * ((100 - paramOperandList[1]) / 100);
            }
        }

        return tmp_result;
    },
    'calculateSquareRoot': function (paramOperand) {
        return Math.sqrt(paramOperand);
    }
};