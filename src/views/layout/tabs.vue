<template>
    <span>
        <el-tag :closable="index !== 0" :key="item.name" v-for="(item, index) in  itemList"
                :type="item.name ===  currentPageName ? '' : 'info'"
                @click.native="onClick(item)"
                style="margin:2px;cursor : pointer;" color="#fff"
                @close="removeTab($event,item, index)">{{item.title}}</el-tag>
    </span>
</template>
<style>
  .el-tag{
    background-color: #f8f8f9 !important;

  }
  .el-tag--info{
    background-color: #eee !important;

  }
</style>
<script>
  export default {
    name: 'tabs',
    props: {},
    data () {
      return {
        currentPageName: '',
      }
    },
    watch: {
      '$route' (to, from) {
        this.currentPageName = to.name

      },
      currentPageName () {
        let currentPage = this.currentPageName
//        //redirect to home when close all tab
        if (this.currentPageName === -1) {
          currentPage = 'home'
        }

        this.linkTo(currentPage)
      }
    },
    computed: {
      itemList () {
        return this.$store.state.layout.pageOpenedList.slice()
      }
    },
    methods: {
      init () {
        this.currentPageName = this.$route.name

      },
      onClick (item) {
        this.linkTo(item.name)
      },
      removeTab (event, item, index) {
        event.stopPropagation()
        if (item.name === this.currentPageName && index !== 0) {
          this.currentPageName = this.itemList[index - 1].name

        }
        this.$store.dispatch('removeTab', item.name)
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
