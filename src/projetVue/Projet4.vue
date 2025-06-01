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
	'../../img/js.png',
    '../../img/git.png',
	'../../img/figma.png'
]
</script>

<template>
	<NavBar/>
	<ProjetTop titre="Site web d'Inazuma Dle" 
				text="J'ai conçu un site web pour pouvoir télécharger l'application Inazuma Dle. Il permet aussi de communiquer et teaser / expliquer le projet."
				url="../img/projet4/accueil.png"/>

	<ProjetDroite titre="Téléchargement" 
				text="L'utilité du site est d'installer l'application et de guider, car pour celui-ci il faut avoir Java. On peut aussi retrouver le Timer pour indiquer le temps restant avant le changement des caractéristiques."
				url="../img/projet4/timer.png"/>

	<ProjetGauche titre="Autre fonctionnalité" 
				text="J'ai ajouté à ce site une page pour nous contacter en cas de problème ou de question. Puis j'ai aussi une page pour donner son avis sur le projet."
				url="../img/projet4/contact.png"/>

  	<BandeauProjet :url="logos" />

	<LinkProjet text="Le site officiel" url="http://inazumadle.ovh"/>
	
	<Footer></Footer>
</template>