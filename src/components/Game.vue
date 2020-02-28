<template>
	<div class="game-container">
		<div class="banner" v-if="bannerText">
			<button @click.once="startGame">{{bannerText}}</button>
		</div>
		<div class="title">
			<h1>—— Vue Tetris ——</h1>
		</div>
		<div class="play-and-info-container">
			<Playground ref="playground" @landing="nextBrick" @gameOver="bannerText = 'Click to restart'" :gameSpeed="gameSpeed"/>
			<GameInfo :score="score" :count="count" :level="Math.floor((1000 - gameSpeed) / 100)" />
		</div>
		<div class="controler-container">
			<Controler @rotate="$refs.playground.rotate()" @fall="$refs.playground.fall()" @move="move" />
		</div>
	</div>
</template>

<script>
	import Playground from './Playground'
	import GameInfo from './GameInfo'
	import Controler from './Controler'
	export default {
		name: 'Game',
		components: {
			Playground,
			GameInfo,
			Controler
		},
		data () {
			return {
				gameSpeed: 900,
				bannerText: 'Click to start',
				score: 0,
				count: 0
			}
		},
		methods: {
			nextBrick (count) {
				this.count += count
				this.gameSpeed -= count * 10
				this.score += count * (count + 9)
				this.$refs.playground.createBrick()
			},
			startGame () {
				if (this.bannerText === 'Click to restart') {
					this.$refs.playground.restart()
				}
				this.bannerText = ''
				this.$refs.playground.createBrick()
			},
			move (direction) {
				this.$refs.playground.move(direction)
			}
		}
	}
</script>

<style scoped>
	.game-container {
		background-color: #E52521;
		position: relative;
		width: 500px;
		padding-bottom: 20px;
		margin: auto;
		border-radius: 20px;
	}
	.title h1 {
		line-height: 50px;
		text-align: center;
		margin: 0px;
		color: #FBD000;
		font-style: oblique;
	}
	.banner {
		position: absolute;
		top: 274px;
		left: 30px;
		right: 150px;
		text-align: center;
	}
	.banner button {
		font-size: 40px;
		color: #FFF;
		font-weight: bold;
		background: none;
		border: none;
		white-space: nowrap;
		font-style: oblique;
		cursor: pointer;
	}
	.play-and-info-container {
		padding: 0px 30px;
		display: flex;
		overflow: hidden;
	}
	.controler-container {
		background-color: #DBC789;
		height: 200px;
		margin: 0px 30px;
		padding-bottom: 10px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		border-top-left-radius: 20px;
	}
</style>