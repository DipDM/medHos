<template>
    <div class="m-3 px-3 ">

        <div v-if="service">
            <h1 class="text-2xl font-bold">Department Of <span class="text-blue-700">{{ service.name }}</span></h1>
            <p class="text-gray-600">{{ service.description }}</p>
        </div>




        <a href="" class="text-4xl">{{ Servicefitft }}</a>
        <!-- <img :src="services[1].imagePath" alt="asdasd"> -->
    </div>


    <!-- doctorname -->
    <div>
        <div class="bg-white py-24 sm:py-32">
            <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div class="max-w-2xl">
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our <span
                            class="text-blue-700">Experts</span>
                    </h2>
                    <p class="mt-6 text-lg leading-8 text-gray-600">They always care for you to be healthy
                    </p>
                </div>
                <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    <li>
                        <div class="flex items-center gap-x-6">
                            <img class="h-16 w-16 rounded-full"
                                src="../resources/image/Re_ Requirement Gathering For Hospital Website/drsudhir.jpeg"
                                alt="">
                            <div>
                                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Dr.
                                    Sudhir Meshram</h3>
                                <p class="text-sm font-semibold leading-6 text-indigo-600">Director</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center gap-x-6">
                            <img class="h-16 w-16 rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="">
                            <div>
                                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                                    Leslie
                                    Alexander</h3>
                                <p class="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center gap-x-6">
                            <img class="h-16 w-16 rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="">
                            <div>
                                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                                    Leslie
                                    Alexander</h3>
                                <p class="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <ServicesBunch />

</template>


<script>
import { services } from './ServicesList.js';

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
            this.service = services.find(service => service.name.toLowerCase() === name.toLowerCase());
            window.scrollTo(0, 0);
        
        }
    }
    // created() {
    //     const serviceName = this.$route.params.name;
    //     this.service = services.find(service => service.name === serviceName);
    // }
};

</script>

<script setup>
import ServicesBunch from './ServicesBunch.vue';
</script>