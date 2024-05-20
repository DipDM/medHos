<template>
  <section>
    <div class="absolute">
      <ol
        class="text-sm p-1 m-3 pl-3 text-blue-900 pr-7 gap-1 shadow-2xl rounded-sm bg-gradient-to-br from-blue-500 to-slate-300 inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li class="inline-flex items-center shadow-2xl">
          <router-link to="/"><i class="fa-solid fa-house"></i></router-link>
        </li>
        <li class="inline-flex items-center">
          |
        </li>
        <li class="inline-flex items-center font-semibold">Articles</li>
      </ol>
    </div>
  </section>
  <section>
    <div class="sm:flex items-center m-3 bg-blue-100">
      <div class="sm:w-1/2 p-10">
        <div class="pt-1">
          <img src="/public/assets/gallery/hospitalp11.jpeg" alt="Contact" class=" shadow-[0_0_15px_blue] rounded-sm">
        </div>
      </div>
      <div class="sm:w-1/2 p-5">
        <div class="flex flex-col  ">
          <h2 class="my-4 font-bold text-3xl  sm:text-4xl text-center"><span class="text-blue-700 ">Articles</span> Page
          </h2>
          <p class="text-black font-semibold text-center">
            Discover the latest advancements in health and wellness with our comprehensive articles. From tips on
            maintaining a balanced diet to insights on mental health practices, we bring you the knowledge to lead a
            healthier life. Stay informed and take charge of your well-being today.
          </p>
        </div>
      </div>

    </div>
  </section>
  <section class="flex flex-col justify-center items-center m-3 rounded-md">
    <div class="m-3 p-3 flex flex-col items-center text-center">
      <h3 class="lg:text-4xl text-2xl font-bold text-blue-700">Articles</h3>
      <p class="pt-3">Dedicated Page To Get Updated Information Articles</p>
    </div>
    <div class="flex flex-col max-w-5xl max-h-7xl items-center border-l m-9 mx-auto  border-blue-700 ">
      <div v-for="(article, index) in articles" :key="index" class="flex items-top justify-end">
        <div class="p-3">
          <span class="p-3 text-gray-800 text-xs lg:text-base font-semibold ">{{ article.publish_date }}</span>
        </div>
        <div class="max-w-3xl text-wrap rounded-md bg-blue-50 text-left hover:bg-gray-200 p-3 border-b border-blue-500">
          <h3 class="text-xl font-bold pb-3">{{ article.title }}</h3>
          <p>{{ article.summary }}....</p>
          <router-link :to="'/article/' + article.title">
            <button class="text-blue-700 my-5 hover:text-blue-950">Read article</button>
          </router-link>
        </div>

      </div>
    </div>
  </section>
  <ServicesBunch />
</template>

<script>
import { articleslist } from './articlesList.js';


export default {
  data() {
    return {
      articles: articleslist,
    }
  }
};
</script>

<script setup>
import ServicesBunch from '../services/ServicesBunch.vue';
</script>