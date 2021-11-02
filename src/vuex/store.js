import { createStore } from 'vuex'

const store = createStore({
    state: {
        result: 0,
        numberList: [],
        operationList: []
    },
    getters: {
        obtainResult: state => state.result
    },
    mutations: {
        ADD_NUMBER_TO_NUMBER_LIST(state, number) {
            state.result = ""
            state.numberList.push(number);
            state.numberList.forEach(number => {
                state.result += number
            });
        },
        ADD_OPERATIONSIGN_TO_OPERATORLIST(state, operator){
            state.operationList.push(operator);
        },
        CLEAR_RESULT(state) {
            state.result = 0;
        },
        CLEAR_LISTS(state) {
            state.numberList = [];
            state.operationList = [];
        },
        DETERMINE_STATUS_CALCULATOR(state, isOff) {
            state.result = (isOff) ? '' : 0;
        }
    },
    actions:{
        addNumberToNumberList({commit}, payload) {
            commit('ADD_NUMBER_TO_NUMBER_LIST', payload)
        },
        clearResult({commit}) {
            commit('CLEAR_RESULT');
            commit('CLEAR_LISTS');
        },
        toggleCalculatorStatus({commit}, payload) {
            commit('DETERMINE_STATUS_CALCULATOR', payload);
            commit('CLEAR_LISTS')
        }
    }
})

export default store