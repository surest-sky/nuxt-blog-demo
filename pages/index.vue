<template>

</template>
<script>
  export default {
      name: 'index',
      methods: {
          redirect() {
              this.$router.push('/home')
          }
      },
      created() {
          this.redirect()
      }
  }
</script>
