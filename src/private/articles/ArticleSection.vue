<template>
    <section class="flex justify-between m-3 p-7 rounded-sm">
        <div class="flex justify-between items-center ">
            <img class="max-h-96 max-w-fit shadow-2xl rounded-lg  m-3" :src="articles.image_link" :alt="articles.title">
        </div>
        <div class="grid text-center font-semibold m-3 items-start h-1/2/2 w-1/2">
            <h3 class="text-4xl font-bold underline">
                {{ articles.title }}
            </h3>
            <p class="text-left">{{ articles.summary }}</p>
            <router-link to="/articles"><button class="border-blue-950 bg-blue-600 p-2 rounded-lg text-white hover:bg-blue-700  ">
                Read more...</button></router-link>
        </div>
    </section>
</template>


<script>
import { articleslist } from './articlesList.js';

export default {
    data() {
        return {
            articles: articleslist[0],
        }
    }
};

</script>