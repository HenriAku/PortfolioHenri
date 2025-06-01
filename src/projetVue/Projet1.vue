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
	<ProjetTop titre="List Anime" 
				text="J'ai fait ce projet pour pouvoir lister et noter les animes, mangas et manga que je regarde et lis. Il me permet de les garder dans un fichier json pour toujours les garder."
				url="../img/projet1/listAnime.png"/>

	<ProjetDroite titre="L'interface" 
				text="List Anime a une interface complète qui permet de différencier les listes, d'ajouter, supprimer, modifier et rechercher des oeuvres. On retrouve le nombre d'œuvres total dans la liste, le nombre d'épisodes total des œuvres et une moyenne des notes."
				url="../img/projet1/interface.png"/>

	<ProjetGauche titre="Fonctionnalité" 
				text="L'ajout d'oeuvres est la plus importante. Rentrez le nom, le type de l'oeuvre et la note que vous lui donnez, et List Anime l'ajoute à votre liste avec une image, le nombre d'épisodes de celui-ci."
				url="../img/projet1/ajoutAnime.png"/>

  	<BandeauProjet :url="logos" />

	<LinkProjet text="sur mon github" url="https://github.com/HenriAku/ListAnime"/>
	
	<Footer></Footer>
</template>