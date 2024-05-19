<template>
    <div class="inline-grid  bg-cyan-300">
        <div v-if="article">
            <h1 class="bg-slate-500 text-2xl font-bold">Article :<span class="text-blue-700">{{ article.title}}</span></h1>
            <span>date : {{ article.publish_date }}</span>
            <img :src="article.image_link" :alt="article.title">
            <div v-for="ct in article.content" :key="ct">
                <h4>{{ ct.heading }}</h4>
                <img :src="ct.ct_imglink" alt="">
                <div v-for="paragraph in ct.ct_para" :key="paragraph">
                    <p>{{ paragraph.ct_para_list }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { articleslist } from './articlesList.js';

export default {
    data() {
        return {
            article: null,
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
            this.article = articleslist.find(article => article.title.toLowerCase() === name.toLowerCase());
            window.scrollTo(0, 0);

        }
    }
};

</script>