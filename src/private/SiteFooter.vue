<template>
    <div>
        <!-- site footer -->
        <footer class="m-3 max-w-screen">
            <div class="bg-white flex flex-col lg:flex-row justify-between bg-gradient-to-bl from-blue-50 to-blue-100">
                <div class="flex justify-center m-3">
                    <RouterLink to="/"  id="siteinfo" class="flex items-center shadow-black">
                        <img class="object-cover w-10 h-10" src="/public/assets/logo.png" alt="Accensis Hosptials" />
                        <div class="grid text-blue-950">
                            <span class="text-5xl font-semibold">Accencis</span>
                            <span class="text-xs ">Superspeciality Hosptials & Research Center</span>
                        </div>
                    </RouterLink>
                </div>
                <div class="grid grid-cols-2 lg:flex text-black justify-center rounded-lg border px-8 py-6 gap-2 ">
                    <div
                        class="grid justify-center rounded-lg p-5 text-start bg-gradient-to-bl from-blue-50 to-blue-100">
                        <span class=" m-2 font-semibold">Important links</span>
                        <a href="#">
                            <p class="justify-center text-xs leading-5">Vision</p>
                        </a>
                        <a href="#">
                            <p class="justify-center text-xs leading-5">Home</p>
                        </a>
                        <a href="#">
                            <p class="justify-center text-xs leading-5"></p>
                        </a>
                    </div>
                    <div
                        class="grid justify-center items-start text-start rounded-lg p-5 bg-gradient-to-bl from-blue-50 to-blue-100">
                        <a href="../private/about.html" class="m-2 font-semibold">Visit Us</a>
                        <p class="text-xs leading-5">
                            3rd floor Vijay Bhavan,<br />
                            Lokmat Square, <br />
                            Nagpur,<br />
                            Maharshatra,440012
                        </p>
                    </div>
                    <div
                        class="grid justify-center items-start rounded-lg p-5 bg-gradient-to-bl text-start from-blue-50 to-blue-100 ">
                        <a href="#" class="font-semibold m-2">Contact Us</a>
                        <span class="text-xs font-semibold">Service Hours : 24*7</span>
                        <a href="tel:+919876543210" class="text-xs">+91 98975632415</a>
                        <a href="mailto:drsudhiraccensis@gmail.com" class="text-xs">drsudhiraccensis@gmail.com</a>
                    </div>
                    <div
                        class="grid justify-center text-center rounded-lg p-5 bg-gradient-to-bl from-blue-50 to-blue-100">
                        <a href="../private/about.html" class=" m-2 font-semibold">Know About Us</a>
                        <p class=" text-xs">
                            We have Dedicated Section to tell you about us.
                        </p>
                        <a href="../private/about.html" class="text-xs font-semibold">Let's go
                        </a>
                    </div>
                </div>
            </div>
            <div class="font-medium text-black w-full h-3 flex justify-between p-2">
                <h1 class="text-xs">Copyright © | Accencis Superspeciality Hosptials <br class="md:hidden"> & Research
                    Center</h1>
                <div>
                    <a href="https://www.instagram.com/accencis_hospitals/"><i
                            class="fa-brands fa-instagram font-semibold p-2"></i></a>
                    <a
                        href="https://www.facebook.com/people/Sudhir-Maheshkar/pfbid02mrPTzNbHfXAEdpUfKFS1dGdncyeQ3csggqWMJyesf2xB9AxbHizxkzyeKk7roPoPl/"><i
                            class="fa-brands fa-facebook-f font-semibold p-2"></i></a>
                    <a href="https://twitter.com/AccencisHospitl"><i
                            class="fa-brands fa-x-twitter font-semibold p-2"></i></a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script></script>