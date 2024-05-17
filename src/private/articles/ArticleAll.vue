<template>
    <section class="grid items-center border-l m-9 border-blue-500">
        <div v-for="(article, index) in articles" :key="index" class="flex items-top my-8">
            <div >
                <span class="p-3 text-blue-500">{{ article.publication_date}}</span>
            </div>
            <div class="w-60"></div>
            <!-- <img :src="article.image_link" :alt="article.title" class=""> -->
            <div class="w-9/12 h-52 text-wrap rounded-md bg-blue-50 text-left hover:bg-blue-100 p-3 border-b border-blue-500">
                <h3 class="text-xl font-bold pb-3">{{ article.title }}</h3>
                <p>{{ article.summary }}</p>
                <button class="text-blue-700 my-5">read article</button>
            </div>
            
        </div>
    </section>

</template>

<script>
import { articlelist } from './articledata.js';


export default {
    data() {
        return {
            articles: articlelist,
        }
    }
};
</script>
