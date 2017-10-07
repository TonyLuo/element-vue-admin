<template>
  <div class="layout-ceiling">

    <el-dropdown trigger="hover" style="float: right">
      <span class="el-dropdown-link avatar"><img src="https://i.loli.net/2017/08/21/599a521472424.jpg" /> </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>我的消息</el-dropdown-item>
        <el-dropdown-item>设置</el-dropdown-item>
        <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div class="layout-ceiling-main align-middle" >
      <a href="#/login">注册登录</a>
      <a href="#">帮助中心</a>
      <a href="#">安全中心</a>
      <a href="#">服务大厅</a>

    </div>



  </div>
</template>
<style scoped >
  .layout-ceiling {
    background: #464c5b;
    /*padding: 10px 0;*/
    height: 40px;
    overflow: hidden;
  }

  .layout-ceiling-main {
    float: right;
  }

  .layout-ceiling-main a {
    border-left: 1px solid #cccccc;
    color: #9ba7b5;
    padding: 0 10px;
    margin: 10px 0;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    line-height: 14px;
    position: relative;
  }

  .layout-ceiling-main a:hover {
    color: #fff;
  }
  .layout-ceiling .avatar {
    float: right;
    margin-right: 1em
  }
  .layout-ceiling .avatar img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-left: 10px;
    float: right;
  }


</style>
<script>
  export default {
    name: 'ceiling',
    props: {
      itemList: Array
    }
  }
</script>
