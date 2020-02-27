<template>
	<div class="game-container">
		<div class="banner" v-if="ifBanner">
			<button @click.once="startGame">Click to start</button>
		</div>
		<div class="title">
			<h1>—— Vue Tetris ——</h1>
		</div>
		<div class="play-and-info-container">
			<Playground @landing="nextBrick" :newBrickType="newBrickType"/>
			<GameInfo/>
		</div>
		<div class="controler-container">
			<Controler/>
		</div>
	</div>
</template>

<script>
	import Playground from './Playground'
	import GameInfo from './GameInfo'
	import Controler from './Controler'
	import { randomType } from '../util/index.js' 
	export default {
		name: 'Game',
		components: {
			Playground,
			GameInfo,
			Controler
		},
		data () {
			return {
				newBrickType:'',
				ifBanner: true
			}
		},
		methods: {
			nextBrick () {
				this.newBrickType = randomType()
			},
			startGame () {
				this.ifBanner = false
				this.newBrickType = randomType()
			}
		}
	}
</script>

<style scoped>
	.game-container {
		background-color: #E52521;
		position: relative;
		width: 500px;
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
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		border-top-left-radius: 20px;
	}
</style>