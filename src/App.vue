<template>
  <div id="app">
    <nav-component />
    <transition name="slide-fade" mode="out-in">
      <router-view class="view" />
    </transition>
  </div>
</template>

<script>
import NavComponent from '@/components/Nav.vue'

export default {
  name: 'App',
  components: {
    NavComponent,
  },
}
</script>

<style lang="sass">
html
  margin: 0
  padding: 0
  box-sizing: border-box

#app
  display: flex
  flex-direction: column

.view
  margin: auto

.slide-fade
  &-enter
    transform: translateX(10px)
    opacity: 0
  &-leave-to
    transform: translateX(-10px)
    opacity: 0
  &-enter-active, &-leave-active
    transition: all 0.2s ease
</style>
