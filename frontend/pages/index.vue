<template>
  <section class="lg-mt-0">
    <b-container>
      <logo />
      <h1 class="title">
        Recipe journal
      </h1>
      <h2 class="subtitle">
        Your recipe journal
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </b-container>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
