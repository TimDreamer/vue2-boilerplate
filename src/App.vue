<template>
  <div id="app">
    <nav-component />
    <router-view />
  </div>
</template>

<script>
import NavComponent from '@/components/Nav.vue'

export default {
  name: 'App',
  components: {
    NavComponent
  }
}

</script>
