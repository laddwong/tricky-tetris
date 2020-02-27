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
    if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
      let width = document.documentElement.clientWidth
      let height = document.documentElement.clientHeight
      let scale = width / 500
      if (height < 810 * scale) {
        this.scale = height / (scale * 810)
        this.marginTop = 810 * scale -height
        this.marginLeft = width * (1 - this.scale)
      }
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
