<template>
  <header class="sticky top-0 bg-white z-50">
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


<!-- refresh page -->
<!-- <script>
export default{
  watch: [
    handler(window.scrollTo(0,0)),
  ]
}
</script> -->

<style scoped></style>
