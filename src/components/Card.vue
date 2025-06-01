<template>
  <div class="card bg-blue-fonce" style="width: 18rem;">
    <div class="p-3">
      <img :src="urlImg" class="card-img-top border border-blue-clair border-2" alt="Image de présentation du projet">
    </div>
    <div class="card-body">
      <h5 class="card-title text-white fs-2 text-center"><strong>{{ titre }}</strong></h5>
      <p class="card-text text-white fs-5 text-center"><strong>{{ date }}</strong></p>
    </div>
    <!-- 🔁 Nouveau lien interne avec Vue Router -->
    <router-link
      :to="url"
      class="link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover ps-2 pb-2"
    >
      <strong>Voir plus -></strong>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  titre: String,
  date: String,
  url: String,
  urlImg: String
})
</script>
