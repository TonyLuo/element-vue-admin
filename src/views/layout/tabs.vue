<template>
    <span>

      <span :key="item.name" v-for="(item, index) in  itemList">
        <el-tag :hit="false" :closable="item.name ===  currentPageName"
                :type="item.name ===  currentPageName ? '' : 'info'"
                @click.native="linkTo(item.name)"
                style="margin:2px" color="#fff"
                @close="removeTab(item, index)">{{item.title}}</el-tag>
      </span>

    </span>

  <!--<el-tabs id="tabs-nav" v-model="currentPageName" type="border-card" closable @tab-remove="removeTab">-->
  <!--<el-tab-pane-->
  <!--:key="item.name"-->
  <!--v-for="(item, index) in  $store.state.layout.pageOpenedList"-->
  <!--:label="item.title"-->
  <!--:name="item.name"-->
  <!--&gt;-->
  <!--{{item.content}}-->
  <!--</el-tab-pane>-->
  <!--</el-tabs>-->
</template>
<style>

  /* Hide close button for home page */
  #tabs-nav .ivu-tabs-nav > div:nth-child(2) > i {
    display: none
  }

  #tabs-nav > div.el-tabs__header > div > div.el-tabs__nav-scroll > div > div > span {

  }
</style>
<script>
  export default {
    name: 'tabs',
    props: {},
    data () {
      return {
        currentPageName: '',
//        itemList: this.$store.state.layout.pageOpenedList.slice()
      }
    },
    watch: {
      '$route' (to, from) {
        this.currentPageName = to.name
//        console.log(`from:${from.name} to:${to.name}`)

      },
      currentPageName () {
//        let currentPage = this.currentPageName
//        //redirect to home when close all tab
//        if (this.currentPageName === -1) {
//          currentPage = 'home'
//        }

//        this.$router.push({
//          name: currentPage
//
//        })
      }
    },
    computed: {
      itemList() {
        return this.$store.state.layout.pageOpenedList.slice()
      }
    },
    methods: {
      init () {
        this.currentPageName = this.$route.name

      },
      onClick (item) {
        console.log(item)
//        this.$set(item, 'activated', true)
//        item.activated = true;
      },
      removeTab (item, index) {
//        console.log(this.itemList[index -1].name)
//        if(item.name ===  this.currentPageName){
//          this.currentPageName = this.itemList[index -1].name;
//
//        }
        this.$store.dispatch('removeTab', item.name).then(()=>{
          this.$router.push({
            name: this.itemList[this.itemList.length -1].name

          })
            this.currentPageName = this.itemList[index -1].name


          }

        )
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
