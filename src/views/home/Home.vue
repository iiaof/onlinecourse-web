<template>
  <div class="home-container">
    <HomeHead></HomeHead>
    <HomeCourse></HomeCourse>
    <Swiper></Swiper>
  </div>
</template>

<script>
  import Swiper from '@/components/common/swiper/Swiper.vue'
  import HomeHead from './components/HomeHead.vue'
  import HomeCourse from './components/HomeCourse.vue'

  export default {
    name:'Home',
    components: {
      Swiper,
      HomeHead,
      HomeCourse
    },
    methods: {
      
    }
  }
</script>

<style scoped>
  .home-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>