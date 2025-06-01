<script setup>
import Titre from './Titre.vue'
import Card from './Card.vue'

const cards = [
	{
		titre: 'List Anime',
		date: '2024',
		url: '/projet1',
		urlImg: new URL('@/assets/img/projet1/listAnime.png', import.meta.url).href
	},
	{
		titre: 'PlayList',
		date: '2024',
		url: '/projet2',
		urlImg: new URL('@/assets/img/projet2/interface.png', import.meta.url).href
	},
	{
		titre: 'Inazuma Dle',
		date: '2024 - 2025',
		url: '/projet3',
		urlImg: new URL('@/assets/img/projet3/interface.png', import.meta.url).href

	},
	{
		titre: 'Inazuma Dle site web',
		date: '2025',
		url: '/projet3',
		urlImg: new URL('@/assets/img/projet4/accueil.png', import.meta.url).href
	},
	{
		titre: 'Site du BDE',
		date: '2025',
		url: '/projet5',
		urlImg: new URL('@/assets/img/projet5/accueil.png', import.meta.url).href
	},
	{
		titre: 'Site de Ichraku',
		date: '2023',
		url: '/projet6',
		urlImg: new URL('@/assets/img/projet6/accueil.png', import.meta.url).href
	},
	{
		titre: 'QCM Builder',
		date: '2024',
		url: '/projet7',
		urlImg: new URL('@/assets/img/projet7/accueil.png', import.meta.url).href
	},
	{
		titre: 'Site Salamander Esport',
		date: '2025',
		url: '/projet8',
		urlImg: new URL('@/assets/img/projet8/accueil.png', import.meta.url).href
	}
]
</script>

<template>
	<div class="bg-blue-clair">
		<Titre titre="Portfolio" color="text-white" class="pt-5"/>
	
		<div class="container mt-5">
			<div class="row g-4 justify-content-center">
				<Card
					v-for="(card, index) in cards"
					:key="index"
					class="col-12 col-md-6 col-lg-4 d-flex justify-content-center m-5"
					:titre="card.titre"
					:date="card.date"
					:url="card.url"
					:urlImg="card.urlImg"
				/>
			</div>
		</div>
	</div>
</template>
