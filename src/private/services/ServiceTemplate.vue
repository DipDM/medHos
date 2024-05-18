<template>
    <div class="m-3 px-3 ">

        <div v-if="service">
            <h1 class="text-2xl font-bold">Department Of <span class="text-blue-700">{{ service.department_name
                    }}</span></h1>
            <p class="text-gray-600">{{ service.department_detail }}</p>
            <div class=" grid items-center justify-center ">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our <span
                        class="text-blue-700">Experts</span>
                </h2>
                <p class="mt-6 text-lg leading-8 text-gray-600">They always care for you to be healthy
                </p>
            </div>
            <div v-for="kite in service.department_services" :key="kite">
                <div class="bg-white sm:py-32">
                    <div class="mx-auto grid max-w-7xl my-4 py-4 gap-x-8 gap-y-6 px-6 lg:px-8 xl:grid-cols-3">
                        <div class="max-w-2xl">
                            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-blue-700">{{ kite.service_name }}
                            </h2>
                            <p class="mt-6 text-lg leading-8 text-gray-600">They always care for you to be healthy
                            </p>
                        </div>
                        <ul role="list" class="grid gap-x-8 gap-y-6 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                            <div v-for="specialist in kite.doctors" :key="specialist">
                                <div
                                    class="flex items-center gap-x-6 bg-gray-300 rounded-md border-b border-blue-300 hover:bg-cyan-300">
                                    <img class="h-16 w-16 rounded-full grayscale" :src="specialist.closeuplink"
                                        :alt="specialist.doctor_name">
                                    <div>
                                        <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                                            {{ specialist.doctor_name }}</h3>
                                        <ul class="text-sm font-semibold leading-6 text-indigo-600 flex ">
                                            <li v-for="lis in specialist.doctor_edu" :key="lis" class="px-1">{{ lis }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <ServicesBunch />

</template>


<script>
import { departments } from './ServicesList.js';

export default {
    data() {
        return {
            service: null,
        };
    },
    watch: {
        '$route.params.name': {
            immediate: true,
            handler(newName) {
                this.loadService(newName);
            }
        }
    },
    methods: {
        loadService(name) {
            this.service = departments.find(service => service.department_name.toLowerCase() === name.toLowerCase());
            window.scrollTo(0, 0);

        }
    }
};

</script>

<script setup>
import ServicesBunch from './ServicesBunch.vue';
</script>