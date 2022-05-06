<template>
    <header class="top-0 left-0 z-40 fixed bg-white w-full">
      <nav class="container mx-auto flex flex-wrap justify-between items-center">
        <div>
          <router-link to="/" @click.native="scrollToTop">
            <img class="py-4" src="../assets/logo.png" alt="logo" />
          </router-link>
        </div>
        <div class="block lg:hidden"> <!-- hamburger -->
          <button @click="toggleBurger" class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-700 hover:border-gray-700">
            <svg class="current-color h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" /></svg>
          </button>
        </div>
        <ul class="nav-btn-container uppercase tracking-wide font-bold text-sm pb-4 w-full block flex-grow lg:flex lg:flex-initial lg:w-auto lg:pb-0 items-center"
            :class="isOpen ? 'block': 'hidden'"
        >
          <li><router-link to="/" @click="scrollToTop"><div class="nav-btn py-4 lg:px-4 lg:py-8">Home</div></router-link></li>
          <li><router-link to="/" @click="scrollToTop"><div class="nav-btn py-4 lg:px-4 lg:py-8">Product</div></router-link></li>
          <li><router-link to="/" @click="scrollToTop"><div class="nav-btn py-4 lg:px-4 lg:py-8">About Us</div></router-link></li>
          <li><router-link to="/" @click="scrollToTop"><div class="nav-btn py-4 lg:px-4 lg:py-8">Contact</div></router-link></li>
        </ul>
      </nav>
    </header>
</template>

<script>
  export default {
    name: 'AppHeader',

    data() {
      return {
        isOpen: false,
      }
    },
    methods: {
      scrollToTop() {
        this.isOpen = false
        window.scrollTo(0,0);
      },
      toggleBurger() {
        this.isOpen = !this.isOpen
      }
    }
  }
</script>


<style scoped>
  .nav-btn {
    color: theme('colors.gray.500');
  }
  .nav-btn:hover {
    background-color: theme('colors.gray.100');
  }
</style>
