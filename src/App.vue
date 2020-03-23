<template>
  <div id="app">
    <router-view class="app-content"></router-view>
  </div>
</template>

<script>
import MainBar from '@/components/content/mainBar/MainBar.vue'

export default {
  name: 'App',
  components: {
    MainBar
  }
}
</script>

<style>
  @import './assets/css/base.css';
</style>
