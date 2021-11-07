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
        if (store.getters.obtainResult.isEmpty) {
            store.dispatch('clearResult');
        } else {
            store.dispatch('toggleCalculatorStatus', false)
        }    
    },
    'btn_regular btn_operation': function (paramOperationSign) {
        store.dispatch('performMathOperation', paramOperationSign);
    },
    'btn_regular op_equals': function () {
        store.dispatch('equalize');
    }
};