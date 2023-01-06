<template>
  <div class="justify-center flex items-center">
    <div class="justify-center">
      <img
        class="object-cover h-screen w-min"
        :alt="sectionBgImage"
        :src="getImgUrl(sectionBgImage)"
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
    getImgUrl(imgName) {
      return require("@/assets/" + imgName);
    },
  },
});
</script>

<style scoped></style>
