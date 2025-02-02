import { createStore } from 'vuex'
import { buttonData } from '../data/buttonData.js';
import { mathFunctions } from '../functions/mathFunctions.js';

const store = createStore({
    state: {
        displayText: '0',
        result: 0,
        numberList: [],
        operandsList: [],
        operatorsSet: new Set(),
        buttons: buttonData
    },
    getters: {
        obtainDisplayText: state => state.displayText,
        getButtons: state => state.buttons,
        isCalculatorScreenEmpty: state => state.numberList.length === 0 && state.operatorsSet.size === 0,
        isSimpleExpressionValid: (state, getters) => {
            return state.operandsList.length === 2 && getters.isBasicMathOperationChosenByUser
        },
        isBasicMathOperationChosenByUser: state => {
            let basicOperatorsList = ['+', '-', 'x', '÷'];
            return basicOperatorsList.includes(Array.from(state.operatorsSet)[0]);
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
        CLEAR_OPERATORS_SET(state) {
            state.operatorsSet.clear();
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
            state.operatorsSet = new Set();
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
        SET_RESULT_TO_NUMBERLIST(state) {
            state.numberList = state.result;
        },
        SET_RESULT_AS_FIRST_OPERAND(state) {
            state.operandsList = [state.result];
        },
        SET_OPERAND_TO_LIST(state) {
            state.operandsList.push(state.displayText);
        },
        SET_OPERATOR_TO_LIST(state, paramOperator) {
            state.operatorsSet.add(paramOperator)
        },
        PERFORM_BASIC_MATH_OPERATION(state) {
            state.result = mathFunctions[Array.from(state.operatorsSet).join("")](state.operandsList);
        },
        CALCULATE_RESULT_BY_PERCENTAGE(state) {
            state.result = mathFunctions['%'](state.operandsList, state.operatorsSet);
        },
        CALCULATE_SQUARE_ROOT(state) {
            state.result = mathFunctions['√'](state.operandsList);
        }
    },
    actions:{
        addNumberToNumberList({commit}, payload) {
            commit('PRINT_NUMBER_IN_SCREEN', payload);
        },
        clearResult({commit}) {
            commit('CLEAR_RESULT');
            commit('CLEAR_LISTS');
        },
        toggleCalculatorStatus({commit}, payload) {
            commit('DETERMINE_STATUS_CALCULATOR', payload);
            commit('CLEAR_LISTS');
        },
        performBasicMathOperation({commit}, paramOperator) {

            if (this.getters.isCalculatorScreenEmpty) return;

            commit('SET_OPERAND_TO_LIST');
            if (this.state.operatorsSet.size < 1) {
                commit('SET_OPERATOR_TO_LIST', paramOperator);
            }

            if (this.getters.isSimpleExpressionValid) {
                console.log('Calculate');
                commit('PERFORM_BASIC_MATH_OPERATION');
                commit('DISPLAY_RESULT');
                commit('SET_RESULT_AS_FIRST_OPERAND');
                commit('CLEAR_OPERATORS_SET');
                commit('SET_OPERATOR_TO_LIST', paramOperator);
            }
            commit('CLEAR_NUMBER_LIST');
        },
        performCalculationByPercentage({commit}) {
            commit('SET_OPERAND_TO_LIST');
            if (this.getters.isSimpleExpressionValid) {
                commit('CALCULATE_RESULT_BY_PERCENTAGE');
                commit('DISPLAY_RESULT');
                commit('SET_RESULT_TO_NUMBERLIST');
            }
            commit('CLEAR_OPERANDS_LIST');
        },
        performSquareRootCalculation({commit}){
            commit('SET_OPERAND_TO_LIST')
            commit('CALCULATE_SQUARE_ROOT');
            commit('DISPLAY_RESULT');
            commit('SET_RESULT_TO_NUMBERLIST');
            commit('CLEAR_OPERANDS_LIST');
        },
        equalize({commit}) {
            if (this.state.operandsList.length === 1 && this.state.operatorsSet.size === 1) {
                commit('SET_OPERAND_TO_LIST');
                commit('PERFORM_BASIC_MATH_OPERATION');
                commit('DISPLAY_RESULT');
                commit('SET_RESULT_TO_NUMBERLIST');
                commit('CLEAR_OPERANDS_LIST');
                commit('CLEAR_OPERATORS_SET');
            }
        }
    }
})

export default store
