<template>
  <div class="marquee-container bg-blue-clair-opacity py-3 overflow-hidden">
    <div class="marquee d-flex align-items-center">
      <div
        class="marquee-item mx-4"
        v-for="(img, index) in repeatedImages"
        :key="index"
      >
        <img
          :src="img"
          alt="logo"
          class="logo-img"
          style="width: 150px; height: 150px; object-fit: contain;"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  url: {
    type: Array,
    required: true
  }
})

const repeatedImages = Array(6).fill(props.url).flat()
</script>
