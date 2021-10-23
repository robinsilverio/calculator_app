<template>
    <div class="calculator_screen_container">
      <div class="calculator_screen"></div>
    </div>
</template>
<script>
export default {
    name: 'CalculatorScreen'
}
</script>
<style scoped>
.calculator_screen_container {
    padding: 10px;
    margin-top: 10px;
    border: 1px solid;
    border-radius: 5px;
    height: 80px;
}

.calculator_screen {
    height: 100%;
    background-color: rgb(75, 87, 71);
}
</style>