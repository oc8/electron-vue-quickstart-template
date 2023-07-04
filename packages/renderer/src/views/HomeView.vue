<template>
	<div>
		<input v-model="text">
		<button @click="log()">Log</button>
		<div>

		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
var text = ref('');
function log() {
	console.log(text.value)
	router.push('/reader')
}
</script>

<style>

</style>
