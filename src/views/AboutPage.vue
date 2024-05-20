<template>
  <!-- <section class="max-h-screen ">
    <div class="flex items-center justify-center  -space-x-2">
      <div
        class="relative z-0 flex h-60 w-24 shrink-0 select-none items-center justify-center rounded-lg bg-gray-100 text-sm font-bold uppercase text-gray-800 ring ring-white">
        <img class="h-full w-full rounded-lg object-cover object-center" src="/assets/gallery/hospitalp2.jpeg">
      </div>
      <div
        class="relative z-10 flex h-60 w-40 shrink-0 select-none items-center justify-center rounded-lg bg-gray-100 text-sm font-bold uppercase text-gray-800 ring ring-white">
        <img class="h-full w-full rounded-lg object-cover object-center" src="/assets/gallery/hospitalp10.jpeg">
      </div>
      <div
        class="relative z-20 flex h-60 w-56 shrink-0 select-none items-center justify-center rounded-lg bg-gray-100 text-sm font-bold uppercase text-gray-800 ring ring-white">
        <img class="h-full w-full rounded-lg object-cover object-center" src="/assets/gallery/hospitalp7.jpeg">
      </div>
      <div
        class="relative z-10 flex h-60 w-40 shrink-0 select-none items-center justify-center rounded-lg bg-gray-100 text-sm font-bold uppercase text-gray-800 ring ring-white">
        <img class="h-full w-full rounded-lg object-cover object-center" src="/assets/gallery/hospitalp1.jpeg">
      </div>
      <div
        class="relative z-0 flex h-60 w-24 shrink-0 select-none items-center justify-center rounded-lg bg-gray-100 text-sm font-bold uppercase text-gray-800 ring ring-white">
        <img class="h-full w-full rounded-lg object-cover object-center" src="/assets/gallery/hospitalp10.jpeg">
      </div>
    </div>
  </section> -->

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
        <li class="inline-flex items-center font-semibold">About</li>
      </ol>
    </div>
  </section>
  <section>
    <div class="sm:flex items-center m-3 bg-blue-100">
      <div class="sm:w-1/2 p-10">
        <div class="pt-1">
          <img src="/public/assets/gallery/hospitalp7.jpeg" alt="Contact" class=" shadow-[0_0_15px_blue] rounded-sm">
        </div>
      </div>
      
        <div class="flex flex-col  items-center justify-center max-w-4xl">
          <h2 class="my-4 font-bold text-3xl  lg:text-5xl text-center"><span class="text-blue-700 ">About</span> Page
          </h2>
          <p class="text-black font-semibold text-center pb-2">
            At Accencis, our commitment is to provide exceptional healthcare with compassion and respect.
            We strive to create a healing environment where patients receive personalized care tailored to their unique
            needs.
            Our dedicated team of medical professionals works around the clock to ensure the best possible outcomes for
            our patients.
          </p>
        </div>
      </div>
    
    <!-- <div class="absolute right-0 top-0 -scale-100 scale-150" >
      <img src="/public/assets/logo.png" alt="Accencis">
    </div> -->
  </section>

  <section class="m-3 p-3 bg-cyan-100 ">
    <div class="rounded-sm border flex justify-center ">
      <span class="text-3xl font-bold tracking-tight sm:text-4xl text-blue-900 ">Meet Our Team
      </span>
    </div>
    <div class="grid lg:grid-cols-3 grid-cols-1 ">
      <div v-for="(department, index)  in departments" :key="index"
        class="flex flex-col p-2 m-2 lg:bg-green-100 shadow-2xl border-b border-l rounded-lg border-gray-400">
        <h2 class="text-2xl font-bold tracking-tight lg:text-xl text-gray-600 lg:text-start text-center ">{{ department.department_name }}</h2>
        <div class="grid grid-cols-2">
          <div v-for="(service, index) in department.department_services" :key="index" class=" p-2">
            <div v-for="(doctor, index) in service.doctors" :key="index">
              <span class="grid  items-center mx-3 px-3 gap-x-6 bg-cyan-50 rounded-sm border-b border-blue-300 hover:bg-cyan-100">
                <h3 class=" text-sm font-semibold leading-7 tracking-tight text-gray-900">{{ doctor.doctor_name }}</h3>
                <ul class="text-sm font-semibold leading-6 text-indigo-600 flex">
                  <li v-for="lis in doctor.doctor_edu" :key="lis" class="px-1">{{ lis }}
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <ServicesBunch />


</template>

<script setup>
import { departments } from '@/private/services/ServicesList';
import ServicesBunch from '@/private/services/ServicesBunch.vue';

</script>

<style></style>
