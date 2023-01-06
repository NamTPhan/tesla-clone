<template>
  <div class="fixed w-full bg-transparent navbar-container">
    <div class="mx-auto px-6">
      <div
        class="flex items-center justify-between py-2 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1 pl-8">
          <a href="#" aria-label="Tesla Logo">
            <img
              class="h-3 w-auto"
              src="../assets/tesla-logo.svg"
              alt="Tesla Logo"
            />
          </a>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
          >
            <span class="sr-only">Open menu</span>
            <!-- Hamburger menu -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <nav class="hidden space-x-10 md:flex">
          <a
            v-for="route of linksCenter"
            :key="route.label"
            target="_blank"
            :href="route.link"
            class="text-sm font-medium"
            >{{ route.label }}</a
          >
        </nav>
        <div
          class="hidden items-center pr-8 justify-end md:flex md:flex-1 lg:w-0 md:space-x-8"
        >
          <a
            href="https://shop.tesla.com/"
            target="_blank"
            class="whitespace-nowrap text-base font-medium"
            >Shop</a
          >
          <a
            href="https://www.tesla.com/teslaaccount"
            target="_blank"
            class="whitespace-nowrap text-base font-medium"
            >Account</a
          >
          <a
            href="#"
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-transparent px-4 py-2 text-base font-medium shadow-sm hover:bg-black-100"
            >Menu</a
          >
        </div>
      </div>
    </div>

    <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
    <div
      class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
    >
      <div>test</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      linksCenter: [
        {
          label: "Model S",
          link: "https://www.tesla.com/models",
        },
        {
          label: "Model 3",
          link: "https://www.tesla.com/model3",
        },
        {
          label: "Model X",
          link: "https://www.tesla.com/modelx",
        },
        {
          label: "Model Y",
          link: "https://www.tesla.com/modely",
        },
        {
          label: "Solar Roof",
          link: "https://www.tesla.com/solarroof",
        },
        {
          label: "Solar Panels",
          link: "https://www.tesla.com/solarpanels",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar-container {
  color: #171a20;
}
</style>
