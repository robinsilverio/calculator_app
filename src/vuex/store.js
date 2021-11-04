import { createStore } from 'vuex'
import { buttonData } from '../data/buttonData.js';

const store = createStore({
    state: {
        result: "0",
        numberList: [],
        operandList: [],
        operationList: [],
        buttons: buttonData
    },
    getters: {
        obtainResult: state => state.result,
        getButtons: state => state.buttons
    },
    mutations: {
        PRINT_NUMBER_IN_SCREEN(state, number) {
            if (state.operationList.length === 1) {
                state.numberList = [];
                state.operationList = []
            }
            state.result = ""
            state.numberList.push(number);
            state.numberList.forEach(number => {
                state.result += number
            });
        },
        CLEAR_RESULT(state) {
            state.result = '0';
        },
        CLEAR_LISTS(state) {
            state.numberList = [];
            state.operandList = [];
            state.operationList = [];
        },
        DETERMINE_STATUS_CALCULATOR(state, status) {
            state.result = (status) ? '' : '0';
            state.buttons.forEach(button => {
                if (button.className.includes('btn_regular')) {
                    button.disabled = status;
                }
            });
        },
        PERFORM_ADDITION_OPERATION(state) {
            state.operationList.push("+");
            if (state.operandList.length === 1) {
                state.operandList.push(state.result);
                let tmp_result = 0;
                
                state.operandList.forEach(operand => {
                    tmp_result += parseFloat(operand);
                });
                state.result = tmp_result.toString();
                state.operandList = [state.result];            
            } else {
                state.operandList.push(state.result)
            }
        }
    },
    actions:{
        addNumberToNumberList({commit}, payload) {
            commit('PRINT_NUMBER_IN_SCREEN', payload)
        },
        clearResult({commit}) {
            commit('CLEAR_RESULT');
            commit('CLEAR_LISTS');
        },
        toggleCalculatorStatus({commit}, payload) {
            commit('DETERMINE_STATUS_CALCULATOR', payload);
            commit('CLEAR_LISTS')
        },
        performAdditionOperation({commit}) {
            commit('PERFORM_ADDITION_OPERATION');
        }
    }
})

export default store