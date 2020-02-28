<template>
  <div id="app" :style="`margin-left: -${marginLeft}px; margin-top: -${marginTop}px; transform-origin: right bottom ;transform: scale(${scale});`">
    <div>
      <Game/>
    </div>
  </div>
</template>

<script>
import Game from './components/Game.vue'
import {isMobile} from './util/index.js'

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
    if (isMobile()) {
      let width = document.documentElement.clientWidth
      let height = document.documentElement.clientHeight
      let scale = width / 500
      if (height < 810 * scale) {
        this.scale = height / (scale * 810)
        this.marginTop = 810 * scale -height
        this.marginLeft = width * (1 - this.scale)
      }
      document.documentElement.addEventListener('touchend', function (e) {
        e.preventDefault()
        e.target.click()
      })
    }
  }
}
</script>

<style>
* {
  touch-action: manipulation;
  user-select: none;
}
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
