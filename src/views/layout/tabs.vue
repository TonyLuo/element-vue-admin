<template>
  <el-tabs id="tabs-nav" v-model="currentPageName" type="border-card" closable @tab-remove="removeTab">
    <el-tab-pane
      :key="item.name"
      v-for="(item, index) in  $store.state.layout.pageOpenedList"
      :label="item.title"
      :name="item.name"
    >
      {{item.content}}
    </el-tab-pane>
  </el-tabs>
</template>
<style>

  /* Hide close button for home page */
  #tabs-nav .ivu-tabs-nav > div:nth-child(2) > i {
    display: none
  }
  #tabs-nav > div.el-tabs__header > div > div.el-tabs__nav-scroll > div > div > span{

  }
</style>
<script>
  export default {
    name: 'tabs',
    props: {},
    data () {
      return {
        currentPageName: ''
      }
    },
    watch: {
      '$route' (to) {
        this.currentPageName = to.name
      },
      currentPageName () {
        let currentPage = this.currentPageName
        //redirect to home when close all tab
        if (this.currentPageName === -1) {
          currentPage = 'home'
        }

        this.$router.push({
          name: currentPage
        })
      }
    },
    methods: {
      init () {
        this.currentPageName = this.$route.name
      },
      removeTab (name) {
        this.$store.dispatch('removeTab', name)
      },
      linkTo (name) {
        this.$router.push({
          name: name
        })
      }
    },
    mounted () {
      this.init()
    }
  }
</script>
