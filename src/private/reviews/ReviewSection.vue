<template>
    <section class="bg-blue-100 rounded-sm m-3 p-2 md:p-3 ">
        <h1 class="text-center text:3xl md:text-4xl font-bold">
            People Thoughts For <span class="text-blue-800">Us</span>
        </h1>
        <div class="flex items-start justify-center m-4 gap-1">
            <i class="fa-solid fa-star text-yellow-500" v-for="n in 5" :key="n"></i>
            <p class="text-xs font-bold"> Ratings</p>
        </div>
        <div class="grid md:grid-cols-3 m-2 justify-center rounded-lg text-center md:mx-3 my-4 md:p-5 gap-2">
            <div v-for="(review, index) in reviews" :key="index">
                <div v-if="index <= 2" class="border bg-orange-200 rounded-lg text-blue-900">
                    <i class="fa-solid fa-quote-right"></i>
                    <div class="text-sm md:text-xl italic font-medium px-2">
                        <blockquote>{{ review.review_body }}</blockquote>
                    </div>
                    <div class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse p-3">
                        <div class="w-6 h-6 rounded-full bg-red-300">
                            <p>{{ review.user_name.charAt(0) }}</p>
                        </div>
                        <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500">
                            <cite class="pe-3 font-medium text-gray-900 ">{{ review.user_name }}</cite>
                            <cite class="ps-3 text-sm text-gray-500 ">comment from {{ review.review_platform }}</cite>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <router-link to="/reviews"><button
                    class="border-blue-950 bg-blue-600 p-2 rounded-lg text-white hover:bg-blue-700  ">Read More
                    Reviews</button></router-link>
        </div>
    </section>
</template>


<script>
import { reviews } from "./ReviewsList.js";


export default {
    data() {
        return {
            reviews: reviews,
        }
    }
};
</script>

<!-- as a setup is used -->
<script setup>
</script>