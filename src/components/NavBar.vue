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
            class="menu-btn"
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
            v-for="route of navbarLinks"
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
    <div class="flex flex-col">
      <div class="flex justify-end menu-header m-7">
        <button
          type="button"
          class="rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          @click="toggleMenu"
        >
          <span class="sr-only">Close menu</span>
          <!-- Heroicon name: outline/x-mark -->
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="flex px-8">
        <ol class="w-full">
          <li
            v-for="menuOption of menuLinks"
            :key="menuOption.label"
            class="menu-link"
          >
            <a target="_blank" :href="menuOption.link">
              {{ menuOption.label }}
            </a>
          </li>
          <li>
            <div class="flex menu-link">
              <div class="flex justify-between">
                <div>
                  <svg
                    class="tds-icon tds-icon-globe w-6 h-6"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM9.254 20.047a8.147 8.147 0 0 1-.768-1.378c-.404-.91-.722-1.985-.935-3.169h-3.3a8.526 8.526 0 0 0 5.003 4.547Zm.603-1.988c.336.757.718 1.324 1.103 1.69.382.364.732.501 1.04.501.308 0 .658-.137 1.04-.5.385-.367.767-.934 1.103-1.69.321-.723.588-1.59.78-2.56H9.076c.192.97.459 1.837.78 2.56ZM8.75 12c0 .691.036 1.36.103 2h6.294c.067-.64.103-1.309.103-2 0-.691-.036-1.36-.103-2H8.853c-.067.64-.103 1.309-.103 2Zm-1.405-2H3.737a8.522 8.522 0 0 0-.237 2c0 .689.082 1.359.237 2h3.608a20.75 20.75 0 0 1 0-4Zm1.732-1.5h5.845c-.19-.97-.458-1.837-.779-2.56-.336-.756-.718-1.323-1.103-1.69-.382-.363-.732-.5-1.04-.5-.308 0-.658.137-1.04.5-.385.367-.767.934-1.103 1.69-.321.723-.588 1.59-.78 2.56Zm7.577 1.5a20.728 20.728 0 0 1 0 4h3.61a8.52 8.52 0 0 0 .236-2 8.52 8.52 0 0 0-.237-2h-3.609Zm3.094-1.5a8.526 8.526 0 0 0-5.002-4.547c.287.408.543.873.768 1.378.404.91.722 1.985.935 3.169h3.3Zm-12.197 0c.213-1.184.531-2.26.935-3.169.225-.505.48-.97.768-1.378A8.526 8.526 0 0 0 4.252 8.5h3.3Zm7.963 10.169c-.225.505-.48.97-.768 1.378a8.526 8.526 0 0 0 5.002-4.547h-3.3c-.212 1.184-.53 2.26-.934 3.169Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div class="px-2">
                  <span class="w-full"
                    ><strong class="font-medium">United States</strong
                    ><br /><span class="text-sm text-gray-700"
                      >English</span
                    ></span
                  >
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isMenuOpen: false,
      menuLinks: [
        {
          label: "Model S",
          link: "https://www.tesla.com/models",
          navbar: true,
        },
        {
          label: "Model 3",
          link: "https://www.tesla.com/model3",
          navbar: true,
        },
        {
          label: "Model X",
          link: "https://www.tesla.com/modelx",
          navbar: true,
        },
        {
          label: "Model Y",
          link: "https://www.tesla.com/modely",
          navbar: true,
        },
        {
          label: "Solar Roof",
          link: "https://www.tesla.com/solarroof",
          navbar: true,
        },
        {
          label: "Solar Panels",
          link: "https://www.tesla.com/solarpanels",
          navbar: true,
        },
        {
          label: "Existing Inventory",
          link: "https://www.tesla.com/inventory/new/my",
        },
        {
          label: "Used Inventory",
          link: "https://www.tesla.com/inventory/used/m3",
        },
        {
          label: "Trade-In",
          link: "https://www.tesla.com/tradein",
        },
        {
          label: "Demo Drive",
          link: "https://www.tesla.com/drive",
        },
        {
          label: "Insurance",
          link: "https://www.tesla.com/insurance",
        },
        {
          label: "Cybertruck",
          link: "https://www.tesla.com/cybertruck",
        },
        {
          label: "Roadster",
          link: "https://www.tesla.com/roadster",
        },
        {
          label: "Semi",
          link: "https://www.tesla.com/semi",
        },
        {
          label: "Charging",
          link: "https://www.tesla.com/charging",
        },
        {
          label: "Powerwall",
          link: "https://www.tesla.com/powerwall",
        },
        {
          label: "Commercial Energy",
          link: "https://www.tesla.com/commercial",
        },
        {
          label: "Utilities",
          link: "https://www.tesla.com/utilities",
        },
        {
          label: "Find Us",
          link: "https://www.tesla.com/findus",
        },
        {
          label: "Support",
          link: "https://www.tesla.com/support",
        },
        {
          label: "Investor Relations",
          link: "https://ir.tesla.com/",
        },
      ],
    };
  },

  computed: {
    navbarLinks() {
      return this.menuLinks.filter(link => link.navbar === true);
    },
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
  @apply hover:bg-slate-400/20 hover:border-slate-400/20 hover:border-solid hover:rounded-md;
}

.menu-link {
  @apply text-left px-4 py-2 border border-transparent cursor-pointer;
  @apply hover:bg-slate-400/20 hover:border-slate-400/20 hover:border-solid hover:rounded-md;
}

.menu-btn {
  @apply inline-flex items-center justify-center w-20 rounded-md p-0.5 m-2.5;
  @apply bg-slate-400/30 border border-transparent border-slate-400/30 focus:outline-none;
}
</style>
