<template>
	<h2 class="display-5 text-center mt-5 pt-2" :class="color">{{ titre }}</h2>
</template>

<script setup>
defineProps({
	titre: String,
	color: String
})
</script>
