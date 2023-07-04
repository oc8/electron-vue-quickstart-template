<template>
	<div>
		<input v-model="text">
		<p>{{ text }}</p>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const currentWord = ref('');
const speed = ref(5);
const words = ref([]);
const index = ref(0);
const text = router.currentRoute.value.params.text;
function nextWord() {
	index.value++;
	if (index.value >= words.value.length) {
		index.value = 0;
	}
	currentWord.value = words.value[index.value];
}
</script>

<style>

</style>
