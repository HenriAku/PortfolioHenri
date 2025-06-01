<script setup>
import NavBar        from '@/components/NavBar.vue'
import ProjetTop     from '@/components/ProjetTop.vue'
import ProjetDroite  from '@/components/ProjetDroite.vue'
import ProjetGauche  from '@/components/ProjetGauche.vue'
import BandeauProjet from '@/components/BandeauProjet.vue'
import LinkProjet    from '@/components/LinkProjet.vue'
import Footer        from '@/components/Footer.vue'


const logos = [
  	'../../img/html.png',
	'../../img/css.png',
    '../../img/git.png'
]
</script>

<template>
	<NavBar/>
	<ProjetTop titre="Site de Ichiraku" 
				text="Ce projet est mon premier site web pour essayer le développement et m'amuser."
				url="../img/projet6/accueil.png"/>

	<ProjetDroite titre="Découverte" 
				text="J'ai fait un site web pour m'amuser donc j'ai décidé de faire un site vitrine pour un restaurant, afficher des photos et des informations pour donner envie aux personnes qui viennent sur le site."
				url="../img/projet6/plus.png"/>

	<ProjetGauche titre="Galerie photo" 
				text="Dans celui-ci j'ai créé une galerie de photos pour tester le responsive."
				url="../img/projet6/photo.png"/>

  	<BandeauProjet :url="logos" />

	<LinkProjet text="Sur mon github" url="https://henriaku.github.io/RESTAURANT/photo.html"/>
	
	<Footer></Footer>
</template>