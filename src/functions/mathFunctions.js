export const mathFunctions = {
    'performBasicMathOperation': function (paramOperandList, paramOperator) {
        let tmp_result = 0
        paramOperandList.forEach(operand => {
            if (paramOperator === '+') {
                tmp_result += parseFloat(operand);
            } else if (paramOperator === '-') {
                tmp_result = paramOperandList[0] - paramOperandList[1];
            } else if (paramOperator === 'x') {
                tmp_result = paramOperandList[0] * paramOperandList[1]; 
            } else if (paramOperator === '÷') {
                tmp_result = paramOperandList[0] / paramOperandList[1];
            }
        });
        return tmp_result;
    } 
};