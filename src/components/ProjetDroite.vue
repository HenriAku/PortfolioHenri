<template>
  	<div class="container-fluid mt-5 pt-5 pb-5 bg-blue-clair">
		<div class="row align-items-center">

			<div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
				<h2 class="text-white text-center pt-5 pt-md-0 pb-3">{{ titre }}</h2>
				<p class="fs-4 w-75 w-md-75 px-3 px-md-0 text-white">{{ text }}</p>
			</div>

			<div class="col-md-6 d-flex justify-content-center">
				<img
					:src="url"
					alt="Image de présentation du projet"
					class="border border-black border-2"
					style="width: 50%; max-width: 500px; height: auto; object-fit: cover;"
				/>
			</div>

		</div>
  	</div>
</template>

<script setup>
defineProps({
	titre: String,
	text: String,
	url: String
})
</script>
