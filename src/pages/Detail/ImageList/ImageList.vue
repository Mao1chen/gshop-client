<template>
  <swiper :options="swiperContainer" class="swiperContainer">
    <swiper-slide
      class="swiper-slide"
      v-for="(item, index) in ImgList"
      :key="item.id"
    >
      <img
        src="../images/s1.png"
        @click="changeCurrentIndex(index)"
        :class="{ active: currentIndex == index }"
    /></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
export default {
  name: 'ImageList',
  props: ['ImgList'],
  data() {
    return {
      swiperContainer: {
        /*  direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true, //自动播放
        disableOnInteraction: false, //用户操作后是否停止自动轮播 */
        // 如果需要分页器
        /*  pagination: {
          el: '.swiper-pagination'
        }, */
        slidesPerView: 5, //一组轮播图多少个
        slidesPerGroup: 3, //每次点击切换几张
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      currentIndex: 0
    }
  },
  methods: {
    changeCurrentIndex(index) {
      if (this.currentIndex == index) this.currentIndex = 0
      else {
        this.currentIndex = index
        this.$bus.$emit('syncDefaultIndex', index)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.swiperContainer {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;
  .swiper-slide {
    width: 53px;
    height: 53px;
    img {
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      /*      &:hover {
        border: 2px solid #f60;
        padding: 1px;
      } */
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>