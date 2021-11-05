export const mathFunctions = {
    'performBasicMathOperation': function (paramOperandList, paramOperation) {
        let tmp_result = 0
        paramOperandList.forEach(operand => {
            if (paramOperation === '+') {
                tmp_result += parseFloat(operand);
            } else if (paramOperation === '-') {
                tmp_result = paramOperandList[0] - paramOperandList[1];
            }
        });
        return tmp_result;
    } 
};