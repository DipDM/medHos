<template>
    <section class="grid grid-cols-3 m-3 bg-blue-100 justify-center rounded-lg text-center mx-3 my-4 py-5">
        
        <div v-for="(review, index) in reviews" :key="index" class="border bg-green-300 rounded-lg text-blue-900 m-2">
            <div v-if="index <= 5">
                <i class="fa-solid fa-quote-right"></i>
                <div class="text-sm md:text-xl italic font-medium">
                    <blockquote>{{ review.review_body }}</blockquote>
                </div>
                <div class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse p-3">
                    <div class="w-6 h-6 rounded-full bg-green-300">
                        <p>{{ review.user_name.charAt(0) }}</p>
                    </div>
                    <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500">
                        <cite class="pe-3 font-medium text-gray-900 ">{{ review.user_name }}</cite>
                        <cite class="ps-3 text-sm text-gray-500 ">comment from googlemaps</cite>
                    </div>
                </div>
            </div>
        </div>


    </section>

</template>
<script>
import { reviews } from './ReviewsList.js';

export default {
    data() {
        return {
            reviews: reviews,
        }
    }
};
</script>