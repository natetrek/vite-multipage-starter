<template>
  <footer class="footer-container text-center bg-neutral-800 py-8 lg:px-4">
      <div class="footer-text py-2 sm:mb-0">&copy; {{ new Date().getFullYear() }} Company Name. All Rights Reserved.</div>
      <div class="flex justify-center">
        <div v-for="(item,idx) in FooterLinks" :key="idx">
          <button class="footer-btn p-1 lg:p-2">{{ item }}</button>
          <span v-if="idx < FooterLinks.length-1" class="footer-text">|</span>
        </div>
      </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",

  data: () => ({
    FooterLinks: ["Home", "Terms of Use", "Privacy Policy", "About Us", "Contact Us"],
  }),
};
</script>

<style scoped>
  .footer-text {
    font-size: 12px;
    color: #999;
  }
  .footer-btn {
    font-size: 12px;
    color: #999;
  }
</style>
