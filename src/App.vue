<template>
  <div id="app" :style="`margin-left: -${marginLeft}px; margin-top: -${marginTop}px; transform-origin: right bottom ;transform: scale(${scale});`">
    <div>
      <Game/>
    </div>
  </div>
</template>

<script>
import Game from './components/Game.vue'

export default {
  name: 'App',
  components: {
    Game
  },
  data () {
    return {
      scale: 1,
      marginLeft: 0,
      marginTop: 0
    }
  },
  mounted () {
    let width = document.documentElement.clientWidth
    let height = document.documentElement.clientHeight
    let scale = 1
    if (width < 500 || height < 780) {
      scale = width / 500
      if (height < 780 * scale) {
        scale = height / 780
      }
      this.scale = scale
      this.marginTop = 780 - 780 * scale
      this.marginLeft = 500 - 500 * scale
    }
  }
}
</script>

<style>
body{
  margin: 0px;
  background-color: #F9F3E7;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
