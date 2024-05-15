<template>
    
<h1 class="text-5xl text-center text-blue-950 font-semibold">Reviews</h1>
    <section class="grid grid-cols-3 m-3 bg-blue-100 justify-center text-center mx-3 my-4 py-5">
        <div v-for=" ( review, index ) in reviews " :key="index">
            <i class="fa-solid fa-quote-right"></i>
            <div class="text-sm md:text-xl italic font-medium"> 
                <blockquote>{{ review.para }}</blockquote>
            </div>
            <div class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                <div class="w-6 h-6 rounded-full bg-green-300">
                    <p>{{ review.name.charAt(0) }}</p>
                </div>
                <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500">
                    <cite class="pe-3 font-medium text-gray-900 ">Sanjit Mukherjee</cite>
                    <cite class="ps-3 text-sm text-gray-500 ">comment from googlemaps</cite>
                </div>
            </div>
        </div>
        
    </section>
</template>



<script>
import { reviews } from "../private/ReviewsList.js";

export default {
    data() {
        return {
            reviews: reviews,
        }
    }
};

</script>