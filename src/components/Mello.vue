<template>
	<div
		class="mello"
		:style="allStyles"
	>
		mello, Rollup Vue!
	</div>
</template>

<script>
const styles = {
	'font-size': '16px'
};

export default {
	name: 'mello',
	data() {
		return {
			allStyles: {
				...styles,
				'font-weight': 'bold'
			}
		};
	}
};
</script>

<style scoped>
.mello {
	color: red;
	font-feature-settings: 'liga' 1;
}
</style>
