<template>

  <div class="cont-serv">
    <div v-for="(service, index) in services" :key="index" class="max-h-56 max-w-96 items-center hover:shadow-2xl text-wrap bg-slate-200 ml-3 p-1 rounded-md m-1 ">
      <router-link :to="'/service/' + service.name">
        <h2 class="text-lg font-semibold text-center">{{ service.name }}</h2>
      </router-link>
      <img class="max-h-20 max-w-36 " :src="service.imagePath" :alt="service.name">
      <p class="p-2 text-wrap text-sm "> {{ service.description }}</p>
    </div>
  </div>
</template>

<script>
import { services } from './ServicesList.js';

export default {
  data() {
    return {
      services: services,    //exporting all data at once
      // Servicefitft: '',       // For making individual data output from list

    };
  },
  // created() {
  //   this.Servicefitft = services[1].imagePath
  // },

};
</script>