<template>


  <!-- page identify -->
  <section class="flex justify-start items-center ">
    <div class="flex items-center">
      <a href="index.html"><span class="material-symbols-outlined"> Home </span></a>
      <span class="text-xl hidden ">Home</span>
    </div>
    <div> | </div>
    <span class="px-1"> About</span>
  </section>

  <section class="max-h-screen ">
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
  </section>



  <section class="m-3 p-3 bg-cyan-100 ">
    <div class="rounded-sm border flex justify-center ">
      <span class="text-3xl font-bold tracking-tight sm:text-4xl text-blue-900 ">Meet Our Team
      </span>
    </div>
    <div class="grid grid-cols-3">
      <div v-for="(department, index)  in departments" :key="index" class="p-2 m-2 bg-green-100 shadow-2xl border-b border-l rounded-lg border-gray-400">
        <div class=" grid grid-cols-2 p-2 m-2">
          <h2 class="text-2xl font-bold tracking-tight sm:text-3xl text-blue-900 ">{{ department.department_name }}</h2>
        </div>
        <div class="grid grid-cols-2">
          <div v-for="(service, index) in department.department_services" :key="index" class=" p-2">
          <div v-for="(doctor, index) in service.doctors" :key="index" >
            <span class="grid items-center mx-3 px-3 gap-x-6 bg-cyan-50 rounded-sm border-b border-blue-300 hover:bg-cyan-100">
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





</template>

<script setup>
import { departments } from '@/private/services/ServicesList';

</script>

<style></style>
