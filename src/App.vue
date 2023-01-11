<template>
  <NavBar />
  <ProductSection
    v-for="product of products"
    :key="product.title"
    :desktop-bg-image="product.desktopBgImage"
    :mobile-bg-image="product.mobileBgImage"
    :primary-btn-label="product.primaryBtnLabel"
    :primary-btn-link="product.primaryBtnLink"
    :sub-btn-label="product.subBtnLabel"
    :sub-btn-link="product.subBtnLink"
    :title="product.title"
    :subtitle="product.subtitle"
    :subtitle-link="product.subtitleLink"
    :is-subtitle-a-link="product.isSubtitleALink"
  />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductSection from "./components/ProductSection.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    ProductSection,
    NavBar,
    Footer,
  },
  data() {
    return {
      products: [
        {
          desktopBgImage: "md:bg-model-y",
          mobileBgImage: "bg-mb-model-y",
          title: "Model Y",
          primaryBtnLabel: "Custom Order",
          primaryBtnLink: "https://www.tesla.com/modely/design#overview",
          subBtnLabel: "View Inventory",
          subBtnLink: "https://www.tesla.com/inventory/new/my",
        },
        {
          desktopBgImage: "md:bg-model-3",
          mobileBgImage: "bg-mb-model-3",
          title: "Model 3",
          primaryBtnLabel: "Custom Order",
          primaryBtnLink: "https://www.tesla.com/model3/design#overview",
          subBtnLabel: "View Inventory",
          subBtnLink: "https://www.tesla.com/inventory/new/m3",
        },
        {
          desktopBgImage: "md:bg-model-s",
          mobileBgImage: "bg-mb-model-s",
          title: "Model S",
          primaryBtnLabel: "Custom Order",
          primaryBtnLink: "https://www.tesla.com/models/design#overview",
          subBtnLabel: "View Inventory",
          subBtnLink: "https://www.tesla.com/inventory/new/ms",
        },
        {
          desktopBgImage: "md:bg-model-x",
          mobileBgImage: "bg-mb-model-x",
          title: "Model X",
          primaryBtnLabel: "Custom Order",
          primaryBtnLink: "https://www.tesla.com/modelx/design#overview",
          subBtnLabel: "View Inventory",
          subBtnLink: "https://www.tesla.com/inventory/new/mx",
        },
        {
          desktopBgImage: "md:bg-solar-panel",
          mobileBgImage: "bg-mb-solar-panel",
          title: "Solar Panels",
          subtitle: "Lowest Cost Solar Panels in America",
          isSubtitleALink: false,
          primaryBtnLabel: "Order Now",
          primaryBtnLink: "https://www.tesla.com/energy/design",
          subBtnLabel: "Learn More",
          subBtnLink: "https://www.tesla.com/solarpanels",
        },
        {
          desktopBgImage: "md:bg-solar-roof",
          mobileBgImage: "bg-mb-solar-roof",
          title: "Solar Roof",
          subtitle: "Produce Clean Energy From Your Roof",
          isSubtitleALink: false,
          primaryBtnLabel: "Order Now",
          primaryBtnLink: "https://www.tesla.com/solarroof/design",
          subBtnLabel: "Learn More",
          subBtnLink: "https://www.tesla.com/solarroof",
        },
        {
          desktopBgImage: "md:bg-charger",
          mobileBgImage: "bg-mb-charger",
          title: "Accessories",
          subtitle: "",
          primaryBtnLabel: "Shop Now",
          primaryBtnLink: "https://www.tesla.com/shop?tesref=true",
        },
      ],
    };
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
