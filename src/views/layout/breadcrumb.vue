<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="item in currentPath"
                        :to="item.name"
                        :key="item.name">{{item.title}}</el-breadcrumb-item>
  </el-breadcrumb>


</template>
<style scoped>


</style>
<script>
  export default {
    name: 'breadcrumb',
    props: {},
    data () {
      return {}
    },
    computed: {
      currentPath () {
        return this.$store.state.layout.currentPath.slice()
      }
    }

  }
</script>
