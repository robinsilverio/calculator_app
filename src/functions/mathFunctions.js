export const mathFunctions = {
    '+': function (paramOperandList) {
        let tmp_result = 0
        paramOperandList.forEach(operand => {
            tmp_result += parseFloat(operand);
        });
        return tmp_result;
    } 
};