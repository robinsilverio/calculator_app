import { createStore } from 'vuex'
import { buttonData } from '../data/buttonData.js';
import { mathFunctions } from '../functions/mathFunctions.js';

const store = createStore({
    state: {
        result: "0",
        numberList: [],
        operandList: [],
        operationList: new Set(),
        buttons: buttonData
    },
    getters: {
        obtainResult: state => state.result,
        getButtons: state => state.buttons
    },
    mutations: {
        PRINT_NUMBER_IN_SCREEN(state, number) {
            if (state.operationList.size === 1) {
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
        CLEAR_NUMBER_LIST(state) {
            state.numberList = [];
        },
        CLEAR_LISTS(state) {
            state.numberList = [];
            state.operandList = [];
            state.operationList = new Set();
        },
        DETERMINE_STATUS_CALCULATOR(state, status) {
            state.result = (status) ? '' : '0';
            state.buttons.forEach(button => {
                if (button.className.includes('btn_regular')) {
                    button.disabled = status;
                }
            });
        },
        SET_OPERAND_TO_LIST(state) {
            state.operandList.push(state.result);
        },
        SET_OPERATOR_TO_LIST(state, paramOperator) {
            state.operationList.add(paramOperator)
        },
        PERFORM_MATH_OPERATION(state) {
            state.result = mathFunctions['performBasicMathOperation'](state.operandList, Array.from(state.operationList)[0]).toString();
            state.operandList = [state.result];
        },
        EQUALIZE(state) {

            const basicOperationsList = ['+', '-', 'x', '÷'];
            console.log(basicOperationsList);

            if (basicOperationsList.includes(Array.from(state.operationList)[0])) {
                state.operandList.push(state.result);
                state.result = mathFunctions['performBasicMathOperation'](state.operandList, Array.from(state.operationList)[0]).toString();
                state.operandList = [state.result];
                state.operationList.delete(Array.from(state.operationList)[0]);
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

            if (this.state.numberList.length === 0) return;

            commit('SET_OPERAND_TO_LIST');
            commit('SET_OPERATOR_TO_LIST', paramOperationSign);
            commit('PERFORM_MATH_OPERATION')
            commit('CLEAR_NUMBER_LIST');
        },
        equalize({commit}) {
            commit('EQUALIZE');
        }
    }
})

export default store