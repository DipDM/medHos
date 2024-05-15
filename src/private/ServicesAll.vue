<template>
  <div class="all-depsec-main">
    <h1 class="all-dephead">All Departments</h1>
    <div class="all-depdiv">
      <a href="" v-for="(service,index) in services" :key="index" class="quick-box">{{ service.name }}</a>
      
    </div>
    <a href="" class="text-4xl">{{ Servicefitft }}</a>
    <!-- <img :src="services[1].imagePath" alt="asdasd"> -->
  </div>
  <div class="cont-serv ">
    <div v-for="(service,index) in services" :key="index" class="grid  text-wrap  ml-3 rounded-md m-1 ">
      
      <img class="h-20 w-20" :src="service.imagePath" :alt="service.name">
      <h4 class="text-left font-semibold uppercase">{{ service.name}}</h4>
      <p class="w-52 h-40 text-wrap text-sm "> {{ service.description }}</p>
      
    </div>

  </div>
  <!-- <div>
    <h2>Our Services</h2>
    <ul class=" grid items-center justify-center">
      <li v-for="(service, index) in services" :key="index">
        <h3 class="font-bold">{{ service.name }}</h3>
        <p class="text-sm">{{ service.description }}</p>
      </li>
    </ul>
  </div> -->
</template>

<script>
import { services } from '../private/ServicesList.js';

export default {
  data() {
    return {
      services: services,    //exporting all data at once
      Servicefitft:'',       // For making individual data output from list

    };
  },
  created() {
    this.Servicefitft = services[1].imagePath
  },
  
};
</script>