<template>
  <nav class="flex flex-wrap bg-white border-b border-gray-600 p-2 items-center justify-between">
    <div class="flex flex-shrink-0 text-white mr-6 items-center ">
      <img src="~/static/recipe-book-logo.png" width="50"/>
      <span class="font-semibold text-xl tracking-tight text-indigo-500">Recipe book</span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-indigo-500 border-indigo-400 hover:text-white hover:border-white"
        @click="toggleNavbar()"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
          <title> Menu </title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>
    </div>
    <div
      class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
      :class="{'hidden': !showMenu, 'block mr-auto lg:flex-row': showMenu}"
    >
      <div class="text-sm lg:flex-grow">
        <nuxt-link to="/recipes" class="block mt-4 lg:inline-block lg:mt-0 text-xs uppercase font-bold lg:hover:text-gray-300 text-gray-800">
          Recipes
        </nuxt-link>
        <nuxt-link to="/recipes" class="block mt-4 lg:inline-block lg:mt-0 text-xs uppercase font-bold lg:hover:text-gray-300 text-gray-800">
          chefs
        </nuxt-link>
        <nuxt-link to="/blog" class="block mt-4 lg:inline-block lg:mt-0 text-xs uppercase font-bold lg:hover:text-gray-300 text-gray-800">
          Blog
        </nuxt-link>
        <nuxt-link to="/tips-tricks" class="block mt-4 lg:inline-block lg:mt-0 text-xs uppercase font-bold lg:hover:text-gray-300 text-gray-800">
          Tips n Treaks
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu;
    }
  }
}
</script>