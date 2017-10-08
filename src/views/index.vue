<template>
  <span style="z-index: 11">
    <div class="left col"  :class="{ collapse: isCollapse }">
      <div class="header row " style="text-align: center" :style="{width: isCollapse?'64px':'auto'}">
        <a v-if="!isCollapse" href="https://github.com/TonyLuo/element-vue-admin" style="color: white;size: 40px">
          <i class="fa fa-github"></i>
        </a>
        <span :class="[isCollapse ? 'text-alight-center' : 'floating-right']" @click="toggleClick">
            <i class="fa fa-bars" color="white" ></i>
        </span>
      </div>

      <div class="body row scroll-y" style="top:40px">
        <sidebar :isCollapse="isCollapse" theme="dark"></sidebar>
      </div>

    </div>
    <div class="right col body" :style="{left: isCollapse?'64px':'200px'}">
      <ceiling></ceiling>
      <tabs class="layout-tabs"></tabs>
      <breadcrumb class="layout-breadcrumb"></breadcrumb>

      <div class="body row scroll-y" style="padding: 1em">
        <router-view></router-view>
      </div>
    </div>
    </span>
</template>

<style>
  @import "./layout/css/layout.css";
  @import "../styles/dark.theme.css";
  /*@import "../styles/chalk.theme.css";*/

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

</style>


<script>
  import ceiling from './layout/ceiling.vue'
  import sidebar from './layout/sidebar.vue'
  import breadcrumb from './layout/breadcrumb.vue'
  import tabs from './layout/tabs.vue'

  export default {
    components: {
      sidebar,
      ceiling,
      breadcrumb,
      tabs
    },
    data () {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }
      return {
        tableData: Array(20).fill(item),
        isCollapse: false
      }
    },
    methods: {
      init () {
        this.$store.dispatch('initial', {})

      },
      toggleClick () {
        this.isCollapse = !this.isCollapse
      }
    },
    watch: {},
    mounted () {
      this.init()
    }
  }
</script>

