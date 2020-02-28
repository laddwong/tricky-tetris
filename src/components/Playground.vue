<template>
  <div class="playground-container">
    <table>
      <tbody>
        <tr v-for="(row, index) in displayBoard" :key="index + 'row'">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex + 'cell'">
            <div :class="{active: cell, default: true}"></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { deepCopy, getMatrix, randomType } from '../util/index.js'
  import { SIZE_OF_BOARD } from '../util/sizeOfBoard.js'
  import { Tetriminos } from '../util/Tetriminos.js'
  export default {
    name: 'playground',
    props: ['gameSpeed'],
    data() {
      return {
        board: getMatrix({col: SIZE_OF_BOARD.col, row: SIZE_OF_BOARD.row}),
        newBrick: {},
        intervalObj: -1
      }
    },
    methods: {
      /*创建一个新砖块并下落*/
      createBrick () {
        this.newBrick = new Tetriminos({row: 1, col: 4}, randomType())
        this.intervalObj = setInterval(() => {
          this.fall()
        }, this.gameSpeed)
      },
      /*左右平移*/
      move (e) {
        let direction = e === 'ArrowLeft' ? -1 : 1
        let moveTo = deepCopy(this.newBrick.brick)
        for (let i = 0; i < moveTo.length; i++) {
          moveTo[i][1] += direction
        }
        if (this.check(moveTo)) {
          this.newBrick.brick = moveTo
        }
      },
      /*下落*/
      fall () {
        // 得到下落后的位置
        let moveTo = deepCopy(this.newBrick.brick)
        for (let i = 0; i < moveTo.length; i++) {
          moveTo[i][0]++
        }
        // 检查下落后的位置时候合规
        if (this.check(moveTo)) {
          // 合规则进行移动
          this.newBrick.brick = moveTo
        } else {
          // 不合规触发着陆并停止下落
          clearInterval(this.intervalObj)
          this.landing()
        }
      },
      /*旋转*/
      rotate () {
        // 非方形和直线的情况
        if (this.newBrick.type !== 'O' && this.newBrick.type !== 'I') {
          // 构建矩阵用于旋转
          let rotateMatrix = [[0,0,0], [0,0,0], [0,0,0]]
          // 获取中心点坐标偏移量
          let offsetX = this.newBrick.brick[0][0] - 1
          let offsetY = this.newBrick.brick[0][1] - 1
          // 代入矩阵
          this.newBrick.brick.forEach(brick => {
            rotateMatrix[brick[0] - offsetX][brick[1] - offsetY] = 1
          })
          // 矩阵顺时针90度旋转得到旋转后的砖块
          let rotateTo = []
          for (let i = 0; i < rotateMatrix.length; i++) {
            for (let j = 0; j < rotateMatrix[i].length; j++) {
              if (rotateMatrix[i][j] === 1) {
                if (i === 1 && j === 1) {
                  rotateTo.unshift([j + offsetX, rotateMatrix.length - i - 1 + offsetY])
                } else {
                  rotateTo.push([j + offsetX, rotateMatrix.length - i - 1 + offsetY])
                }
              }
            }
          }
          // 判断合规性
          if (this.check(rotateTo)) {
            this.newBrick.brick = rotateTo
          }
        }
        // 直线形
        if (this.newBrick.type === 'I') {
          let x = this.newBrick.brick[0][0]
          let y = this.newBrick.brick[0][1]
          let rotateTo = []
          // 判断目前状态
          if (this.newBrick.brick[0][0] === this.newBrick.brick[1][0]) {
            rotateTo = [[x, y], [x - 1, y], [x + 1, y], [x + 2, y]]
          } else {
            rotateTo = [[x, y], [x, y - 1], [x, y + 1], [x, y + 2]]
          }
          // 判断合规
          if (this.check(rotateTo)) {
            this.newBrick.brick = rotateTo
          }
        }
        // 方形不做处理
      },
      /*检测砖块变动后是否合规*/
      check (brick) {
        for (let i = 0; i < brick.length; i++) {
          let row = brick[i][0]
          let col = brick[i][1]
          if (!this.board[row] || this.board[row][col] !== 0) {
            return false
          }
        }
        return true
      },
      /*着陆并检查是否消除*/
      landing () {
        // 着陆
        for (let i = 0; i < this.newBrick.brick.length; i++) {
          let row = this.newBrick.brick[i][0]
          let col = this.newBrick.brick[i][1]
          this.$set(this.board[row], col, 1)
        }
        // 消除行
        let count = 0
        this.board.forEach((row, index) => {
          if (row.reduce((x,y) => { return x + y }) === SIZE_OF_BOARD.col) {
            count++
            this.board.splice(index, 1)
            this.board.unshift(new Array(SIZE_OF_BOARD.col).fill(0))
          }
        })
        // 判断game over
        if (this.board[0].indexOf(1) === -1) {
          this.$emit('landing', count)
        } else {
          this.$emit('gameOver')
        }
      },
      /*重新开始*/
      restart () {
        this.board = getMatrix({row: SIZE_OF_BOARD.row, col: SIZE_OF_BOARD.col})
      }
    },
    computed: {
      /* 在游戏画面中显示正在下落的砖块 */
      displayBoard () {
        let displayArr = deepCopy(this.board)
        if (this.newBrick.brick) {
          this.newBrick.brick.forEach(brick => {
            displayArr[brick[0]][brick[1]] = 1
          })
        }
        return displayArr
      }
    },
    /* 全局监听键盘事件，判断方向键触发相应函数 */
    mounted () {
      let that = this
      document.onkeydown = function (e) {
        if (e.code === 'Space') {
          that.rotate()
          return;
        }
        if (e.key.indexOf('Arrow') !== -1) {
          if (e.key === 'ArrowUp') {
            that.rotate()
            return;
          }
          if (e.key === 'ArrowDown') {
            that.fall()
            return;
          }
          else {
            that.move(e.key)
          }
        }
      }
    }
  }
</script>

<style scoped>
  .playground-container {
    background-color: #000;
    height: 500px;
    width: 300px;
    flex-shrink: 0;
    border: 5px solid #E6E6E6;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    height: 100%;
  }
  td {
    border: 1px inset #303133;
  }
  .default {
    display: block;
    background-color: black;
    height: 100%;
  }
  .active {
    background-color: #049CD8;
  }
</style>