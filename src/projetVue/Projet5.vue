<script setup>
import NavBar        from '@/components/NavBar.vue'
import ProjetTop     from '@/components/ProjetTop.vue'
import ProjetDroite  from '@/components/ProjetDroite.vue'
import ProjetGauche  from '@/components/ProjetGauche.vue'
import BandeauProjet from '@/components/BandeauProjet.vue'
import LinkProjet    from '@/components/LinkProjet.vue'
import Footer        from '@/components/Footer.vue'


const logos = [
  	'../../img/twig.png',
	'../../img/css.png',
	'../../img/php.png',
	'../../img/js.png',
    '../../img/git.png',
	'../../img/figma.png'
]
</script>

<template>
	<NavBar/>
	<ProjetTop titre="Site du BDE" 
				text="Dans le cadre d'un projet d'étude avec un groupe de 4, nous devions créer un site web pour le BDE Informatique pour pouvoir partager leurs événements et leur boutique."
				url="../img/projet5/accueil.png"/>

	<ProjetDroite titre="Fonctionnalité" 
				text="Dans ce site, nous pouvons retrouver des actualités, les événements passés et futurs. Puis il y a une boutique avec un panier d'utilisateurs pour pouvoir acheter les articles en ligne."
				url="../img/projet5/panier.png"/>

	<ProjetGauche titre="Gestion du site" 
				text="Pour pouvoir continuer d'alimenter le site pour qu'il reste à jour, nous avons conçu un panel pour les admins permettant de gérer la création, suppression et modification. Puis, il permet de gérer les utilisateurs pour les adhésions et commandes."
				url="../img/projet5/admin.png"/>

  	<BandeauProjet :url="logos" />

	<LinkProjet text="Sur mon github" url="https://github.com/HenriAku/Site-BDE"/>
	
	<Footer></Footer>
</template>