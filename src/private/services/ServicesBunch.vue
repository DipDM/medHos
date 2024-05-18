<template>
    <div class="all-depsec-main">
        <h1 class="all-dephead">All Departments</h1>
        <div class="all-depdiv">
            <button v-for="(department, index) in alldep" :key="index" class="quick-box">
                <router-link :to="'/service/' + department.department_name">
                    <h2 class="text-lg font-semibold">{{ department.department_name }}</h2>
                </router-link>
            </button>
        </div>
    </div>
</template>


<script>
import { departments } from './ServicesList.js';

export default {
    data() {
        return {
            alldep: departments,
        };
    },
};
</script>