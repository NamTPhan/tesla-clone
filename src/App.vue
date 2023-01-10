<template>
  <NavBar />
  <ProductSection
    desktop-bg-image="md:bg-model-y"
    mobile-bg-image="bg-mb-model-y"
  />
  <ProductSection
    desktop-bg-image="md:bg-model-3"
    mobile-bg-image="bg-mb-model-3"
  />
  <ProductSection
    desktop-bg-image="md:bg-model-s"
    mobile-bg-image="bg-mb-model-s"
  />
  <ProductSection
    desktop-bg-image="md:bg-model-x"
    mobile-bg-image="bg-mb-model-x"
  />
  <ProductSection
    desktop-bg-image="md:bg-solar-panel"
    mobile-bg-image="bg-mb-solar-panel"
  />
  <ProductSection
    desktop-bg-image="md:bg-solar-roof"
    mobile-bg-image="bg-mb-solar-roof"
  />
  <ProductSection
    desktop-bg-image="md:bg-charger"
    mobile-bg-image="bg-mb-charger"
  />
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
