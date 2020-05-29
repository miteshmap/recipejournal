<template>
  <h1 v-if="error.statusCode === 404">
    Page not found
  </h1>
  <h1 v-else>An error occurred</h1>
</template>

<script>
export default {
  props: ['error'],
  layout: 'my-error-layout'
}
</script>
