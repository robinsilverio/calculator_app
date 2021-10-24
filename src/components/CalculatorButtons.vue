<template>
    <div class="calculator_main">
        <div class="calculator_buttons">
            <button v-for="button in buttons.slice(0, 20)" :class="button.className" :key="button.text">{{ button.text }}</button>
            <div class="last_row_buttons">
                <button v-for="button in buttons.slice(20)" :class="button.className" :key="button.text">{{ button.text }}</button>
            </div>
        </div>
    </div>
</template>
<script>
import { buttonData } from "../data/buttonData.js";
export default {
    name: 'CalculatorButtons',
    data() {
        return {
            buttons: buttonData
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