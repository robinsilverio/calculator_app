export const mathFunctions = {
    'performBasicMathOperation': function (paramOperandList, paramOperation) {
        let tmp_result = 0
        paramOperandList.forEach(operand => {
            if (paramOperation === '+') {
                tmp_result += parseFloat(operand);
            } else if (paramOperation === '-') {
                // Work in progress...
            }
        });
        return tmp_result;
    } 
};