<template>
    <div class="calculator_header">
      <div class="hema_logo">
        <span>HEMA</span>
      </div>
      <div class="solar_cells"></div>
    </div>
</template>
<script>
export default {
    name: 'Header',
    props : {}
}
</script>
<style scoped>
  .calculator_header {
    padding: 10px;
    height: 50px;
  }

  .calculator_header .hema_logo {
    width: 60px;
    background-color: #000;
    color: #FFF;
    padding: 20px 0;
    float: left;
  }
  
  .calculator_header .solar_cells {
    height: 40px;
    width: 150px;
    background-color: #162a2a;
    float: right;
    margin-top: 10px;
  }
</style>