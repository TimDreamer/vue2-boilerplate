<template>
  <nav class="nav">
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{ name: 'cards' }">Cards</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavComponent',
}
</script>

<style lang="sass">
.nav
  display: flex
  justify-content: space-around
  font-size: 32px
  font-weight: bold
  a
    color: green
    text-decoration: none

.router-link-exact-active
  color: red !important
  text-decoration: underline !important
</style>
