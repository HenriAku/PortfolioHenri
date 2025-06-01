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
	'../../img/figma.png',
    '../../img/git.png'
]
</script>

<template>
	<NavBar/>
	<ProjetTop titre="QCM Builder" 
				text="QCM Builder est un projet fait avec un groupe de 5 étudiants pour un projet d'étude. Il a pour but de générer des questionnaires pour que les élèves s'auto-évaluent."
				url="../img/projet7/accueil.png"/>

	<ProjetDroite titre="Les ressources" 
				text="Les professeurs peuvent créer leurs ressources et les voir sur une interface, puis ils peuvent aussi créer des notions dans des ressources pour y placer leurs questions."
				url="../img/projet7/ressource.png"/>

	<ProjetGauche titre="Création de question" 
				text="Ils peuvent créer une question de du type de leur choix et la placer où ils le veulent. On peut y retrouver plusieurs paramètres comme une difficulté et un temps pour la question."
				url="../img/projet7/creeQuestion.png"/>

	<ProjetDroite titre="Question" 
				text="Une interface pour ajouter l'énoncé de la question puis les réponses vrai / faux. Il y a plusieurs boutons en plus comme l'ajout de réponses, des commentaires d'une question."
				url="../img/projet7/question.png"/>

  	<BandeauProjet :url="logos" />

	<LinkProjet text="Sur mon github" url="https://github.com/HenriAku/QCM-Builder"/>
	
	<Footer></Footer>
</template>