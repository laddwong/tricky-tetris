<template>
	<div @click="nextBrick">
		<Playground @landing="nextBrick" :newBrickType="newBrickType"/>
		<GameInfo/>
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
				newBrickType:''
			}
		},
		methods: {
			nextBrick () {
				this.newBrickType = randomType()
			}
		}
	}
</script>

<style scoped>
	
</style>