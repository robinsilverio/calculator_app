<template>
    <div class="calculator_screen_container">
      <div class="calculator_screen">{{this.result}}</div>
    </div>
</template>
<script>
export default {
    name: 'CalculatorScreen',
    props:{
        result: Number
    }
}
</script>
<style scoped>
.calculator_screen_container {
    padding: 10px;
    margin-top: 10px;
    border: 1px solid;
    border-radius: 5px;
    height: 50px;
}

.calculator_screen {
    height: 100%;
    background-color: rgb(75, 87, 71);
    color: #000;
    display: flex;
    justify-content: flex-end;
    font-size: 48px;
}
</style>