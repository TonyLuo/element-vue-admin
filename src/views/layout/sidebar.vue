<template>
  <span id="sidebar">
    <el-menu
             :default-active="currentPageName"
             :default-openeds="openedMenuList"
             class="el-menu-vertical-demo disabled-animation"
             @open="handleOpen"
             @close="handleClose"
             @select="selectMenu"
             text-color="#C8C8C8"
             active-text-color="#2d8cf0"
             background-color="#464c5b"

             :collapse="isCollapse"
             :class="{'hide-sidebard-text': isCollapse}">
      <template v-for="item in menuList">
        <el-menu-item v-if="!item.children" :index="item.name" :route="item"  :key="item.path">
          <i :class="item.icon" :key="item.path" style="width:24px"></i>
          <span class="sidebar-menu-text" :key="item.path" slot="title">{{ item.title }}</span>
        </el-menu-item>

        <el-submenu :index="item.name" v-if="item.children && item.children.length > 0" :key="item.path">
          <template slot="title">
          <i :class="item.icon" :key="item.path" style="width:24px"></i>
            <span class="sidebar-menu-text">{{ item.title }}</span>
          </template>
          <el-menu-item :index="child.name"  :route="child" :key="child.name" v-for="child in item.children">
          <i :class="item.icon" :key="item.path" style="width:24px"></i>
            <span class="sidebar-menu-text" :key="child.name" slot="title">{{ child.title }}</span>

          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>

  </span>
</template>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  /*.hide-sidebard-text .sidebar-menu-text {*/
    /*display: none;*/
  /*}*/

  /*.hide-sidebard-text i.ivu-menu-submenu-title-icon {*/
    /*display: none;*/
  /*}*/


</style>
<script>
  import { appRouter } from '../../router'

  export default {
    name: 'sidebar',
    props: {
      theme: {type: String, default: 'dark'},
      isCollapse: {type: Boolean, default: false}
    },
    data () {
      return {
        currentPageName: null,
        openedMenuList: []
      }
    },
    computed: {
      iconSize () {
        return 14
      },
      menuList () {
        return this.$store.state.layout.menuList.slice()
      }
    },
    watch: {
      '$route' (to, from) {
        this.currentPageName = to.name
        console.log(`sidebar from:${from.name} to:${to.name}`)

      },
      currentPageName () {
        if (this.$store.state.layout.ready) {
          this.setCurrentPath()
        } else {
          //setTimeout : wait for store state ready when force refresh
          setTimeout(() => {this.setCurrentPath()}, 100)
        }

      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      init () {
        this.currentPageName = this.$route.name
      },
      setCurrentPath () {
        this.$store.dispatch('openTab', this.currentPageName)
        this.$store.dispatch('setCurrentPath', this.currentPageName).then(() => {
          this.openedMenuList = this.$store.state.layout.openedMenuNameList.slice()
          this.$nextTick(() => {
//            this.$refs.sideMenu.updateOpened()
//            this.$refs.sideMenu.updateActiveName()
          })
        })

      },
      selectMenu (menuName) {
        console.log(menuName)
        this.currentPageName = menuName
        this.$router.push({
          name: menuName
        })
      }
    },
    mounted () {
      this.init()
    }

  }
</script>
