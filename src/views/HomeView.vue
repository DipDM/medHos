<template>
    <!-- Hero section -->
    <section class="relative bg-logo.jpg bg-center overflow-hidden -z-10 bg-no-repeat right-0 left-0 h-screen">
        <img src="/public/assets/gallery/hospitalp5.jpeg" alt="test"
            class="index-hero-img top-3 right-3 w-32 h-24 lg:w-56 lg:h-44 lg:right-6 lg:top-5 ">
        <img src="/public/assets/gallery/hospitalp11.jpeg" alt="test"
            class="index-hero-img top-9 left-6 w-40 h-32 lg:hidden">
        <img src="/public/assets/gallery/hospitalp11.jpeg" alt="test"
            class="index-hero-img hidden lg:block lg:w-56 lg:h-44 lg:top-5 lg:right-80 ">
        <img src="/public/assets/gallery/hospitalp1.jpeg" alt="test"
            class="index-hero-img bottom-72 left-4 w-40 h-32 lg:hidden">
        <img src="/public/assets/gallery/hospitalp1.jpeg" alt="test"
            class="index-hero-img  hidden lg:block lg:w-56 lg:h-44 lg:top-56 lg:right-96">
        <img src="/public/assets/gallery/hospitalp13.jpeg" alt="test"
            class="index-hero-img  w-32 h-24 right-11 top-32 lg:w-56 lg:h-44 lg:right-32 lg:top-56">
        <img src="/public/assets/gallery/hospitalp7.jpeg" alt="test"
            class="index-hero-img  w-32 h-40 right-6 bottom-60 lg:w-40 lg:h-52 lg:right-80 lg:bottom-24">
        <img src="/public/assets/gallery/hospitalp10.jpeg" alt="test"
            class="index-hero-img  w-48 h-36 right-32 bottom-20  lg:right-6 lg:w-56 lg:h-44 lg:bottom-24">
        <img src="/public/assets/logo.png"
            class="absolute scale-150 -z-10 -left-10 top-36 h-32 w-32 md:h-auto md: md:w-auto md:-left-3 md:top-64 ">
        <img src="/public/assets/logo.png"
            class="absolute -scale-150 -z-10 -right-10 top-96 h-32 w-32 overflow-hidden md:hidden">
        <div
            class="absolute mx-auto h-screen w-screen pl-4 pr-0 py-10 items-center justify-center sm:px-6 md:flex md:items-center md:pl-5 md:pr-0 md:-left-64 md:-top-28">
            <div class="max-w-xl text-center md:justify-start my-52 ltr:sm:text-left rtl:sm:text-right">
                <h1 class="font-extrabold text-sm md:text-3xl">
                    Welcome, Where Health is Prioritize
                    <strong class="block font-extrabold text-sm md:text-6xl text-blue-800"> Accensis Hosptials </strong>
                </h1>

                <p class="mt-4 max-w-lg sm:text-xl/relaxed text-sm md:text-2xl">
                    Nagpur's Leading Superspeaciality Hosptial & Research Center
                </p>

                <div class="mt-3 flex justify-center flex-wrap gap-4 text-center">
                    <button
                        class="block rounded bg-blue-600 px-6 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">Get
                        Started</button>
                </div>
            </div>
        </div>
    </section>


    <!-- Companies Feature Line -->
    <div id="features-line" class="container mt-0 lg:mt-4 ">
        <div class="border rounded-lg overflow-hidden flex justify-center p-4">
            <div id="line4" class="flex gap-8 p-6">
                <h3 class="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">Oncology &
                    Oncosurgery</h3>
                <span>•</span>
                <h3 class="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">Gynaecology
                </h3>
                <span>•</span>
                <h3 class="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">Our
                    Specialities</h3>
                <span>•</span>
                <h3 class="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">Maxillofacial
                </h3>
                <span>•</span>
                <h3 class="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">Neurosurgery
                </h3>
                <span>•</span>
                <h3 class="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">Pulmunology
                </h3>
                <span>•</span>
                <h3 class="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">General
                    Surgery</h3>
                <span>•</span>
                <h3 class="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">Urology &
                    UroSurgery</h3>
                <span>•</span>
                <h3 class="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">Ayurvedic</h3>
                <span>•</span>
            </div>
        </div>
    </div>

    <!-- reviews -->

    <section>
        <ReviewSection />
    </section>
    <ArticleSection />

</template>

<script setup>
import ReviewSection from '@/private/reviews/ReviewSection.vue';
import ArticleSection from '@/private/articles/ArticleSection.vue';

</script>