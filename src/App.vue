<template>
  <NavBar />
  <ProductSection
    desktop-bg-image="md:bg-model-y"
    mobile-bg-image="bg-mb-model-y"
    title="Model Y"
    primary-btn-label="Custom Order"
    primary-btn-link="https://www.tesla.com/modely/design#overview"
    sub-btn-label="View Inventory"
    sub-btn-link="https://www.tesla.com/inventory/new/my"
  />
  <ProductSection
    desktop-bg-image="md:bg-model-3"
    mobile-bg-image="bg-mb-model-3"
    title="Model 3"
    primary-btn-label="Custom Order"
    primary-btn-link="https://www.tesla.com/model3/design#overview"
    sub-btn-label="View Inventory"
    sub-btn-link="https://www.tesla.com/inventory/new/m3"
  />
  <ProductSection
    desktop-bg-image="md:bg-model-s"
    mobile-bg-image="bg-mb-model-s"
    title="Model S"
    primary-btn-label="Custom Order"
    primary-btn-link="https://www.tesla.com/models/design#overview"
    sub-btn-label="View Inventory"
    sub-btn-link="https://www.tesla.com/inventory/new/ms"
  />
  <ProductSection
    desktop-bg-image="md:bg-model-x"
    mobile-bg-image="bg-mb-model-x"
    title="Model X"
    primary-btn-label="Custom Order"
    primary-btn-link="https://www.tesla.com/modelx/design#overview"
    sub-btn-label="View Inventory"
    sub-btn-link="https://www.tesla.com/inventory/new/mx"
  />
  <ProductSection
    desktop-bg-image="md:bg-solar-panel"
    mobile-bg-image="bg-mb-solar-panel"
    title="Solar Panels"
    subtitle="Lowest Cost Solar Panels in America"
    :is-subtitle-a-link="false"
    primary-btn-label="Order Now"
    primary-btn-link="https://www.tesla.com/energy/design"
    sub-btn-label="Learn More"
    sub-btn-link="https://www.tesla.com/solarpanels"
  />
  <ProductSection
    desktop-bg-image="md:bg-solar-roof"
    mobile-bg-image="bg-mb-solar-roof"
    title="Solar Roof"
    subtitle="Produce Clean Energy From Your Roof"
    :is-subtitle-a-link="false"
    primary-btn-label="Order Now"
    primary-btn-link="https://www.tesla.com/solarroof/design"
    sub-btn-label="Learn More"
    sub-btn-link="https://www.tesla.com/solarroof"
  />
  <ProductSection
    desktop-bg-image="md:bg-charger"
    mobile-bg-image="bg-mb-charger"
    subtitle=""
    title="Accessories"
    primary-btn-label="Shop Now"
    primary-btn-link="https://www.tesla.com/shop?tesref=true"
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
