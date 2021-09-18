<template>
  <div>
    <Header />
    <router-view></router-view>
    <!-- 下面footer组件是否显示，取决于插入这个路由视图的组件meta标签的那个值，true就是不显示，取了反 -->
    <Footer v-show="!$route.meta.isShowFooter" />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: { Header, Footer },
  mounted() {
    this.$store.dispatch('home/getCategoryList')
  }
}
</script>

<style>
</style>