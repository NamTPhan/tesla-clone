<template>
  <NavBar />
  <ProductSection
    desktop-bg-image="md:bg-model-y"
    mobile-bg-image="bg-mb-model-y"
    title="Model Y"
  />
  <ProductSection
    desktop-bg-image="md:bg-model-3"
    mobile-bg-image="bg-mb-model-3"
    title="Model 3"
  />
  <ProductSection
    desktop-bg-image="md:bg-model-s"
    mobile-bg-image="bg-mb-model-s"
    title="Model S"
  />
  <ProductSection
    desktop-bg-image="md:bg-model-x"
    mobile-bg-image="bg-mb-model-x"
    title="Model X"
  />
  <ProductSection
    desktop-bg-image="md:bg-solar-panel"
    mobile-bg-image="bg-mb-solar-panel"
    title="Solar Panels"
    subtitle="Lowest Cost Solar Panels in America"
    :is-subtitle-a-link="false"
  />
  <ProductSection
    desktop-bg-image="md:bg-solar-roof"
    mobile-bg-image="bg-mb-solar-roof"
    title="Solar Roof"
    subtitle="Produce Clean Energy From Your Roof"
    :is-subtitle-a-link="false"
  />
  <ProductSection
    desktop-bg-image="md:bg-charger"
    mobile-bg-image="bg-mb-charger"
    subtitle=""
    title="Accessories"
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
