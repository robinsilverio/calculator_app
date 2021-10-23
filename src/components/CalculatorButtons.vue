<template>
    <div class="calculator_main">
        <div class="calculator_buttons">
            <button v-for="button in buttons.slice(0, 20)" :key="button">{{ button }}</button>
            <div class="last_row_buttons">
                <button v-for="button in buttons.slice(20)" :key="button">{{ button }}</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CalculatorButtons',
    data() {
        return {
            buttons: [
                'OFF', 'MRC', 'M-', 'M+', '÷', 
                '%', 7, 8, 9, 'x',
                '√', 4, 5, 6, '-',
                'CE', 1, 2, 3, '+',
                'AC', 0, '.', '='
            ]
        }
    }
}
</script>
<style scoped>
.calculator_main { 
    margin-top: 10px;
}
.calculator_buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 5px;
}
.calculator_buttons .last_row_buttons {
    display: flex;
    flex: auto;
}
.calculator_buttons button {
    flex: 0 20%;
    padding: 15px;
}
</style>