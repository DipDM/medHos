<template>


    <section>
        <div class="absolute">
            <ol
                class="text-sm p-1 m-3 pl-3 text-gray-700 pr-7 gap-1 shadow-2xl rounded-sm bg-gradient-to-br from-blue-500 to-slate-300 inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center shadow-2xl">
                    <router-link to="/"><i class="fa-solid fa-house"></i></router-link>
                </li>
                <li class="inline-flex items-center">
                    |
                </li>
                <li class="inline-flex items-center font-semibold">Article</li>
                <li class="inline-flex items-center">
                    |
                </li>
                <li class="inline-flex items-center font-semibold">{{ article.title }}</li>
            </ol>
        </div>
    </section>

    <div class="flex flex-col max-w-4xl mx-auto m-3 p-3">
        <div v-if="article" class="flex flex-col items-center justify-center w-full m-3 p-3">
            <h1 class="text-2xl lg:text-3xl font-bold text-center text-blue-950">{{ article.title }}
            </h1>
            
           <div class="p-3">
            <img :src="article.image_link" :alt="article.title" class="rounded-md ">
            <span class="text-sm">date : {{ article.publish_date }}</span>
           </div>
            
            <div v-for="ct in article.content" :key="ct">
                <h4 class="lg:text-2xl  text-xl font-bold" >{{ ct.ct_heading }}</h4>
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