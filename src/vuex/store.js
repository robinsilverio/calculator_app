import { createStore } from 'vuex'
import { buttonData } from '../data/buttonData.js';
import { mathFunctions } from '../functions/mathFunctions.js';

const store = createStore({
    state: {
        displayText: '0',
        result: 0,
        numberList: [],
        operandsList: [],
        operatorsList: new Set(),
        buttons: buttonData
    },
    getters: {
        obtainDisplayText: state => state.displayText,
        getButtons: state => state.buttons,
        isNumberListEmpty: state => state.numberList.length === 0,
        isSimpleExpressionValid: state => state.operandsList.length === 2 && state.operatorsList.size === 1,
        isBasicMathOperationChosenByUser: state => {
            let basicOperatorsList = ['+', '-', 'x', '÷']
            return basicOperatorsList.includes(Array.from(state.operatorsList)[0])
        }
    },
    mutations: {
        PRINT_NUMBER_IN_SCREEN(state, number) {
            state.displayText = ""
            state.numberList.push(number);
            state.numberList.forEach(number => {
                state.displayText += number
            });
        },
        CLEAR_RESULT(state) {
            state.result = 0;
            state.displayText = state.result.toString();
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
            state.displayText = (status) ? '' : '0';
            state.buttons.forEach(button => {
                if (button.className.includes('btn_regular')) {
                    button.disabled = status;
                }
            });
        },
        DISPLAY_RESULT(state) {
            state.displayText = state.result.toString();
        },
        SET_RESULT_TO_LIST(state) {
            state.numberList = state.result;
        },
        SET_RESULT_AS_FIRST_OPERAND(state) {
            state.operandsList = [state.result];
        },
        SET_OPERAND_TO_LIST(state) {
            state.operandsList.push(state.displayText);
        },
        SET_OPERATOR_TO_LIST(state, paramOperator) {
            state.operatorsList.add(paramOperator)
        },
        PERFORM_MATH_OPERATION(state) {
            state.result = mathFunctions['performBasicMathOperation'](state.operandsList, Array.from(state.operatorsList)[0]);
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
            commit('CLEAR_LISTS');
        },
        performMathOperation({commit}, paramOperator) {

            if (this.getters.isNumberListEmpty) return;

            commit('SET_OPERAND_TO_LIST');
            commit('SET_OPERATOR_TO_LIST', paramOperator);
            if (this.getters.isSimpleExpressionValid) {
                commit('PERFORM_MATH_OPERATION');
                commit('SET_RESULT_AS_FIRST_OPERAND');
                commit('DISPLAY_RESULT');
            }
            commit('CLEAR_NUMBER_LIST');
        },
        equalize({commit}) {
            
            if (this.getters.isBasicMathOperationChosenByUser) {
                commit('SET_OPERAND_TO_LIST');
                if (this.getters.isSimpleExpressionValid) {
                    commit('PERFORM_MATH_OPERATION');
                    commit('DISPLAY_RESULT');
                }
                commit('SET_RESULT_TO_LIST');
                commit('CLEAR_OPERANDS_LIST');
                commit('CLEAR_OPERATOR');
            }
        }
    }
})

export default store
