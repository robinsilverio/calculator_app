import { createStore } from 'vuex'
import { buttonData } from '../data/buttonData.js';
import { mathFunctions } from '../functions/mathFunctions.js';

const store = createStore({
    state: {
        result: "0",
        numberList: [],
        operandsList: [],
        operatorsList: new Set(),
        buttons: buttonData
    },
    getters: {
        obtainResult: state => state.result,
        getButtons: state => state.buttons
    },
    mutations: {
        PRINT_NUMBER_IN_SCREEN(state, number) {
            state.result = ""
            state.numberList.push(number);
            state.numberList.forEach(number => {
                state.result += number
            });
        },
        CLEAR_RESULT(state) {
            state.result = '0';
        },
        CLEAR_OPERATOR(state) {
            state.operatorsList.delete(Array.from(state.operatorsList)[0]);
        },
        CLEAR_NUMBER_LIST(state) {
            state.numberList = [];
        },
        CLEAR_OPERANDS_LIST(state) {
            state.operandsList = [];
        },
        CLEAR_LISTS(state) {
            state.numberList = [];
            state.operandsList = [];
            state.operatorsList = new Set();
        },
        DETERMINE_STATUS_CALCULATOR(state, status) {
            state.result = (status) ? '' : '0';
            state.buttons.forEach(button => {
                if (button.className.includes('btn_regular')) {
                    button.disabled = status;
                }
            });
        },
        SET_RESULT_TO_LIST(state) {
            state.numberList = state.result;
        },
        SET_OPERAND_TO_LIST(state) {
            state.operandsList.push(state.result);
        },
        SET_OPERATOR_TO_LIST(state, paramOperator) {
            state.operatorsList.add(paramOperator)
        },
        PERFORM_MATH_OPERATION(state) {
            state.result = mathFunctions['performBasicMathOperation'](state.operandsList, Array.from(state.operatorsList)[0]).toString();
            state.operandsList = [state.result];
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
        performMathOperation({commit}, paramOperator) {

            if (this.state.numberList.length === 0) return;

            commit('SET_OPERAND_TO_LIST');
            commit('SET_OPERATOR_TO_LIST', paramOperator);
            if (this.state.operandsList.length === 2 && this.state.operatorsList.size === 1) {
                commit('PERFORM_MATH_OPERATION')
            }
            commit('CLEAR_NUMBER_LIST');
        },
        equalize({commit}) {
            
            const basicOperatorsList = ['+', '-', 'x', '÷'];

            if (basicOperatorsList.includes(Array.from(this.state.operatorsList)[0])) {
                commit('SET_OPERAND_TO_LIST');
                if (this.state.operandsList.length === 2 && this.state.operatorsList.size === 1) {
                    commit('PERFORM_MATH_OPERATION')
                }
                commit('SET_RESULT_TO_LIST');
                commit('CLEAR_OPERANDS_LIST');
                commit('CLEAR_OPERATOR');
            }
        }
    }
})

export default store
