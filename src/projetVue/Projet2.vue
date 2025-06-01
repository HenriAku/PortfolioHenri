<script setup>
import NavBar        from '@/components/NavBar.vue'
import ProjetTop     from '@/components/ProjetTop.vue'
import ProjetDroite  from '@/components/ProjetDroite.vue'
import ProjetGauche  from '@/components/ProjetGauche.vue'
import BandeauProjet from '@/components/BandeauProjet.vue'
import LinkProjet    from '@/components/LinkProjet.vue'
import Footer        from '@/components/Footer.vue'

const logos = [
  	'../../img/java.png',
    '../../img/git.png',
]
</script>

<template>
	<NavBar/>
	<ProjetTop titre="PlayList" 
				text="Ce projet avait pour but de m'entraîner à Java tout en utilisant d'autres outils. J'ai eu l'idée de faire une application pour écouter de la musique et avoir une playlist."
				url="../img/projet2/interface.png"/>

	<ProjetDroite titre="L'interface" 
				text="List Anime a une interface minimaliste avec une liste des musiques et des boutons pour ajouter, rechercher et la principale lancer la musique pause / play."
				url="../img/projet2/ajout.png"/>

	<ProjetGauche titre="Fonctionnalité" 
				text="On peut retrouver des fonctionnalités importantes comme l'ajout et l'écoute de musique. Puis on peut aussi liker les musiques et les rechercher si vous avez beaucoup d'oeuvres."
				url="../img/projet2/like.png"/>

  	<BandeauProjet :url="logos" />

	<LinkProjet text="sur mon github" url="https://github.com/HenriAku/MyPlayList"/>
	
	<Footer></Footer>
</template>