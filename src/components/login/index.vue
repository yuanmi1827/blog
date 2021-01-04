<template>
  <div class="layui-container">
    <form class="layui-form layui-form-pane" action>
      <div class="layui-form-item">
        <label class="layui-form-label">用户名</label>
        <div class="layui-input-inline">
          <input type="text" name="name" placeholder="请输入用户名" 
          v-validate="required|email"
          autocomplete="off" class="layui-input">
        </div>
        <div class="error layui-form-mid">{{errors.first('name')}}</div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">密码</label>
        <div class="layui-input-inline">
          <input type="password" name="" placeholder="请输入密码" autocomplete="off" class="layui-input">
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">验证码</label>
        <div class="layui-input-inline">
          <input type="text" name="" placeholder="请输入验证码" autocomplete="off" class="layui-input">
        </div>
        <div class="layui-form-mid svg"  v-html="captcha" @click="getCaptcha()"></div>
      </div>
      <button class="layui-btn">登录</button>
      <a href="http://www.baidu.com"  class="f-password">忘记密码</a>
    </form>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getCaptcha} from 'api'
  export default {
    name: 'Login',
    data() {
      return {
        captcha: ''
      }
    },
    mounted() {
      this.getCaptcha()
    },
    methods: {
      async getCaptcha() {
        let result = await getCaptcha()
        if(result.code === 0 ) {
          this.captcha = result.data
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .layui-container 
    background-color #ffffff
  input 
    width 190px
  .f-password
    margin-left 15px
    &:hover
      color  #009688
  .svg
    position relative
    top -15px

</style>
