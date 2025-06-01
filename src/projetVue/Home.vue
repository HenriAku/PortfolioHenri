<script setup>
import NavBar from '@/components/NavBar.vue'
import Header from '@/components/Header.vue'
import Apropo from '@/components/Apropo.vue'
import Parcour from '@/components/Parcour.vue'
import Portfolio from '@/components/Portfolio.vue'
import Bandeau from '@/components/Bandeau.vue'
import Footer from '@/components/Footer.vue'	
import Contact from '@/components/Contact.vue'
</script>

<template>
	<NavBar/>
	<Header></Header>
	<div id="presentation"><Apropo/></div>
	<div id="parcours"><Parcour/></div>
	<div id="portfolio"><Portfolio/></div>
	<div id="competence"><Bandeau/></div>
	<div id="contact"><Contact/></div>
	<Footer></Footer>
</template>