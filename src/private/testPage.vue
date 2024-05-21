<template>







  <!-- <section>
    <div class="text-6xl item text-center">Contact</div>
  </section> -->



  <!-- <section>
    <div class="carousel-container relative w-full max-w-4xl mx-auto overflow-hidden">
      <div class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(article, index) in articles" :key="index" class="carousel-item w-full flex-shrink-0">
          <div>
            <img :src="article.image_link" :alt="article.title">
          </div>
          <article class="p-4 bg-white rounded-lg shadow-md">
            <h2 class="text-xl font-bold mb-2">{{ article.title }}</h2>
            <p class="text-gray-700">{{ article.summary }}</p>
          </article>
        </div>
      </div>
      <button @click="prev"
        class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700">
        <span class="material-symbols-outlined">
          arrow_back_ios
        </span>
      </button>
      <button @click="next"
        class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700">
        <span class="material-symbols-outlined">
          arrow_forward_ios
        </span>
      </button>
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <span v-for="(article, index) in articles" :key="index" @click="setCurrentIndex(index)"
          :class="{ 'bg-gray-800': index === currentIndex, 'bg-gray-300': index !== currentIndex }"
          class="block w-3 h-3 rounded-full cursor-pointer transition-colors duration-300"></span>
      </div>
    </div>
  </section> -->
  <!-- <div class="all-depsec-main">
        <h1 class="all-dephead">All Departments</h1>
        <div>
            <div v-for="spell in test" :key="spell.name">
                <p>{{ spell.name }}</p>
                <div v-for="(bee, index) in spell.members" :key="index">
                    <p>{{ bee.name }}</p>
                    <p>dasdfamdks</p>
                    <p>{{ bee.age }}</p>
                    <p>{{ bee.secretIdentity }}</p>
                    <ul class="flex">
                        <li v-for="power in bee.powers" :key="power">{{ power }}</li>
                    </ul>
                </div>
            </div>
        </div> -->
  <!-- 
        <div class="all-depdiv">
            <a href="" v-for="(service, index) in fanta" :key="index" class="quick-box">{{ service.name }}</a>

        </div>
        <a href="" class="text-4xl">{{ Servicefitft }}</a>
        <img :src="test[1].imagePath" alt="asdasd"> -->
  <!-- </div> -->
  <!-- <div class="cont-serv ">
        <div v-for="service in fanta" :key="service.name" class="grid  text-wrap  ml-3 rounded-md m-1 ">

            <img class="h-20 w-20" :src="service.imagePath" :alt="service.name">
            <router-link :to="'/service/' + service.name">
                <h2 class="text-lg font-semibold">{{ service.name }}</h2>
            </router-link>
            <h4 class="text-left font-semibold uppercase">{{ service.name }}</h4>
            <p class="w-52 h-40 text-wrap text-sm "> {{ service.description }}</p>
            <p>{{ service.name.charAt(0) }}</p>

        </div>

    </div>
    <div>
        <p></p>
    </div>
    <div v-for="number in 3" :key="number">
        <p>sda</p>
    </div> -->
  <TestPage2 />
  <!-- <div>
      <h2>Our Services</h2>
      <ul class=" grid items-center justify-center">
        <li v-for="(service, index) in services" :key="index">
          <h3 class="font-bold">{{ service.name }}</h3>
          <p class="text-sm">{{ service.description }}</p>
        </li>
      </ul>
    </div> -->

  <!-- 
    <a href="" class="text-4xl">{{ Servicefitft }}</a> -->
  <!-- <img :src="services[1].imagePath" alt="asdasd"> -->
  <!-- <div class="all-depsec-main">
        <h1 class="all-dephead">All Departments</h1>
        <div class="all-depdiv">
            <a href="" v-for="(service, index) in services" :key="index" class="quick-box">{{ service.name }}</a>

        </div>
    </div>
     -->

  <!-- doctorname -->
  <!-- <div>
        <div class="bg-white py-24 sm:py-32">
            <div class=" grid items-center justify-center ">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our <span
                        class="text-blue-700">Experts</span>
                </h2>
                <p class="mt-6 text-lg leading-8 text-gray-600">They always care for you to be healthy
                </p>
            </div>
            <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div class="max-w-2xl">
                    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-blue-700">{{ }}
                    </h2>
                    <p class="mt-6 text-lg leading-8 text-gray-600">They always care for you to be healthy
                    </p>
                </div>
                <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    <li>
                        <div class="flex items-center gap-x-6">
                            <img class="h-16 w-16 rounded-full"
                                src="../resources/image/Re_ Requirement Gathering For Hospital Website/drsudhir.jpeg"
                                alt="">
                            <div>
                                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Dr.
                                    Sudhir Meshram</h3>
                                <p class="text-sm font-semibold leading-6 text-indigo-600">Director</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center gap-x-6">
                            <img class="h-16 w-16 rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="">
                            <div>
                                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                                    Leslie
                                    Alexander</h3>
                                <p class="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center gap-x-6">
                            <img class="h-16 w-16 rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="">
                            <div>
                                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                                    Leslie
                                    Alexander</h3>
                                <p class="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div> -->

  <!-- <a href="" class="text-4xl">{{ Servicefitft }}</a> -->
  <!-- <img :src="services[1].imagePath" alt="asdasd"> -->

  // created() {
  // const serviceName = this.$route.params.name;
  // this.service = services.find(service => service.name === serviceName);
  // }
  <!-- All our Team -->
  <!-- <section
    class="grid lg:grid-cols-10 md:grid-cols-5 z-10 grid-cols-3 py-7 px-3 border-yellow-400 rounded-lg bg-blue-300 overflow-hidden lg:mx-5">
    <div class="sec-div peer/alldept group ">
      <span class="sec-heading peer/dipesh ">All Our Team
      </span>
    </div>

    <div class="sec-div peer/maxillo peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="sec-heading sec-img ">Maxillofacial, Microsurgery</span>
    </div>

    <div class="sec-div group peer-hover/maxillo:grayscale-0 peer-hover/maxillo:scale-125 ">
      <img class="sec-img" src="../resources/image/Re_ Requirement Gathering For Hospital Website/drsudhir.jpeg"
        alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100 grid peer-hover/maxillo:opacity-100 items-center justify-center">
        <h4>Dr. Sudhir Meshram</h4>
        <p class=" flex justify-center">Director</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/maxillo:grayscale-0 peer-hover/maxillo:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Pawan Shahane</h4>
        <p class="flex justify-center">MCH</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/maxillo:grayscale-0 peer-hover/maxillo:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Vivek Supaha</h4>
        <p class="flex justify-center">MCH</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/maxillo:grayscale-0 peer-hover/maxillo:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Praful Gayakwad</h4>
        <p class="flex justify-center">MDS</p>
      </span>
    </div>

    <div class="sec-div peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125 peer/cardio">
      <span class="sec-heading peer/dipesh "> CARDIOLOGY
      </span>
    </div>

    <div class="sec-div group peer-hover/cardio:grayscale-0 peer-hover/cardio:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Praful Dhewale</h4>
        <p class="flex justify-center">MD</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/cardio:grayscale-0 peer-hover/cardio:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Mahendra Mhaske</h4>
        <p class="flex justify-center">MD</p>
      </span>
    </div>

    <div class="sec-div peer/gynaecology peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="sec-heading peer/dipesh "> GYNAECOLOGY &
        OBSTETRICS
      </span>
    </div>

    <div class="sec-div group  peer-hover/gynaecology:grayscale-0 peer-hover/gynaecology:scale-125">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Bhagyashree Deshmukh Shrotri</h4>
        <p class="flex justify-center">MS</p>
      </span>
    </div>

    <div class="sec-div group  peer-hover/gynaecology:grayscale-0 peer-hover/gynaecology:scale-125">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Devyani Kambdi Yerne</h4>
        <p class="flex justify-center">MBBS DNB</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/gynaecology:grayscale-0 peer-hover/gynaecology:scale-125  ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Shreya Dahiwale </h4>
        <p class="flex justify-center">MS</p>
      </span>
    </div>

    <div class="sec-div peer/orthopedics peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="sec-heading peer/dipesh "> ORTHOPEDICS
      </span>
    </div>

    <div class="sec-div group  peer-hover/orthopedics:grayscale-0 peer-hover/orthopedics:scale-125">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Anurag Kawale </h4>
        <p class="flex justify-center">MS</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/orthopedics:grayscale-0 peer-hover/orthopedics:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Nakul Ambhore</h4>
        <p class="flex justify-center">DNB, D.Ortho, FIAMS, FIJRS</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/orthopedics:grayscale-0 peer-hover/orthopedics:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Akshay Fuse </h4>
        <p class="flex justify-center">MS</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/orthopedics:grayscale-0 peer-hover/orthopedics:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Shubham C. Padmawar</h4>
        <p class="flex justify-center">MBBS MS</p>
      </span>
    </div>

    <div class="sec-div peer/pediatrics peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="sec-heading peer/dipesh "> PEDIATRICS
      </span>
    </div>

    <div class="sec-div group  peer-hover/pediatrics:grayscale-0 peer-hover/pediatrics:scale-125">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Ashish Akhuj </h4>
        <p class="flex justify-center">MBBS DCH</p>
      </span>
    </div>

    <div class="sec-div peer/pediatriccardiology peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="sec-heading peer/dipesh "> PEDIATRIC
        CARDIOLOGY
      </span>
    </div>

    <div class="sec-div group peer-hover/pediatriccardiology:grayscale-0 peer-hover/pediatriccardiology:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Pramod Ambatkar</h4>
        <p class="flex justify-center">MCH</p>
      </span>
    </div>

    <div class="sec-div peer/pediatricsurgery peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="sec-heading peer/dipesh "> PEDIATRIC
        SURGERY
      </span>
    </div>

    <div class="sec-div group peer-hover/pediatricsurgery:grayscale-0 peer-hover/pediatricsurgery:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Tushar Thakare</h4>
        <p class="flex justify-center">MCH</p>
      </span>
    </div>

    <div class="sec-div peer/pediatricneurology peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="sec-heading peer/dipesh "> PEDIATRIC
        NEUROLOGY
      </span>
    </div>

    <div class="sec-div group peer-hover/pediatricneurology:grayscale-0 peer-hover/pediatricneurology:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Mrs. Priyanka Khobragade </h4>
        <p class="flex justify-center">MD ,DNB</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/pediatricneurology:grayscale-0 peer-hover/pediatricneurology:scale-125  ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Dinesh Saroj </h4>
        <p class="flex justify-center">MD </p>
      </span>
    </div>

    <div class="sec-div peer/ent peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="sec-heading peer/dipesh "> EAR NOSE THROAT
      </span>
    </div>

    <div class="sec-div group peer-hover/ent:grayscale-0 peer-hover/ent:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Gaurav Agrawal </h4>
        <p class="flex justify-center">MBBS, MS, DNB</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/ent:grayscale-0 peer-hover/ent:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Mrs. Kiran Kulsange </h4>
        <p class="flex justify-center">MS</p>
      </span>
    </div>

    <div class="sec-div peer/opthamology peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="sec-heading"> OPTHALMOLOGY
      </span>
    </div>

    <div class="sec-div group peer-hover/opthamology:grayscale-0 peer-hover/opthamology:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Arti Wankhade</h4>
        <p class="flex justify-center">MBBS, MS</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/opthamology:grayscale-0 peer-hover/opthamology:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Abhijeet Patil </h4>
        <p class="flex justify-center">MS</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/opthamology:grayscale-0 peer-hover/opthamology:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Bhairavi Tarale</h4>
        <p class="flex justify-center">MS</p>
      </span>
    </div>

    <div class="sec-div peer/dermatology peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="sec-heading">DERMATOLOGY
      </span>
    </div>

    <div class="sec-div group peer-hover/dermatology:grayscale-0 peer-hover/dermatology:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Esha Agrawal </h4>
        <p class="flex justify-center">MBBS, DDVL</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/dermatology:grayscale-0 peer-hover/dermatology:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Shruti Amle</h4>
        <p class="flex justify-center">MD</p>
      </span>
    </div>

    <div class="sec-div peer/radiology peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="sec-heading">RADIOLOGY
      </span>
    </div>

    <div class="sec-div group peer-hover/radiology:grayscale-0 peer-hover/radiology:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Amol Gawhale</h4>
        <p class="flex justify-center">MBBS, MD, DNB</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/radiology:grayscale-0 peer-hover/radiology:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Mayur Mahadule </h4>
        <p class="flex justify-center">MBBS, MD, DNB</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/radiology:grayscale-0 peer-hover/radiology:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Pradip Rathod</h4>
        <p class="flex justify-center">MD</p>
      </span>
    </div>

    <div class="sec-div peer/itc peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="sec-heading">INTENSIVE & CRITICAL CARE
      </span>
    </div>

    <div class="sec-div group peer-hover/itc:grayscale-0 peer-hover/itc:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Amit Khade</h4>
        <p class="flex justify-center">MBBS, MD, FNB</p>
      </span>
    </div>

    <div class="sec-div peer/anesthesiology peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="sec-heading">ANESTHESIOLOGY
      </span>
    </div>

    <div class="sec-div group peer-hover/anesthesiology:grayscale-0 peer-hover/anesthesiology:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Amit Khade</h4>
        <p class="flex justify-center">MBBS, MD, FNB</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/anesthesiology:grayscale-0 peer-hover/anesthesiology:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Roshan Shedmake</h4>
        <p class="flex justify-center">MD,Anesthesia</p>
      </span>
    </div>

    <div class="sec-div peer/gm peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="sec-heading">GENERAL MEDICINE
      </span>
    </div>

    <div class="sec-div group peer-hover/gm:grayscale-0 peer-hover/gm:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Sonal Chavhan</h4>
        <p class="flex justify-center">MD, Medicine</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/gm:grayscale-0 peer-hover/gm:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Mitali Padmawar</h4>
        <p class="flex justify-center">MD, Medicine</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/gm:grayscale-0 peer-hover/gm:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Yoshita Talmale </h4>
        <p class="flex justify-center">MD, Medicine</p>
      </span>
    </div>

    <div class="sec-div peer/gs peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="sec-heading">GENERAL SURGERY
      </span>
    </div>

    <div class="sec-div group peer-hover/gs:grayscale-0 peer-hover/gs:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Mukteshwar N. Deshmukh</h4>
        <p class="flex justify-center">MS</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/gs:grayscale-0 peer-hover/gs:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Sunil Pande</h4>
        <p class="flex justify-center">MS</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/gs:grayscale-0 peer-hover/gs:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Umesh Gaikwad </h4>
        <p class="flex justify-center">MS</p>
      </span>
    </div>

    <div class="sec-div peer/neurology peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="sec-heading">NEUROLOGY
      </span>
    </div>

    <div class="sec-div group peer-hover/neurology:grayscale-0 peer-hover/neurology:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Sanjay Ramteke </h4>
        <p class="flex justify-center">DM</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/neurology:grayscale-0 peer-hover/neurology:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Parag Moon</h4>
        <p class="flex justify-center">DM</p>
      </span>
    </div>
    <div class="sec-div group peer-hover/neurology:grayscale-0 peer-hover/neurology:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Bhagyashri Wankhade </h4>
        <p class="flex justify-center">MBBS, MD, DM</p>
      </span>
    </div>
    <div class="sec-div group peer-hover/neurology:grayscale-0 peer-hover/neurology:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Amrit Bansod </h4>
        <p class="flex justify-center">DM</p>
      </span>
    </div>

    <div class="sec-div peer/neurosurgery peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="sec-heading">NEURO SURGERY
      </span>
    </div>

    <div class="sec-div group peer-hover/neurosurgery:grayscale-0 peer-hover/neurosurgery:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Nikhil kakani</h4>
        <p class="flex justify-center">MCH</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/neurosurgery:grayscale-0 peer-hover/neurosurgery:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Gaurav Amle </h4>
        <p class="flex justify-center">MCH</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/neurosurgery:grayscale-0 peer-hover/neurosurgery:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Vishal Tarale </h4>
        <p class="flex justify-center">MCH</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/neurosurgery:grayscale-0 peer-hover/neurosurgery:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Ankur Sanghvi</h4>
        <p class="flex justify-center">MCH</p>
      </span>
    </div>

    <div class="sec-div peer/nephrology peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="sec-heading">NEPHROLOGY
      </span>
    </div>

    <div class="sec-div group peer-hover/nephrology:grayscale-0 peer-hover/nephrology:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Jitesh Jeswani</h4>
        <p class="flex justify-center">DM</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/nephrology:grayscale-0 peer-hover/nephrology:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Prasad Gurjar</h4>
        <p class="flex justify-center">DM</p>
      </span>
    </div>

    <div class="sec-div peer/gastro peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="sec-heading">GASTROENTEROLOGY
      </span>
    </div>

    <div class="sec-div group peer-hover/gastro:grayscale-0 peer-hover/gastro:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Nikhil Khobragade</h4>
        <p class="flex justify-center">MD, DNB</p>
      </span>
    </div>

    <div class="sec-div peer/oncologysurgery peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="sec-heading">ONCOLOGY SURGERY
      </span>
    </div>

    <div class="sec-div group peer-hover/oncologysurgery:grayscale-0 peer-hover/oncologysurgery:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Venkatesh Rewale</h4>
        <p class="flex justify-center">MCH</p>
      </span>
    </div>

    <div class="sec-div peer/oncologyhaematology peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="sec-heading">ONCOLOGY - HEMATOLOGY
      </span>
    </div>

    <div class="sec-div group peer-hover/oncologyhaematology:grayscale-0 peer-hover/oncologyhaematology:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Lalit Raut </h4>
        <p class="flex justify-center">DM</p>
      </span>
    </div>

    <div class="sec-div peer/urology peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="sec-heading">UROLOGY
      </span>
    </div>

    <div class="sec-div group peer-hover/urology:grayscale-0 peer-hover/urology:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Pranal Sahare </h4>
        <p class="flex justify-center">MS,DNB</p>
      </span>
    </div>

    <div class="sec-div peer/pulmonology peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="sec-heading">PULMONOLOGY
      </span>
    </div>

    <div class="sec-div group peer-hover/pulmonology:grayscale-0 peer-hover/pulmonology:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Vinit Niranjane</h4>
        <p class="flex justify-center">MD</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/pulmonology:grayscale-0 peer-hover/pulmonology:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Suhas Tiple</h4>
        <p class="flex justify-center">MD</p>
      </span>
    </div>

    <div class="sec-div peer/psy peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="">PSYCHIATRY
      </span>
    </div>

    <div class="sec-div group peer-hover/psy:grayscale-0 peer-hover/psy:scale-125  ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Rajshree Nimbalkar </h4>
        <p class="flex justify-center">MD</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/psy:grayscale-0 peer-hover/psy:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Deepa Sangolkar Ambhore</h4>
        <p class="flex justify-center">MD</p>
      </span>
    </div>

    <div class="sec-div peer/pathology peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="sec-heading">PATHOLOGY & MICROBIOLOGY
      </span>
    </div>

    <div class="sec-div group peer-hover/pathology:grayscale-0 peer-hover/pathology:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Sandip Waghade</h4>
        <p class="flex justify-center">MD</p>
      </span>
    </div>

    <div class="sec-div group peer-hover/pathology:grayscale-0 peer-hover/pathology:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Nikhil Nimbalkar</h4>
        <p class="flex justify-center">MD</p>
      </span>
    </div>

    <div class="sec-div peer/medical peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="sec-heading">MEDICAL SUPERITENDENT
      </span>
    </div>

    <div class="sec-div group peer-hover/medical:grayscale-0 peer-hover/medical:scale-125 ">
      <img class="sec-img" src="../resources/image/dipesh.jpg" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr. Kanchan Anjankar </h4>
        <p class="flex justify-center">BAMS, MD Medicine</p>
      </span>
    </div>

    <div class="sec-div peer/diet peer-hover/alldept:grayscale-0 group peer-hover/alldept:scale-125">
      <span class="sec-heading">DIETICIAN
      </span>
    </div>

    <div class="sec-div group peer-hover/diet:grayscale-0 peer-hover/diet:scale-125 ">
      <img class="sec-img" src="" alt="Dr. Sudhir">
      <span class="sec-text group-hover:opacity-100">
        <h4>Dr.Deepali Parate</h4>
        <p class="flex justify-center"></p>
      </span>
    </div>

  </section> -->
</template>

<!-- <script>
import { test } from '../private/testPage.js';


export default {
    data() {
        return {
            fanta: test,
            Servicefitft: '',
            services: [],

        };
    },
    created() {
        this.Servicefitft = test[1].imagePath;
    },
};
</script> -->

<script setup>import TestPage2 from './TestPage2.vue';
import { articleslist } from '../private/articles/articlesList.js'</script>
<script>
export default {
  data() {
    return {
      currentIndex: 0,
      interval: null,
      articles: articleslist
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    prev() {
      this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.articles.length - 1;
    },
    next() {
      this.currentIndex = (this.currentIndex < this.articles.length - 1) ? this.currentIndex + 1 : 0;
    },
    setCurrentIndex(index) {
      this.currentIndex = index;
    },
    startAutoSlide() {
      this.interval = setInterval(this.next, 3000);
    }
  }
};
</script>

<style scoped>
.carousel-container {
  height: 700px;
  position: relative;
}

.carousel-item {
  width: 100%;
}

button {
  z-index: 10;
}

span {
  width: 10px;
  height: 10px;
}
</style>