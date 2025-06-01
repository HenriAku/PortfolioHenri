<script setup>
import NavBar        from '@/components/NavBar.vue'
import ProjetTop     from '@/components/ProjetTop.vue'
import ProjetDroite  from '@/components/ProjetDroite.vue'
import ProjetGauche  from '@/components/ProjetGauche.vue'
import BandeauProjet from '@/components/BandeauProjet.vue'
import LinkProjet    from '@/components/LinkProjet.vue'
import Footer        from '@/components/Footer.vue'

const logos = [
  	'../../img/ts.png',
	'../../img/php.png',
	'../../img/bulma.png',
	'../../img/css.png',
	'../../img/html.png',
	'../../img/vue.png',
	'../../img/figma.png',
    '../../img/git.png'
]
</script>

<template>
	<NavBar/>
	<ProjetTop titre="Site Salamander Esport" 
				text="Ce projet se tient dans le cadre d'un stage pour ma 2ème année de BUT Informatique. J'ai conçu un site web en duo pour Salamnder Esport, une association d'esport."
				url="../img/projet8/accueil.png"/>

	<ProjetDroite titre="Utilisation de Vue" 
				text="J'ai appris à utiliser vue.js pour le front, il nous a servi à créer des composants pour les réutiliser. Puis on a plusieurs pages pour donner des informations sur l'association comme leur événement, joueur."
				url="../img/projet8/vue.png"/>

	<ProjetGauche titre="Les API" 
				text="Dans le site, on peut retrouver des tableaux avec les matchs des tournois avec le vainqueur. Puis j'ai conçu un classement des joueurs avec leur résultat au tournoi de Salamander Esport."
				url="../img/projet8/classement.png"/>

	<ProjetDroite titre="Gestion du site" 
				text="Pour que l'association actualise leur site avec de nouvelles informations, nous avons fait un panel Admin en back-end pour la création d'événements, d'ajout de sponsors, staff et joueurs."
				url="../img/projet8/admin.png"/>

  	<BandeauProjet :url="logos" />

	<LinkProjet text="Site officiel" url="https://salamanderesport.fr"/>
	
	<Footer></Footer>
</template>