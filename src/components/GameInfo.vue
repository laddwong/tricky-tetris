<template>
	<div class="container">
		<p>得分</p>
		<p>{{score}}</p>
		<p>消除行</p>
		<p>{{count}}</p>
		<p>等级</p>
		<p>{{level}}</p>
	</div>
</template>

<script>
	export default {
		name: 'GameInfo',
		props: {
			score: Number,
			count: Number,
			level: Number
		}
	}
</script>

<style scoped>
	.container {
		height: 530px;
		flex-grow: 1;
		background-color: #DBC789;
		vertical-align: top;
		margin-left: 20px;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		text-align: center;
	}
</style>