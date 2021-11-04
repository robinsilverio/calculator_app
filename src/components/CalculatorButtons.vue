<template>
    <div class="calculator_main">
        <div class="calculator_buttons">
            <button 
                v-for="button in this.calculatorButtons.slice(0, 20)" 
                v-on:click="pressButton($event)" 
                :class="button.className" 
                :disabled="button.disabled"
                :key="button.text" 
                :value="button.text">{{ button.text }}</button>
            <div class="last_row_buttons">
                <button 
                    v-for="button in this.calculatorButtons.slice(20)" 
                    v-on:click="pressButton($event)" 
                    :class="button.className"
                    :disabled="button.disabled" 
                    :key="button.text" 
                    :value="button.text">{{ button.text }}</button>
            </div>
        </div>
    </div>
</template>
<script>
import store from "../vuex/store.js"

export default {
    name: 'CalculatorButtons',
    store,
    computed: {
        calculatorButtons() {
            return this.$store.getters.getButtons;
        }
    },
    methods: {
        pressButton(e) {
            e.preventDefault();

            let targetedElement = e.target;

            let objectFunctions = {
                'btn_regular numeric' : function () {
                    store.dispatch('addNumberToNumberList', e.target.value);
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

            objectFunctions[targetedElement.className]();

        }
    }
}
</script>
<style scoped>
@import url('../assets/stylesheets/buttons.css');
.calculator_main { 
    margin-top: 10px;
}
.calculator_buttons, .last_row_buttons { display: flex; }
.calculator_buttons {
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 5px;
}
.calculator_buttons .last_row_buttons {
    flex: auto;
}
.calculator_buttons button {
    flex: 0 20%;
    padding: 15px;
    color: #FFF;
}
</style>