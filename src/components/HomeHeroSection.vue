<template>
    <!-- Height is set so hero image is 450px on  non-mobile screens and 288px on mobile screens -->
    <div class="relative flex h-[288px] lg:h-[450px]">
      <!-- Hero image-->
      <img class="absolute w-full h-full brightness-90" :src="getHeroImgUrl()" alt="Alternate hero image text">
      <!-- Content -->
      <div class="absolute container top-0 inset-x-0 mx-auto mt-16 lg:mt-24">
        <div class="mx-2 lg:mx-20">
          <div class="hero-heading drop-shadow-md mb-4">Do Things Better</div>
          <div class="hero-subheading drop-shadow-md mb-6 lg:mb-10">Here's how our company does things better</div>
          <button class="hero-btn hover:bg-gray-100 hover:bg-opacity-20">Learn more</button>
        </div>
      </div>
    </div>

</template>

<script>

export default {
    props: {
        isMobile: {
            type: Boolean,
            required: true
        }
    },

    data: () => ({
    }),

    methods: {
        // get image URL for the hero image
        getHeroImgUrl() {
          this.heroImage = this.isMobile ? 'hero-01-sm.jpg' : 'hero-01-lg.jpg'
          return new URL(`../assets/${this.heroImage}`, import.meta.url).href
        },
    },
}
</script>


<style scoped>
  .hero-heading  {
    font-size: 32px;
    font-weight: bold;
    line-height: 1.2;
    color: theme('colors.white');
  }
  .hero-subheading {
    font-size: 16px;
    font-weight: 600;
    color: theme('colors.white');
  }
  .hero-btn {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    color: theme('colors.white');
    padding: 10px 18px 10px 18px;
    border: 1px solid theme('colors.white');
    border-radius: 5px;
  }

  @media (min-width: 1024px) {
    .hero-heading {
      font-size: 56px;
      font-weight: bold;
      color: theme('colors.white');
    }
    .hero-subheading {
      font-size: 28px;
      font-weight: 600;
      color: theme('colors.white');
    }
    .hero-btn {
      text-transform: uppercase;
      font-size: 16px;
      font-weight: bold;
      color: theme('colors.white');
      padding: 16px 32px 16px 32px;
      border: 1px solid theme('colors.white');
      border-radius: 5px;
    }
  }

</style>
