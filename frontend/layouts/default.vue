<template>
  <div>
    <Header />
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style="min-height: 75vh;"
      >
        <nuxt />
      </div>
    </main>
  </div>
</template>
<script>
import Header from '@/components/Header'

export default {
  components: {
    Header
  }
}
</script>
