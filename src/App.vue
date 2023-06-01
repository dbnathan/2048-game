<template>
  <div id="app">
    <VueGame2048 />
  </div>
</template>

<script>
import VueGame2048 from './components/Game2048.vue';

export default {
  name: 'App',
  components: {
    VueGame2048
  }
}
</script>

<style>
/* Vous pouvez ajouter vos styles globaux ici */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.vue-game2048 .grid .cell {
  border: 1px solid #333;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  margin: 5px;
  display: inline-block;
}
</style>
