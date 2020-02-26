<template>
  <div id="app">
    <Game/>
  </div>
</template>

<script>
import Game from './components/Game.vue'

export default {
  name: 'App',
  components: {
    Game
  }
}
</script>

<style>
html {
  height: 100%;
}
body{
  margin: 0px;
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  background-color: #F9F3E7;
}
</style>
