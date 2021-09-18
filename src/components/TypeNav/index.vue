<template>
  <div class="type-nav">
    <div class="container">
      <!-- 移出这个盒子,就把当前状态索引设置为-1 就不会有任何元素变色也不能引起二级分类显示 -->
      <div @mouseleave="hideFirst" @mouseenter="showFirst">
        <h2 class="all">全部商品分类</h2>
        <transition name="slide">
          <div class="sort" v-show="isShowFirst">
            <div class="all-sort-list2" @click="toSearch">
              <!-- 定义一个下标,鼠标移入的时候把当前索引值传给方法,方法设置给状态,给每个分类都加上样式
            前提是状态索引==当前元素索引就会显示下面的二级分类
            你移动鼠标到当前元素的时候已经把当前元素的索引设置给了状态里的索引值,然后==就可以实现变色以及显示二级分类了
             -->
              <div
                class="item bo"
                v-for="(c1, index) in categorise"
                :key="c1.Id"
                :class="{ active: currentIndex == index }"
                @mouseenter="showSubList(index)"
              >
                <h3>
                  <a
                    href="javascript:"
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                  <!--  声明式导航 创造了太多route对象了会导致满 <router-link
                :to="`/search?categoryName=${c1.categoryName}&categoryId=${c1.categoryId}`"
                >{{ c1.categoryName }}</router-link
              > -->

                  <!--  编程式路由导航
              <a
                @click="
                  $router.push({
                    path: '/search',
                    query: {
                      categoryName: c1.categoryName,
                      categoryId: c1.categoryId
                    }
                  })
                "
                href="javascript:"
                >{{ c1.categoryName }}</a
              > -->
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl
                      class="fore"
                      v-for="c2 in c1.categoryChild"
                      :key="c2.categoryId"
                    >
                      <dt>
                        <a
                          href="javascript:"
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                        <!--   声明式导航<router-link
                      :to="`/search?categoryName=${c2.categoryName}&categoryId=${c2.categoryId}`"
                      >{{ c2.categoryName }}</router-link
                    > -->
                        <!--  编程式路由导航 <a
                      @click="
                        $router.push({
                          path: '/search',
                          query: {
                            categoryName: c2.categoryName,
                            categoryId: c2.categoryId
                          }
                        })
                      "
                      href="javascript:"
                      >{{ c2.categoryName }}</a
                    > -->
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a
                            href="javascript:"
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                          <!-- 声明式导航<router-link
                        :to="`/search?categoryName=${c3.categoryName}&categoryId=${c23categoryId}`"
                        >{{ c3.categoryName }}</router-link
                      > -->
                          <!--  编程式路由导航<a
                        @click="
                          $router.push({
                            path: '/search',
                            query: {
                              categoryName: c3.categoryName,
                              categoryId: c3.categoryId
                            }
                          })
                        "
                        href="javascript:"
                        >{{ c3.categoryName }}</a
                      > -->
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import _ from 'lodash' 完整引入
import throttle from 'lodash/throttle'
export default {
  name: 'TypeNav',
  data() {
    const path = this.$route.path
    return {
      currentIndex: -1,
      isShowFirst: path == '/' ? true : false
    }
  },
  methods: {
    showFirst() {
      // 鼠标移入,改变状态显示一级列表
      this.currentIndex = -1
      this.isShowFirst = true
    },
    hideFirst() {
      // 鼠标移出,改变状态隐藏一级列表
      this.currentIndex = -2
      if (this.$route.path == '/search') this.isShowFirst = false
      else if (this.$route.path == '/detail/1') this.isShowFirst = false
    },
    //显示指定下标的子分类列表 这个事件的监听函数调用得频率太高
    showSubList: throttle(
      function (index) {
        if (this.currentIndex !== -2) this.currentIndex = index
      },
      500 /* ,
      { trailing: false 最后一次回调不延迟调用} */
    ),
    //跳转到搜索
    toSearch({ target }) {
      const { category1Id, categoryname, category2Id, category3Id } =
        target.dataset
      if (categoryname) {
        this.$router.push({
          path: '/search',
          query: { categoryname, category2Id, category3Id, category1Id }
        })
        this.hideFirst()
      }
    }
  },
  computed: {
    /*  categorise() { 纯手写
      return this.$store.state.home.categorise
    } */
    //映射  对象形式
    // ...mapState({ categorise: (state) => state.home.categorise })
    // 数组形式
    ...mapState('home', ['categorise'])
  }
}
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      &.slide-enter-active {
        transition: all 0.2s ease;
        &.slide-enter {
          height: 0;
        }
        &.slide-enter-to {
          height: 461px;
        }
      }
      &.slide-leave-active {
        transition: all 0.2s ease;
        &.slide-leave {
          height: 461px;
        }
        &.slide-leave-to {
          height: 0;
        }
      }
      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.active {
            background-color: #ccc;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>