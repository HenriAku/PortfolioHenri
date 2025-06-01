<script setup>
import Titre from './Titre.vue'
</script>

<template>
	<Titre titre="À propo de moi" color="text-blue-semi-clair"/>
	<div class="w-100 z-3 d-flex justify-content-center mt-5 pt-4">
		<img src="/img/ShikamaruJ.jpg" 
		    alt="Ma photo de profil 2 presentation"
			class="rounded-pill border border-black border-2 ms-5 me-5"
			style="width: 12%; height: 12%; object-fit: cover;">
		
			<p class="ms-5 ps-5 fs-4 w-50 w-md-50">
				<Strong>Salut !</Strong> Je suis un développeur junior passionné par l'informatique et la conception de logiciels. <br>
				J'adore créer des solutions innovantes et relever des défis techniques. <br>
				En dehors du code, je suis un grand amateur de jeux vidéo, avec une passion particulière pour l'esport. <br>
				Supporter inconditionnel de la Karmine Corp, j'apprécie l'esprit de compétition et le travail d'équipe que l’on retrouve dans le monde de l'esport.
			</p>
	</div>
</template>
