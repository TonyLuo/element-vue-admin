<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="item in $store.state.layout.currentPath"
                        :to="item.name"
                        :key="item.name">{{item.title}}</el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
  </el-breadcrumb>
  <!--<el-breadcrumb separator="/">-->
    <!--<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
    <!--<el-breadcrumb-item-->
      <!--v-for="item in $store.state.layout.currentPath"-->
      <!--:to="item.name"-->
      <!--:key="item.name">-->
      <!--{{item.title}}-->
    <!--</el-breadcrumb-item>>-->
  <!--</el-breadcrumb>-->

</template>
<style scoped>


</style>
<script>
  export default {
    name: 'breadcrumb',
    props: {},
    data () {
      return {}
    }

  }
</script>
