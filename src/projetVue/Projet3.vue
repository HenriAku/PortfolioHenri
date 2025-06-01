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
	<ProjetTop titre="Inazuma Dle" 
				text="J'ai conçu ce projet avec l'aide de mon frère qui aime beaucoup Inazuma Eleven. On a eu l'idée de faire ce projet pour tester les connaissances sur l'univers Inazuma Eleven. Tous les jours les choses à trouver changent."
				url="../img/projet3/interface.png"/>

	<ProjetDroite titre="Les modes de jeux" 
				text="Nous avons conçu plusieurs modes de jeux. Pour tous, vous devez trouver une caractéristique de l'oeuvre grâce aux indices donnés. Exemple pour les joueurs, une fois rentrés les caractéristiques en couleur, s'ils sont valides ou pas."
				url="../img/projet3/jeux.png"/>

	<ProjetGauche titre="Utilisateur" 
				text="Pour ce projet, j'ai créé des comptes pour savoir quel mode a été fait pour pouvoir ajouter unestrike de score. Puis surtout pour pouvoir garder son compte où qu'on soit."
				url="../img/projet3/user.png"/>

  	<BandeauProjet :url="logos" />

	<LinkProjet text="sur mon github" url="https://github.com/HenriAku/InazumaDle"/>
	
	<Footer></Footer>
</template>