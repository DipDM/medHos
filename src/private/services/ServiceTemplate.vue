<template>
<section>
        <div class="absolute" >
            <ol class="text-sm p-1 m-3 pl-3 text-gray-700 pr-7 gap-1 shadow-2xl rounded-sm bg-gradient-to-br from-blue-500 to-slate-300 inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center shadow-2xl">
                    <router-link to="/"><i class="fa-solid fa-house"></i></router-link>
                </li>
                <li class="inline-flex items-center">
                    |
                </li>
                <li class="inline-flex items-center font-semibold">Service</li>
                <li class="inline-flex items-center">
                    |
                </li>
                <li class="inline-flex items-center font-semibold">{{ service.department_name }}</li>
            </ol>
        </div>
    </section>


    <div class="m-3 px-3 border rounded-md ">    
        <div v-if="service" class="flex flex-col items-center justify-center mx-auto max-w-6xl ">
            <h1 class="md:text-4xl text-3xl font-bold pt-9">Department Of <span class="text-blue-700">{{ service.department_name}}</span></h1>
            <div class="flex flex-shrink-0 pb-10">
                <img class="max-h-20 max-w-36 " :src="service.imglink" :alt="service.department_name">
                <p class="text-gray-600 p-5">{{ service.department_detail }}</p>
            </div>
            <p class="text-gray-700 ">{{ service.details_para1 }}</p>
            <div class=" grid items-center justify-center  py-10">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 md:text-3xl">Meet our <span
                        class="text-blue-700">Experts</span>
                </h2>
                <p class="mt-6 text-lg leading-8 text-gray-600">Always the best is done for you
                </p>
            </div>
            <div v-for="kite in service.department_services" :key="kite">
                <div class="bg-white ">
                    <div class="mx-auto rounded-md shadow-xl border-l border-b border-r  grid max-w-7xl my-4 py-4 gap-x-8 gap-y-2 px-6 lg:px-8 xl:grid-cols-3">
                        <div class="max-w-2xl">
                            <h2 class="text-2xl font-bold tracking-tight text-blue-700">{{ kite.service_name
                                }}
                            </h2>
                            <p class="mt-6 text-lg leading-8 text-gray-600">They always caadfgre for you to be healthy
                            </p>
                        </div>
                        <ul role="list" class="grid gap-x-8 gap-y-2 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                            <div v-for="specialist in kite.doctors" :key="specialist">
                                <div class="flex items-center gap-x-6 bg-gray-300 rounded-md border-b border-blue-300 hover:bg-cyan-300">
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