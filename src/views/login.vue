<template>
  <div class="content has-text-centered">
    <h2 class="is-title is-bold">商品房预售款专用帐户管理系统</h2>

    <div class="columns is-vcentered">
      <div class="column is-6 is-offset-3">
        <div class="box">
          <div v-show="error" style="color:red; word-wrap:break-word;">{{ error }}</div>
          <form v-on:submit.prevent="login">
            <label class="label">用户</label>
            <p class="control">
              <input v-model="data.body.username" class="input" type="text" placeholder="email@example.org">
            </p>
            <label class="label">密码</label>
            <p class="control">
              <input v-model="data.body.password" class="input" type="password" placeholder="password">
            </p>

            <p class="control">
              <el-checkbox v-model="data.rememberMe" @change="onChangeRememberMe">记住我</el-checkbox>

            </p>

            <hr>
            <p class="control">
              <button type="submit" class="button is-primary">登录</button>
              <button class="button is-default">取消</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {

    data () {
      return {
        data: {
          body: {
            username: 'admin',
            password: 'admin'
          },
          rememberMe: false
        },
        error: null
      }
    },
    mounted () {
      if (localStorage.getItem('rememberMe') === 'true') {
        this.$set(this.data, 'rememberMe', true)
      }

      // Can set query parameter here for auth redirect or just do it silently in login redirect.
    },
    methods: {
      login () {

      },
      onChangeRememberMe(rememberMe){
        console.log(this.data.rememberMe);
      }
    }


  }
</script>

<style lang="less" scoped>
  .is-title {
    text-transform: capitalize;
  }
</style>
