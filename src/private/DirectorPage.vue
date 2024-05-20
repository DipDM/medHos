<template>
  <section>
    <div class="max-w-full max-h-full lg:flex  justify-center items-center m-3 my-0 bg-slate-50">
      <div>
        <img src="/public/assets/gallery/hospitalp7.jpeg" alt="dr Sudhir"
          class="lg:max-w-xl lg:max-h-xl shadow-lg rounded-md">
      </div>
      <div class="flex flex-col justify-start ">
        <h2 class="text-3xl lg:text-6xl font-bold text-center">Our <span class="text-blue-700 ">Director</span></h2>
        <p class="lg:text-2xl font-semibold text-center py-5">Welcome to our hospital! It is my honor to lead a
          dedicated
          team
          committed to providing exceptional healthcare services. Our focus is on patient-centered care, innovation, and
          community well-being.</p>
      </div>
    </div>
    <div class="max-w-full max-h-full lg:flex justify-center items-center m-3 my-0 bg-slate-100">
      <div>
        <p class="lg:text-2xl font-semibold text-center">I am Dr. Sudhir Maheshkar, and I bring a wealth of experience
          and
          a passion for excellence in healthcare. With over 7 years in the medical field, I have been instrumental in
          driving our hospital's mission and vision.</p>
      </div>
      <div class=" ">
        <img src="/public/assets/gallery/drsudhir.jpeg" alt="" class="lg:max-w-sm lg:max-h-sm shadow-lg rounded-md">
        <span class=" text-center pl-24 font-semibold">Dr. Sudhir Maheshkar</span>
      </div>
    </div>
    <div class="max-w-full max-h-full lg:flex  justify-center items-center m-3 my-0 bg-slate-200">
      <div>
        <img src="/public/assets/gallery/hospitalp1.jpeg" alt="dr Sudhir"
          class="lg:max-w-xl lg:max-h-xl shadow-lg rounded-md">

      </div>
      <div class="flex flex-col justify-start ">
        <h2 class="text-3xl lg:text-6xl font-bold text-center">Vision &<span class="text-blue-700 "> Mission </span>
        </h2>
        <p class="lg:text-2xl font-semibold text-center py-5">Under my leadership, we strive to offer compassionate,
          cutting-edge medical care.
          Our mission is to enhance the health and lives of our patients through comprehensive and personalized
          treatment plans.</p>
      </div>
    </div>
    <div class="max-w-full max-h-full lg:flex  justify-center items-center m-3 my-0 bg-slate-300">
      <div>
        <h2 class="text-3xl lg:text-6xl font-bold text-center">Our <span class="text-blue-700"> Commitment </span></h2>
        <p class="lg:text-2xl font-semibold text-center py-5">We are dedicated to maintaining the highest standards of
          medical care.
          I ensure that our team remains at the forefront of medical advancements and patient safety protocols.</p>
      </div>
      <div>
        <img src="/public/assets/gallery/hospitalp11.jpeg" alt="commitment"
          class="lg:max-w-xl lg:max-h-xl shadow-lg rounded-md">
      </div>
    </div>
  </section>

  <ServicesBunch />

</template>

<script setup>
import ServicesBunch from './services/ServicesBunch.vue';
</script>