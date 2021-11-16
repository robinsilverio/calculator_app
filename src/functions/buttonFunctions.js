import store from '../vuex/store.js'

export const buttonFunctions = {
    'btn_regular numeric' : function (paramNumber) {
        store.dispatch('addNumberToNumberList', paramNumber);
    },
    'btn_regular btn_clear': function () {
        store.dispatch('clearResult')                    
    },
    'btn_off': function () {
        store.dispatch('toggleCalculatorStatus', true);
    },
    'btn_clear btn_on': function () {
        if (store.getters.obtainDisplayText.isEmpty) {
            store.dispatch('clearResult');
        } else {
            store.dispatch('toggleCalculatorStatus', false)
        }    
    },
    'btn_regular btn_basic_operation': function (paramOperationSign) {
        store.dispatch('performBasicMathOperation', paramOperationSign);
    },
    'btn_regular btn_operation_percentage': function () {
        store.dispatch('performCalculationByPercentage');
    },
    'btn_regular btn_operation_square_root': function () {
        store.dispatch('performSquareRootCalculation');
    },
    'btn_regular op_equals': function () {
        store.dispatch('equalize');
    }
};