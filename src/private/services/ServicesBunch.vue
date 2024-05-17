<template>
    <div class="all-depsec-main">
        <h1 class="all-dephead">All Departments</h1>
        <div class="all-depdiv">
            <button v-for="(service, index) in alldep" :key="index" class="quick-box">
                <router-link :to="'/service/' + service.name">
                    <h2 class="text-lg font-semibold">{{ service.name }}</h2>
                </router-link>
            </button>
        </div>
    </div>
</template>


<script>
import { services } from './ServicesList.js';

export default {
    data() {
        return {
            alldep: services,
        };
    },
};
</script>