<template>
    <div class="all-depsec-main">
        <h1 class="all-dephead">All Departments</h1>
        <div class="all-depdiv">
            <a href="" v-for="(service, index) in fanta" :key="index" class="quick-box">{{ service.name }}</a>

        </div>
        <a href="" class="text-4xl">{{ Servicefitft }}</a>
        <!-- <img :src="test[1].imagePath" alt="asdasd"> -->
    </div>
    <div class="cont-serv ">
        <div v-for="service in fanta" :key="service.name" class="grid  text-wrap  ml-3 rounded-md m-1 ">

            <img class="h-20 w-20" :src="service.imagePath" :alt="service.name">
            <router-link :to="'/service/' + service.name">
                <h2 class="text-lg font-semibold">{{ service.name }}</h2>
            </router-link>
            <h4 class="text-left font-semibold uppercase">{{ service.name }}</h4>
            <p class="w-52 h-40 text-wrap text-sm "> {{ service.description }}</p>
            <p>{{ service.name.charAt(0) }}</p>

        </div>

    </div>
    <div>
        <p></p>
    </div>
    <div v-for="number in 3" :key="number">
        <p>sda</p>
    </div>
    <TestPage2 />
    <!-- <div>
      <h2>Our Services</h2>
      <ul class=" grid items-center justify-center">
        <li v-for="(service, index) in services" :key="index">
          <h3 class="font-bold">{{ service.name }}</h3>
          <p class="text-sm">{{ service.description }}</p>
        </li>
      </ul>
    </div> -->


    <a href="" class="text-4xl">{{ Servicefitft }}</a>
    <!-- <img :src="services[1].imagePath" alt="asdasd"> -->
    <div class="all-depsec-main">
        <h1 class="all-dephead">All Departments</h1>
        <div class="all-depdiv">
            <a href="" v-for="(service, index) in services" :key="index" class="quick-box">{{ service.name }}</a>

        </div>
    </div>
</template>

<script>
import { test } from '../private/testPage.js';


export default {
    data() {
        return {
            fanta: test,
            Servicefitft: '',
            services: [],

        };
    },
    created() {
        this.Servicefitft = test[1].imagePath;
    },
};
</script>

<script setup>import TestPage2 from './TestPage2.vue';</script>