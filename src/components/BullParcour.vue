<template>
  <div class="container mt-5 pt-4">
	<div class="row align-items-center text-center">

	  	<div class="col-12 col-md-4 mb-4 mb-md-0"></div>

	  	<div class="col-12 col-md-4 d-flex justify-content-center mb-4 mb-md-0">
			<p class="d-flex justify-content-center align-items-center 
				rounded-circle border border-blue-clair border-4 text-center"
				style="width: 170px; height: 170px; font-size: 1.25rem;">
				<strong>{{ titre }}</strong>
			</p>
	  	</div>

	  	<div class="col-12 col-md-4 d-flex align-items-center">
			<p class="fs-5 text-start">{{ text }}</p>
	  	</div>
	</div>
  </div>
</template>

<script setup>
	defineProps({
		titre: String,
		text: String
	})
</script>

