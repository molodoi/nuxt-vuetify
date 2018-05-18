<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <h1>You are Secure</h1>
    <v-btn to="/" variant="success">Callback</v-btn>
  </div>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>
<style scoped>
</style>