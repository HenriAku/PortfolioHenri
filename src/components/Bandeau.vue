<template>
	<div class="marquee-container bg-blue-clair-opacity py-3 overflow-hidden">
	<div class="marquee d-flex align-items-center">
		<div
		class="marquee-item mx-4"
		v-for="(img, index) in repeatedImages"
		:key="index"
		>
			<img :src="img" alt="logo" class="logo-img" style="width: 150px; height: 150px; object-fit:contain;"/>
		</div>
	</div>
	</div>
</template>

<script setup>
const images = [
	new URL('/img/git.png', import.meta.url).href,
	new URL('/img/html.png', import.meta.url).href,
	new URL('/img/css.png', import.meta.url).href,
	new URL('/img/js.png', import.meta.url).href,
	new URL('/img/java.png', import.meta.url).href,
	new URL('/img/php.png', import.meta.url).href,
	new URL('/img/sql.png', import.meta.url).href,
	new URL('/img/twig.png', import.meta.url).href,
	new URL('/img/figma.png', import.meta.url).href,
	new URL('/img/bulma.png', import.meta.url).href,
	new URL('/img/vue.png', import.meta.url).href,
	new URL('/img/ts.png', import.meta.url).href,
	new URL('/img/bootstrap.png', import.meta.url).href
]

const repeatedImages = Array(6).fill(images).flat()
</script>