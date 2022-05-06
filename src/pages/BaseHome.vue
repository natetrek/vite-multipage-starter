<template>

    <!-- Hero area -->
    <HomeHeroSection :isMobile="isMobile" />

    <!-- Section 1 -->
    <div class="container-inner prose mx-2 md:mx-auto py-8 md:py-16">
      <div class="space-y-8 pb-12">
        <div class="text-3xl md:text-4xl text-center">Start Doing Things Better</div>
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta exercitationem quidem hic, voluptatibus sunt placeat illum sapiente, unde est nisi nostrum itaque aliquam magnam quae magni rerum. Accusamus, corrupti fuga.</div>
      </div>
      <div v-if="isMobile" class="border-t-2 border-gray-100 pb-2"></div>
      <div class="flex flex-col md:flex-row basis-1/3 mx-2 md:mx-auto gap-8 md:gap-12 my-4">
        <div class="flex-col space-y-4">
          <img src="../assets/nature-people.svg" alt="Heading icon 01" width="48px" class="mx-auto">
          <div class="font-semibold text-lg">Example of a Cool Thing We Do</div>
          <div class="leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quod fugiat ex delectus neque maxime labore? Exercitationem quidem, beatae omnis illo nobis quos quod accusamus laboriosam modi aliquam quia animi voluptas quibusdam magnam ea?</div>
          <button class="font-bold text-blue-500">Learn More</button>
        </div>
        <div v-if="isMobile" class="border-t-2 border-gray-100"></div>
        <div class="flex-col space-y-4">
          <img src="../assets/task-complete.svg" alt="Heading icon 02" width="48px" class="mx-auto">
          <div class="font-semibold text-lg">Another Cool Thing We Do</div>
          <div class="leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aut ratione vitae perferendis est, reprehenderit dolore, minima, error a ea necessitatibus quisquam voluptate magni consequuntur voluptatum tenetur aperiam tempora animi!</div>
          <button class="font-bold text-blue-500">Learn More</button>
        </div>
        <div v-if="isMobile" class="border-t-2 border-gray-100"></div>
        <div class="flex-col space-y-4">
          <img src="../assets/auto-stories.svg" alt="Heading icon 03" width="48px" class="mx-auto">
          <div class="font-semibold text-lg">Yet Another Cool Thing We Do</div>
          <div class="leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis saepe nobis quam exercitationem provident eos amet iure, nostrum hic doloremque delectus obcaecati deserunt, sit earum ipsum dolores sequi perspiciatis nesciunt?</div>
          <button class="font-bold text-blue-500">Learn More</button>
        </div>
      </div>
    </div>

    <!-- Section 2 -->
    <div class="bg-gray-100">
      <div class="container-inner flex flex-col md:flex-row mx-2 md:mx-auto py-8 md:py-16">
        <!-- On mobile - display image on top -->
        <div v-if="isMobile" class="basis-1/2">
          <img  src="../assets/home-img-01.png" alt="Homepage illustration 01" class="mx-auto">
        </div>
        <div class="basis-1/2">
          <div class="space-y-8 md:space-y-12 pt-4 md:pt-8">
            <div class="text-2xl md:text-3xl text-center md:text-left">We Bring You Good Things</div>
            <div class="leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rerum error, quisquam, architecto aspernatur perferendis libero veniam ratione asperiores animi quos culpa officia fuga totam ducimus consectetur? Magnam, architecto ut.</div>
            <div class="text-center md:text-left"><button class="section-btn hover:bg-blue-400 hover:bg-opacity-20">Learn More</button></div>
          </div>
        </div>
        <div v-if="!isMobile" class="basis-1/2">
          <img  src="../assets/home-img-01.png" alt="Homepage illustration 01" class="mx-auto">
        </div>
      </div>
    </div>

    <!-- Section 3 -->
    <div class="container-inner flex flex-col md:flex-row mx-2 md:mx-auto py-8 md:py-20">
      <div class="basis-1/2 pb-12 md:pb-4">
        <img src="../assets/home-img-02.png" alt="Homepage illustration 02" class="pt-4 mx-auto">
      </div>
      <div class="basis-1/2">
        <div class="space-y-8 md:space-y-12 md:ml-8 pr-8">
          <div class="text-2xl md:text-3xl text-center md:text-left">Start Building That Great Thing</div>
          <div class="leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rerum error, quisquam, architecto aspernatur perferendis libero veniam ratione asperiores animi quos culpa officia fuga totam ducimus consectetur? Magnam, architecto ut.</div>
          <div class="text-center md:text-left"><button class="section-btn hover:bg-blue-400 hover:bg-opacity-20">Learn More</button></div>
        </div>
      </div>
    </div>

    <!-- Call to action -->
    <div class="call-to-action">
      <div class="container-inner mx-2 md:mx-auto py-16">
        <div class="flex-col text-center space-y-8 md:px-32">
          <div class="cta-heading text-3xl md:text-4xl">Get in touch</div>
          <div class="cta-content text-left md:text-center pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sit enim iure quasi officiis eveniet distinctio natus aliquid corrupti fuga libero impedit officia quis sint ad amet temporibus, incidunt autem!</div>
          <button class="cta-btn">Contact us</button>
        </div>
      </div>
    </div>

</template>

<script>
import HomeHeroSection from '../components/HomeHeroSection.vue'

export default {
  name: "BaseHome",

  components: {
    HomeHeroSection,
  },

  data: function() {
    return {
      isMobile: false    };
  },

  created() {
    // add an event listener to the window so we can switch image sizes
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },

  destroyed() {
      window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    // update variable used to select mobile display elements
    handleResize() {
      this.isMobile = window.innerWidth < 650;
    },

  }
};
</script>

<style scoped>
  .section-btn {
    text-transform: uppercase;
    font-weight: bold;
    color: theme('colors.blue.500');
    padding: 12px 32px 12px 32px;
    border: 1px solid theme('colors.blue.500');
    border-radius: 5px;
  }
  .call-to-action {
    background-color: #333333;
  }
  .cta-heading {
    font-weight: 400;
    color: theme('colors.white');
  }
  .cta-content {
    line-height: 1.7rem;
    color: theme('colors.white');
  }
  .cta-btn {
    text-transform: uppercase;
    font-weight: bold;
    padding: 12px 32px 12px 32px;
    color: theme('colors.white');
    background-color: theme('colors.blue.500');
    border: 1px solid theme('colors.blue.500');
    border-radius: 5px;
  }
  .cta-btn:hover {
    border: 1px solid theme('colors.white');
  }

</style>

