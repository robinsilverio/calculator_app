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
import { buttonFunctions } from '../functions/buttonFunctions.js'

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
            buttonFunctions[targetedElement.className](targetedElement.value);
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