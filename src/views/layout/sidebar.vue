<template>
  <span>
    <el-menu
             :default-active="currentPageName"
             class="el-menu-vertical-demo disabled-animation"
             @open="handleOpen"
             @close="handleClose"
             :router="true"
             :collapse="isCollapse"
             :class="{'hide-sidebard-text': isCollapse}">
      <template v-for="item in $store.state.layout.menuList">
        <el-menu-item v-if="!item.children" :index="item.name" :route="item"  :key="item.path">
          <i class="el-icon-menu" :key="item.path"></i>
          <span class="sidebar-menu-text" :key="item.path" slot="title">{{ item.title }}</span>
        </el-menu-item>

        <el-submenu :index="item.name" v-if="item.children && item.children.length > 0" :key="item.path">
          <template slot="title">
            <i class="el-icon-message"></i>
            <span class="sidebar-menu-text">{{ item.title }}</span>
          </template>
          <el-menu-item :index="child.name"  :route="child" :key="child.name" v-for="child in item.children">
            <i class="el-icon-menu" :key="child.path"></i>
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
      }
    },
    watch: {
      '$route' (to) {
        this.currentPageName = to.name
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
      changeMenu (menuName) {
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
