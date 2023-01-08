<template>
  <NavBar />
  <ProductSection section-bg-image="ModelY.jpg" />
  <ProductSection section-bg-image="Model3.jpg" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductSection from "./components/ProductSection.vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  name: "App",
  components: {
    ProductSection,
    NavBar,
  },
  data() {
    return {};
  },
  methods: {},
});
</script>

<style>
#app {
  font-family: Arial, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
