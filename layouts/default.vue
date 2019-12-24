<template>
  <div>
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
  import Navbar from './nav/nav'
  export default {
      components: {
          Navbar
      }
  }
</script>
