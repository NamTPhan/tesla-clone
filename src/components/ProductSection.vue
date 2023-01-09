<template>
  <div class="justify-center flex items-center">
    <div class="justify-center">
      <img
        class="object-cover h-screen w-min hidden md:block"
        :alt="sectionBgImage"
        :src="getDesktopImgUrl(sectionBgImage)"
      />
      <img
        class="object-cover h-screen w-min block md:hidden"
        :alt="sectionBgImage"
        :src="getMobileImgUrl(sectionBgImage)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductSection",
  props: {
    sectionBgImage: {
      type: String,
      default: null,
    },
  },
  methods: {
    getDesktopImgUrl(imgName) {
      return require("@/assets/" + imgName);
    },
    getMobileImgUrl(imgName) {
      return require("@/assets/mobile/" + imgName);
    },
  },
});
</script>

<style scoped></style>
