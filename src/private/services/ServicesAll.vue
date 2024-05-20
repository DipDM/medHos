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
        <li class="inline-flex items-center font-semibold" >Specialities</li>
      </ol>
    </div>
  </section>
  <section>
    <div class="sm:flex items-center m-3 bg-blue-100">
      <div class="sm:w-1/2 p-10">
        <div class="pt-1">
          <img src="/public/assets/gallery/hospitalp13.jpeg" alt="Contact" class=" shadow-[0_0_15px_blue] rounded-sm">
        </div>
      </div>
      <div class="sm:w-1/2 p-5">
        <div class="text">
          <span class="text-gray-500 border-b-2 border-indigo-600 uppercase"></span>
          <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">Our <span class="text-blue-700">Specialities</span>
          </h2>
          <p class="text-gray-700 font-semibold">
            At Accencis, we offer a comprehensive range of specialties, including cardiology, neurology, oncology, orthopedics, and pediatrics. Our expert team is dedicated to providing personalized care using the latest medical advancements to ensure the best outcomes for our patients.
          </p>
        </div>
      </div>

    </div>
  </section>
  <section class="flex flex-col items-center">
    <div class="flex flex-col items-center">
      <h2 class="text-4xl font-bold pt-4"><span class="text-blue-700"> Specialised</span> Treatments</h2>
      <p class=" m-9 px-9 break-words text-center font-semibold md:text-2xl">Our hospital offers specialized treatments tailored to each patient's unique needs. We utilize the latest medical advancements to ensure the highest quality of care.</p>
    </div>
    <div class="cont-serv">
      <div v-for="(department, index) in departments" :key="index"
        class="max-h-56 max-w-96 items-center hover:shadow-2xl text-wrap bg-cyan-50 md:bg-slate-200 ml-3 p-1 rounded-md m-1 ">
        <router-link :to="'/service/' + department.department_name">
          <h2 class="text-lg font-semibold text-center">{{ department.department_name }}</h2>
        </router-link>
        <div class="flex justify-center md:justify-start">
          <img class="max-h-20 max-w-36 " :src="department.imglink" :alt="department.department_name">
        </div>
        <p class="p-2 text-wrap text-sm "> {{ department.summary }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { departments } from './ServicesList.js';

export default {
  data() {
    return {
      departments: departments,    //exporting all data at once
      // Servicefitft: '',       // For making individual data output from list

    };
  },


};
</script>


// created() {
// this.Servicefitft = services[1].imagePath
// },