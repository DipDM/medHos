<template>
    <div >
        <!-- SiteHeader -->
        <header
            class="p-3 flex sticky bg-white md:sticky shadow-[0_0_15px_blue] z-50 top-0 justify-between items-center">
            <!-- For Desktop view -->
            <a href="/" id="siteinfo" class="flex gap-2 items-center">
                <img class="object-cover w-10 h-10 lg:w-14 lg:h-14" src='/public/assets/logo.png'
                    alt="Accensis Hosptials" />
                <div class="grid text-blue-950">
                    <span class="font-semibold lg:text-5xl">Accencis</span>
                    <span class="text-xs">Superspeciality Hosptials & Research Center</span>
                </div>
            </a>
            <nav class="hidden lg:flex items-end pl-9 gap-12">
                <RouterLink to="/" class="font-medium hover:text-black text-blue-600">Home</RouterLink>
                <RouterLink to="/service" class="font-medium hover:text-black text-blue-600">Specialities
                </RouterLink>
                <RouterLink to="/article" class="font-medium hover:text-black text-blue-600">Articles</RouterLink>
                <RouterLink to="/about" class="font-medium hover:text-black text-blue-600">About</RouterLink>
                <RouterLink to="/contact" class="font-medium hover:text-black text-blue-600">Contact</RouterLink>

            </nav>
            <button
                class="hidden lg:flex gap-2 items-center border bg-red-500 text-white hover:bg-red-400 px-4 py-2 rounded-lg">
                Book Appointment
            </button>
            <button class="p-2 lg:hidden" @click="toggleNavbar" @click.stop> 
                <span class="material-symbols-outlined text-blue-600"> menu </span>
            </button>
            <!-- For Mobile view -->
            <div id="Mobile-Nav" v-if="isNavbar" @click="hideNavbar" 
                class=" fixed bg-white shadow-[0_0_15px_blue] inset-0 p-3  z-10 md:hidden rounded-lg transition-all duration-500 transform ease-in-out mb-56">
                <div id="header_mobile" class="flex justify-between">
                    <a href="index.html" id="siteinfo" class="flex gap-2 items-center">
                        <img class="object-cover w-10 h-10" src="/public/assets/logo.png" alt="Accensis Hosptials" />
                        <div class="grid text-blue-950">
                            <span class="font-semibold">Accencis</span>
                            <span class="text-xs">Superspeciality Hosptials & Research Center</span>
                        </div>
                    </a>
                    <button class="p-2 md:hidden" @click="hideNavbar">
                        <span class="material-symbols-outlined text-blue-600"> close </span>
                    </button>
                </div>
                <div class="rounded-xl bg-white ">
                    <nav class="grid justify-center items-center mt-6">
                        <RouterLink to="/" @click="hideNavbar"
                            class="font-medium text-blue-600 m-3 p-3 text-center hover:bg-slate-200 hover:rounded-lg">
                            Home</RouterLink>
                        <RouterLink to="/about" @click="hideNavbar"
                            class="font-medium text-blue-600 m-3 p-3 text-center hover:bg-slate-200 hover:rounded-lg">
                            About</RouterLink>
                        <RouterLink to="/articles" @click="hideNavbar"
                            class="font-medium text-blue-600 m-3 p-3 text-center hover:bg-slate-200 hover:rounded-lg">
                            Articles</RouterLink>
                        <RouterLink to="/service" @click="hideNavbar"
                            class="font-medium text-blue-600 m-3 p-3 text-center hover:bg-slate-200 hover:rounded-lg">
                            Specialities</RouterLink>
                        <RouterLink to="/contact" @click="hideNavbar"
                            class="font-medium text-blue-600 m-3 p-3 text-center hover:bg-slate-200 hover:rounded-lg">
                            Contact</RouterLink>
                    </nav>
                    <div class="h-[1px] bg-gray-300"></div>
                    <div class="grid items-center justify-center">
                        <button
                            class="mt-6 flex w-full gap-2 justify-center items-center  font-bold border text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-lg">
                            Book Appointment
                        </button>
                    </div>
                    <hr class="w-48 h-1 mx-auto my-14 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isNavbar: false
    };
  },
  methods: {
    toggleNavbar(event) {
      this.isNavbar = !this.isNavbar;
      if (this.isNavbar) {
        this.addClickListener();
      } else {
        this.removeClickListener();
      }
      event.stopPropagation();
    },
    showNavbar(event) {
      this.isNavbar = true;
      this.addClickListener();
      event.stopPropagation();
    },
    hideNavbar() {
      this.isNavbar = false;
      this.removeClickListener();
    },
    addClickListener() {
      document.addEventListener('click', this.handleClickOutside);
    },
    removeClickListener() {
      document.removeEventListener('click', this.handleClickOutside);
    },
    handleClickOutside(event) {
      const navbar = this.$refs.navbar;
      if (navbar && !navbar.contains(event.target)) {
        this.hideNavbar();
      }
    }
  },
  beforeUnmount() {
    this.removeClickListener();
  }
};
</script>