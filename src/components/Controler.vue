<template>
	<div class="control-container">
		<!-- 方向键 -->
		<div class="cross-container">
			<table>
				<tr>
					<td></td>
					<td><button class="cross" @click="$emit('rotate')" @touchstart="$emit('rotate')"></button> </td>
					<td></td>
				</tr>
				<tr>
					<td><button class="cross" @click="$emit('move', 'ArrowLeft')"></button> </td>
					<td></td>
					<td><button class="cross" @click="$emit('move', 'ArrowRight')"></button> </td>
				</tr>
				<tr>
					<td></td>
					<td><button class="cross" @click="$emit('fall')"></button> </td>
					<td></td>
				</tr>
			</table>
		</div>
		<!-- 变换键 -->
		<div class="shift-button">
			<button @click="$emit('rotate')"></button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Controler'
	}
</script>

<style scoped>
	.control-container {
		display: flex;
	}
	.cross-container .cross {
		border: none;
		background-color: #000;
		width: 60px;
		height: 60px;
		border-radius: 50%;
	}
	.shift-button {
		margin: auto 100px;
	}
	.shift-button button {
		border: none;
		background-color: #000;
		width: 120px;
		height: 120px;
		border-radius: 50%;
	}
	button {
		box-shadow: 0 9px #999;
	}
	button:active {
		box-shadow: 0 5px #666;
		transform: translateY(4px);
	}
	button:focus {
		outline: none;
	}

</style>