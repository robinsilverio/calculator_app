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
export default {
    name: 'CalculatorButtons',
    data() {
        return {
            buttons: [
                {
                    className: 'btn_regular btn_off',
                    text: 'OFF'
                }, 
                {
                    className: 'btn_mem',
                    text: 'MRC'
                }, 
                {
                    className: 'btn_mem',
                    text: 'M-'
                }, 
                {
                    className: 'btn_mem',
                    text: 'M+'
                }, 
                {
                    className: 'btn_regular',
                    text: '÷'
                }, 
                {
                    className: 'btn_regular',
                    text: '%'
                }, 
                {
                    className: 'btn_regular',
                    text: 7
                }, 
                {
                    className: 'btn_regular',
                    text: 8
                }, 
                {
                    className: 'btn_regular',
                    text: 9
                }, 
                {
                    className: 'btn_regular',
                    text: 'x'
                },
                {
                    className: 'btn_regular',
                    text: '√'
                }, 
                {
                    className: 'btn_regular',
                    text: 4
                }, 
                {
                    className: 'btn_regular',
                    text: 5
                }, 
                {
                    className: 'btn_regular',
                    text: 6
                }, 
                {
                    className: 'btn_regular',
                    text: '-'
                },
                {
                    className: 'btn_clear',
                    text: 'CE'
                }, 
                {
                    className: 'btn_regular',
                    text: 1
                }, 
                {
                    className: 'btn_regular',
                    text: 2
                }, 
                {
                    className: 'btn_regular',
                    text: 3
                }, 
                {
                    className: 'btn_regular',
                    text: '+'
                },
                {
                    className: 'btn_clear',
                    text: 'AC'
                }, 
                {
                    className: 'btn_regular',
                    text: 0
                }, 
                {
                    className: 'btn_regular',
                    text: '.'
                }, 
                {
                    className: 'btn_regular',
                    text: '='
                }
            ]
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