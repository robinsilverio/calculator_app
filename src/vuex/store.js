import { createStore } from 'vuex'

// const getters = {
//     obtainResult: state => state.result
// }

// const mutations = {
//     ADD_NUMBER_TO_NUMBER_LIST(state, number) {
//         numberList.push(number);
//     },
//     ADD_OPERATIONSIGN_TO_OPERATORLIST(state, operator){
//         operationList.push(operator);
//     }
// }

// const actions = {
//     addNumberToNumberList({commit}, payload) {
//         // numberList.push(payload);
//         console.log(payload);
//     },
//     calculateResult() {

//     }
// }

const store = createStore({
    state() {
        return {
            result: 0,
            numberList: [],
            operationList: []
        }
    },
    getters() {
        return {
            obtainResult: state => state.result
        }
    },
    mutations(){
        return {
            ADD_NUMBER_TO_NUMBER_LIST(state, number) {
                state.numberList.push(number);
                console.log(number);
            },
            ADD_OPERATIONSIGN_TO_OPERATORLIST(state, operator){
                state.operationList.push(operator);
            }
        }
    },
    actions(){
        return {
            addNumberToNumberList({commit}, payload) {
                commit('ADD_NUMBER_TO_NUMBER_LIST', payload)
            }
        }
    }
})

export default store