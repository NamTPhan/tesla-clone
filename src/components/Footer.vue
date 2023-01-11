<template>
  <div class="flex flex-col md:flex-row justify-center pb-7">
    <a
      v-for="footerOption of footerLinks"
      :key="footerOption.label"
      target="_blank"
      :href="footerOption.link"
      class="text-sm text-[#5c5e62] justify-center mx-0 md:mx-2 my-2 md:my-0"
      >{{ footerOption.label }}</a
    >
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      footerLinks: [
        {
          label: "Tesla © 2023",
          link: "https://www.tesla.com/about",
        },
        {
          label: "Privacy & Legal",
          link: "https://www.tesla.com/legal",
        },
        {
          label: "Vehicle Recalls",
          link: "https://www.tesla.com/vin-recall-search",
        },
        {
          label: "Contact",
          link: "https://www.tesla.com/contact",
        },
        {
          label: "Careers",
          link: "https://www.tesla.com/careers",
        },
        {
          label: "News",
          link: "https://www.tesla.com/blog",
        },
        {
          label: "Engage",
          link: "https://engage.tesla.com/",
        },
        {
          label: "Locations",
          link: "https://www.tesla.com/findus/list",
        },
      ],
    };
  },
};
</script>
