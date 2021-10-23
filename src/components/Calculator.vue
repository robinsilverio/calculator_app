<template>
  <div class="calculator">
    <Header />
    <CalculatorScreen />
    <CalculatorButtons />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import CalculatorScreen from '../components/CalculatorScreen.vue';
import CalculatorButtons from '../components/CalculatorButtons.vue';

export default {
  name: 'Calculator',
  components : {
    Header,
    CalculatorScreen,
    CalculatorButtons,
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .calculator {
    background: #eee;
    border-radius: 5px;
    width: 33.3%;
    margin: 0 auto;
    padding: 5px;
  }

</style>
