<template>
  <div class="calculator">
    <Header />
    <CalculatorScreen :displayText="this.displayText" />
    <CalculatorButtons />
  </div>
</template>

<script>
import store from '../vuex/store.js'
import Header from '../components/Header.vue';
import CalculatorScreen from '../components/CalculatorScreen.vue';
import CalculatorButtons from '../components/CalculatorButtons.vue';

export default {
  name: 'Calculator',
  store,
  computed: {
    displayText(){
      return this.$store.getters.obtainDisplayText
    }
  },
  components : {
    Header,
    CalculatorScreen,
    CalculatorButtons,
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
