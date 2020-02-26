<template>
	<div class="game-container">
		<div class="banner" v-if="ifBanner">
			<button @click.once="startGame">Click to start</button>
		</div>
		<div class="title">
			<h1>—— Vue Tetris ——</h1>
		</div>
		<Playground @landing="nextBrick" :newBrickType="newBrickType"/>
		<GameInfo v-if="false"/>
	</div>
</template>

<script>
	import Playground from './Playground'
	import GameInfo from './GameInfo'
	import { randomType } from '../util/index.js' 
	export default {
		name: 'Game',
		components: {
			Playground,
			GameInfo
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
		height: 100%;
		margin: auto;
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
		top: 40%;
		left: 0;
		right: 0;
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
	.banner button:hover {
		text-stroke-width: 5px;
		text-stroke-color: #FBD000;
	}
</style>