<template>
    <div class="calculator_main">
        <div class="calculator_buttons">
            <button 
                v-for="button in buttons.slice(0, 20)" 
                v-on:click="pressButton($event)" 
                :class="button.className" 
                :key="button.text" 
                :value="button.text">{{ button.text }}</button>
            <div class="last_row_buttons">
                <button 
                    v-for="button in buttons.slice(20)" 
                    v-on:click="pressButton($event)" 
                    :class="button.className" 
                    :key="button.text" 
                    :value="button.text">{{ button.text }}</button>
            </div>
        </div>
    </div>
</template>
<script>
import { buttonData } from "../data/buttonData.js";
import store from "../vuex/store.js"

export default {
    name: 'CalculatorButtons',
    store,
    data() {
        return {
            buttons: buttonData
        }
    },
    methods: {
        pressButton(e) {
            e.preventDefault();

            let objectFunctions = {
                'btn_regular numeric' : function () {
                    store.dispatch('addNumberToNumberList', e.target.value);
                },
                'btn_clear': function () {
                    store.dispatch('clearResult')                    
                },
                'btn_off': function () {
                    store.dispatch('toggleCalculatorStatus', true);
                },
                'btn_clear btn_on': function () {
                    if (this.$store.getters.obtainResult.isEmpty) {
                        store.dispatch('clearResult');
                    } else {
                        store.dispatch('toggleCalculatorStatus', false)
                    }    
                }
            };

            objectFunctions[e.target.__vnode.props.class]();

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