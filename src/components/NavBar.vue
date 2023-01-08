<template>
  <div class="fixed w-full bg-transparent navbar-container">
    <div class="mx-auto">
      <div class="flex justify-between md:justify-start items-center py-2">
        <div class="flex lg:w-0 lg:flex-1 pl-8">
          <a href="#" aria-label="Tesla Logo">
            <img
              class="h-3 w-auto"
              src="../assets/tesla-logo.svg"
              alt="Tesla Logo"
            />
          </a>
        </div>
        <div class="md:hidden">
          <button
            class="hamburger-menu-btn"
            type="button"
            aria-expanded="false"
            @click="toggleMenu"
          >
            <span class="sr-only">Open menu</span>
            Menu
          </button>
        </div>
        <nav class="hidden space-x-3 md:flex">
          <a
            v-for="route of linksCenter"
            :key="route.label"
            target="_blank"
            :href="route.link"
            class="navbar-link"
            >{{ route.label }}</a
          >
        </nav>
        <div
          class="hidden items-center pr-8 justify-end md:flex md:flex-1 lg:w-0"
        >
          <a href="https://shop.tesla.com/" target="_blank" class="navbar-link"
            >Shop</a
          >
          <a
            href="https://www.tesla.com/teslaaccount"
            target="_blank"
            class="navbar-link"
            >Account</a
          >
          <span class="navbar-link" @click="toggleMenu">Menu</span>
        </div>
      </div>
    </div>
  </div>

  <div
    :class="
      isMenuOpen
        ? 'w-full min-h-screen fixed z-40 bg-black/30 backdrop-blur-[3px]'
        : ''
    "
    @click="toggleMenu"
  />
  <aside
    class="transform top-0 right-0 w-80 bg-white fixed h-full overflow-auto transition-all z-50"
    :class="isMenuOpen ? 'translate-x-0' : '-right-full'"
  >
    <ol>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
    </ol>
  </aside>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isMenuOpen: false,
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
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar-container {
  color: #171a20;
}

.navbar-link {
  @apply text-base font-medium px-4 py-1 border border-transparent cursor-pointer;
  @apply hover:bg-slate-400/30 hover:border-slate-400/30 hover:border-solid hover:rounded-md;
}

.hamburger-menu-btn {
  @apply inline-flex items-center justify-center w-20 rounded-md p-0.5 m-2.5;
  @apply bg-slate-400/30 border border-transparent border-slate-400/30 focus:outline-none;
}
</style>
