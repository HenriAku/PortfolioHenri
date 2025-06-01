<template>
	<div class="text-center mt-5 mb-5">
		<h3 class="text-blue-fonce mb-5">Où le retrouver ?</h3>
		<a :href="url" target="_blank" class="link-underline-primary">{{ text }}</a>
	</div>
</template>

<script setup>
	defineProps({
		text: String,
		url: String
	})
</script>