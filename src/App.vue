<template>
  <header class="sticky top-0 bg-white ">
    <SiteHeader/>
  </header>
  <RouterView />
  
  <body>
    <RouterLink></RouterLink>
  </body>

  <footer>
    <SiteFooter/>
  </footer>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SiteFooter from './private/SiteFooter.vue'
import SiteHeader from './private/SiteHeader.vue'
</script>


<style scoped></style>
