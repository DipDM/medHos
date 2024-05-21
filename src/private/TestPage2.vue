<template>
    <div class="w-screen h-screen bg-lime-500">
        
    </div>
    <div v-if="service">
    <h1 class="text-2xl font-bold">{{ service.name }}</h1>
    <p class="text-gray-600">{{ service.description }}</p>
  </div>
</template>

<script>
import { test } from '../private/testPage.js';

export default{
    data(){
        return{
            service:null
        };
    },
    created(){
        const serviceName =this.$route.params.name;
        this.service = test.find(service => service.name === serviceName);

    }
};
</script>