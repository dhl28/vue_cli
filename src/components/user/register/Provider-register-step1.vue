//
Created by douhongliang on 2017/6/27.

<template>
  <div class="content">
    <div class="form-group">
      <input type="text" class="form-control" placeholder="输入您的昵称">
    </div>
    <div class="form-group control-phone">
      <input type="text" class="form-control" placeholder="输入您的手机号码">
      <button class="btn btn-get-code">获取验证码</button>
    </div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="输入验证码">
    </div>

    <div class="form-group">
      <button type="button" class="btn btn-next" @click="toStep2()">>>继续</button>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'providerRegisterStep1',
    data () {
      return {
        msg: '饭主注册'
      }
    },
    methods: {
      toStep2: function () {
        console.log(this.$route)
        this.$router.push({name: 'ProviderRegisterStep2'})
      }
    },
    mounted () {
      this.setDocumentTitle('饭主注册')
    }
  }
</script>

<style scoped>
  .content {
    padding: 0.6rem 1.2rem;
  }

  .form-group {
    margin-top: 0.3rem;
  }

  .form-control {
    display: block;
    width: 5rem;
    height: 0.4533333333333333rem;
    padding: 0.08rem 0.16rem;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 0.013333333333333334rem solid #ccc;
    border-radius: 0.1333rem;
  }

  .btn {
    display: inline-block;
    padding: 0.08rem 0.16rem;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 0.1333rem;
  }

  [data-dpr="2"] .btn {
    font-size: 24px;
  }

  [data-dpr="3"] .btn {
    font-size: 36px;
  }

  .btn-next {
    margin-top: 0.6rem;
    background-color: #ff7043;
    padding: 0.1rem 0.4rem;
    color: #ffffff;
  }

  .control-phone {
    position: relative;
  }

  .btn-get-code {
    display: inline-block;
    color: #ffffff;
    background-color: #78909c;
    position: absolute;
    top: 0px;
    left: 5.7rem;
  }
</style>
