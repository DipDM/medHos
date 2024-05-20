<template>
    <section
        class="relative w-full md:w-full h-[550px] overflow-hidden md:h-[400px] border rounded-lg shadow-lg md:p-3 bg-white">
        <div :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
            class="flex transition-transform duration-500 ease-in-out">
            <div v-for="(article, index) in articles" :key="index" class="w-screen flex-shrink-0">
                <div class="flex flex-col md:flex-row w-fit items-center">
                    <div class="w-20 h-20 md:h-[350px] md:w-[400px] m-3">
                        <img class="w-full h-full ml-2 object-cover rounded-lg shadow-md" :src="article.image_link"
                            :alt="article.title">
                    </div>
                    <article class="w-full md:w-[1000px] p-3 bg-white rounded-lg ">
                        <h3 class="text-xl md:text-4xl text-blue-800 text-center font-bold mb-2">
                            {{ article.title }}
                        </h3>
                        <p class="text-gray-700 text-center my-3 py-3 md:mx-9 px-4">{{ article.summary }}</p>
                        <div class="flex justify-center">
                            <router-link to="/article" class="bg-gradient-to-r font-semibold from-red-300 to-red-400 hover:from-red-400 hover:to-red-500 text-white rounded-lg px-4 py-2 shadow-lg transition-all duration-300">Read Full Article</router-link>
                        </div>
                    </article>
                </div>
            </div>
        </div>
        <button @click="prev"
            class="absolute left-0 bg-transparent top-1/2 transform -translate-y-1/2 md:bg-gray-300 text-gray-800 p-2 rounded-sm hover:md:bg-gray-400 hover:md:text-white transition-all ease-in-out duration-300 md:shadow-lg h-40">
            <span class="material-symbols-outlined">arrow_back_ios</span>
        </button >
        <button @click="next"
            class="absolute right-0 bg-transparent top-1/2 transform -translate-y-1/2 md:bg-gray-300 text-gray-800 p-2 rounded-sm hover:md:bg-gray-400 hover:md:text-white transition-all ease-in-out duration-300 md:shadow-lg h-40">
            <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <span v-for="(article, index) in articles" :key="index" @click="setCurrentIndex(index)"
                :class="{ 'bg-gray-800': index === currentIndex, 'bg-gray-300': index !== currentIndex }"
                class="block w-3 h-3 rounded-full cursor-pointer transition-colors duration-300">
            </span>
        </div>
    </section>
</template>


<script>
import { articleslist } from './articlesList.js';

export default {
    data() {
        return {
            articles: articleslist,
            currentIndex: 0,
            interval: null
        };
    },
    mounted() {
        this.startAutoSlide();
    },
    beforeUnmount() {
        clearInterval(this.interval);
    },
    methods: {
        prev() {
            this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.articles.length - 1;
        },
        next() {
            this.currentIndex = (this.currentIndex < this.articles.length - 1) ? this.currentIndex + 1 : 0;
        },
        setCurrentIndex(index) {
            this.currentIndex = index;
        },
        startAutoSlide() {
            this.interval = setInterval(this.next, 5000);
        }
    }
};

</script>