<template>
    <div class="calculator_buttons">
        <button class="buttons" v-for="button in buttons" :key="button">{{ button }}</button>
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
.calculator_buttons { 
    margin-top: 10px;
}
.calculator_buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 5px;
}
.calculator_buttons .buttons {
    flex: 1 20%;
    padding: 15px;
}
</style>