<template>
    <div class="calculator_buttons">
        <div class="top_buttons">
            <button v-for="button in topButtons" :key="button">{{ button }}</button>
        </div>
        <div class="main_buttons">
            <div class="center_buttons">
                <button v-for="button in centerButtons" :key="button">{{ button }}</button>
            </div>
            <div class="left_buttons">
                <button v-for="button in leftButtons" :key="button">{{ button }}</button>
            </div>
            <div class="right_buttons">
                <button v-for="button in rightButtons" :key="button">{{ button }}</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CalculatorButtons',
    data() {
        return {
            topButtons: ['OFF', 'MRC', 'M-', 'M+', '÷'],
            leftButtons: ['%', '√', 'CE', 'AC'],
            centerButtons: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            rightButtons: ['x', '-', '+']
        }
    }
}
</script>
<style scoped>
.calculator_buttons { 
    margin-top: 10px;
}
.calculator_buttons .top_buttons {
    display: flex;
    justify-content: space-evenly;
}

.calculator_buttons .main_buttons{
    display: flex;
    flex-flow: row wrap;
    margin-top: 10px;
}

.main_buttons > * {
    flex: 1 100%;
}

@media all and (min-width: 800px) {
    .center_buttons { flex: 2 0px; }
    .left_buttons { order: 1; }
    .center_buttons { order: 2; }
    .right_buttons { order: 3; }
}

button {
    width: 15%;
}
</style>