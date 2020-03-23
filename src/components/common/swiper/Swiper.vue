<template>
  <div class="div-container" :class="containerStyle">
    <swiper :options="swiperOption" 
          ref="mySwiper" 
          class="swiper-container"
          @slideChangeTransitionStart="slideChangeTransitionStart"
          >
    <!-- slides -->
    <swiper-slide v-for="item in dataList" 
                  :key="item.id" 
                  class="swiper-item"
                  >
      <img :src="item.img">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: 'Swiper',
    data: function() {
      return {
        swiperOption: {
          loop : true,
          autoplay:false,
          effect : 'fade',
          pagination: {
            el: '.swiper-pagination',
            clickable :true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
        dataList: [
          {
            id:1,
            img:require('@/assets/img/swiper1.png')
          },
          {
            id:2,
            img:require('@/assets/img/swiper2.png')
          },
          {
            id:3,
            img:require('@/assets/img/swiper3.png')
          },{
            id:4,
            img:require('@/assets/img/swiper4.png')
          }
        ],
        containerStyle: 'bgcolor1'
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods: {
      slideChangeTransitionStart() {
        let len = this.dataList.length;
        let index = this.swiper.activeIndex <= len ? this.swiper.activeIndex : this.swiper.activeIndex - len;
        if (index === 0) {
          index = len;
        }

        this.containerStyle = 'bgcolor' + index;
      },
    }
  }
</script>
<style scoped>
  .div-container {
    width: 100%;
    position: absolute;
    top: calc(var(--main-bar-height) * 2);
    z-index: -1;
  }
  .swiper-container {
    width: 70%;
    height: 100%;
  }
  .swiper-pagination-bullet-active {
    background: red
  }
  .swiper-item {
    width: 100%;
    height: 100%;
  }
  .swiper-button-prev {
    position: absolute;
    bottom: 50%;
    left: 23%;
  }
  .swiper-button-next {
    position: absolute;
    bottom: 50%;
    right: 0;
  }
  .bgcolor1 {
    background-color: rgb(255, 204, 102);
  }
  .bgcolor2 {
    background-color: rgb(69, 143, 226)
  }
  .bgcolor3 {
    background-color: rgb(66, 68, 157)
  }
  .bgcolor4 {
    background-color: rgb(69, 103, 165)
  }
</style>
