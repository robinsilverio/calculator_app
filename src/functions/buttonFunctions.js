import store from '../vuex/store.js'

export const buttonFunctions = {
    'btn_regular numeric' : function (value) {
        store.dispatch('addNumberToNumberList', value);
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
    'btn_regular op_addition': function () {
        store.dispatch('performAdditionOperation');
    }
};