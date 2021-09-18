<template>
  <div class="spec-preview">
    <img src="../images/s1.png" />
    <div class="event" @mousemove="move">
      <!-- <img :src="defaultImg" /> -->
    </div>
    <div class="big">
      <img src="../images/s1.png" ref="big" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: 'Zoom',
  props: ['ImgList'],
  data() {
    return {
      defaultIndex: 0
    }
  },
  methods: {
    move(event) {
      /* 这里的放大镜思路是这样的:
        先拿到鼠标在当前元素的X,Y值,然后在拿到mask阴影层,mask的X,Y通过鼠标在当前元素的位置减去mask自身宽度/2
        然后再通过style设置回mask,通过判断一下临界值,如果maskX小于0了的话就等于0设置回去,大于了宽度了的话,就设置为最大宽度
        maskY小于0了的话就等于0设置回去,大于了高度了的话,就设置为最大高度就不会出去了,
        设置大图的时候就拿到当前大图,设置left和top,都是反着mask移动,因为比列,所以 *2
      */
      let mouseX = event.offsetX //鼠标到当前元素左边的位置
      let mouseY = event.offsetY
      let mask = this.$refs.mask
      let big = this.$refs.big
      let maskX = mouseX - mask.offsetWidth / 2
      let maskY = mouseY - mask.offsetHeight / 2
      if (maskX < 0) maskX = 0
      else if (maskX > mask.offsetWidth) maskX = mask.offsetWidth
      if (maskY < 0) maskY = 0
      else if (maskY > mask.offsetHeight) maskY = mask.offsetHeight
      mask.style.left = maskX + 'px'
      mask.style.top = maskY + 'px'
      big.style.left = -maskX * 2 + 'px'
      big.style.top = -maskY * 2 + 'px'
    }
  },
  computed: {
    defaultImg() {
      return this.ImgList[this.defaultIndex].imgUrl || {} //解决假报错
    }
  },
  mounted() {
    this.$bus.$on('syncDefaultIndex', (index) => (this.defaultIndex = index))
  },
  beforeDestroy() {
    this.$bus.$off(['syncDefaultIndex']) //不传就是所有事件,传多个就传数组
  }
}
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>