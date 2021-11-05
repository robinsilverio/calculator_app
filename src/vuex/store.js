import { createStore } from 'vuex'
import { buttonData } from '../data/buttonData.js';
import { mathFunctions } from '../functions/mathFunctions.js';

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
        PERFORM_MATH_OPERATION(state, paramOperator) {

            if (state.operationList.length > 1) return;

            state.operationList.push(paramOperator);
            if (state.operandList.length === 1) {

                state.operandList.push(state.result);

                state.result = mathFunctions['performBasicMathOperation'](state.operandList, state.operationList[0]).toString();
                
                state.operandList = [state.result];

            } else {
                state.operandList.push(state.result);
            }
        },
        EQUALIZE(state) {

            const basicOperationsList = ['+', '-', 'x', '÷'];

            if (basicOperationsList.includes(state.operationList[0])) {
                state.operandList.push(state.result);
                state.result = mathFunctions['performBasicMathOperation'](state.operandList, state.operationList[0]).toString();
            } else {
                // Work in progress...
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
        performMathOperation({commit}, paramOperationSign) {
            commit('PERFORM_MATH_OPERATION', paramOperationSign);
        },
        equalize({commit}) {
            commit('EQUALIZE');
        }
    }
})

export default store