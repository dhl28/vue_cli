//
Created by douhongliang on 2017/6/27.

<template>
  <div class="content">
    <div class="form-group">
      <label class="control-label">头&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;像</label>
    </div>
    <div class="form-group">
      <label class="control-label">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</label>
      <input type="text" class="form-control" placeholder="输入姓名">
    </div>
    <div class="form-group">
      <label class="control-label">身份证号</label>
      <input type="text" class="form-control" placeholder="请输入您的身份证号">
    </div>
    <div class="form-group">
      <label class="control-label">出生年月</label>
      <select class="control-select select-year">
        <option>2000</option>
        <option>1999</option>
        <option>1998</option>
        <option>1997</option>
        <option>1996</option>
      </select>
      <select class="control-select select-month">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div class="form-group">
      <label class="control-label">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</label>
      <div class="control-wrapper">
        <label class="radio-inline">
          <input type="radio" name="inlineRadioOptions" value="option1">男饭主
        </label>
        <label class="radio-inline">
          <input type="radio" name="inlineRadioOptions" value="option1">女饭主
        </label>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址</label>
      <div class="control-wrapper">
        <div class="location-select-wrapper">
          <select class="control-select select-province">
            <option>北京市</option>
          </select>
          <select class="control-select select-city">
            <option>北京市</option>
          </select>
          <select class="control-select select-area">
            <option>海淀区</option>
            <option>朝阳区</option>
            <option>昌平区</option>
          </select>
        </div>
        <div class="district">
          <select class="control-select select-district">
            <option>小区1</option>
            <option>小区2</option>
            <option>小区3</option>
          </select>
          <button type="button" class="btn-location">定位</button>
        </div>
        <div class="location-detail">
          <input class="form-control" type="text" placeholder="具体到门牌号">
        </div>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label">擅长菜系</label>
      <div class="control-wrapper">
        <div>
          <select class="control-select select-expert-in">
            <option>川菜</option>
            <option>鲁菜</option>
            <option>粤菜</option>
            <option>淮扬菜</option>
            <option>云南菜</option>
          </select>
        </div>
        <div>
          <textarea class="form-control expert-in-des" rows="5" placeholder="请输入您的拿手好菜"></textarea>
        </div>
      </div>

    </div>

    <div class="form-group">
      <button type="button" class="btn btn-next">完成</button>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'providerRegisterStep2',
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .content {
    padding: 0.6rem;
  }

  .form-group {
    margin-top: 0.3rem;
  }

  .form-group:after, control-label:after, .form-control:after {
    display: table;
    content: '';
  }

  .form-group:after, control-label:after, .form-control:after {
    clear: both;
  }

  .control-label {
    display: block;
    width: 2rem;
    font-weight:500;
    float: left;
    text-align: center;
    line-height: 1.42857143;
    padding: 0.15rem 0.2rem;
  }

  .form-control {
    display: block;
    width: 5.7rem;
    height: 0.4533333333333333rem;
    padding: 0.08rem 0.16rem;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 0.013333333333333334rem solid #ccc;
    border-radius: 0.1333rem;
  }

  .control-select {
    display: block;
    height: 0.6133333333333333rem;
    padding: 0.08rem 0.16rem;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 0.013333333333333334rem solid #ccc;
    border-radius: 0.1333rem;
  }

  .select-year {
    float: left;
    width: 3.7rem;
    margin-right: 0.32rem;

  }

  .select-month {
    float: left;
    width: 2rem;
  }

  .checkbox-inline, .radio-inline {
    position: relative;
    display: inline-block;
    padding-left: 20px;
    margin-bottom: 0;
    font-weight: 400;
    vertical-align: middle;
    cursor: pointer;
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

  .control-wrapper {
    float: left;
    display: block;
    width: 6.02rem;
    text-align: left;
    padding: 0.15rem 0rem;
  }

  input[type='radio'] {
    position: absolute;
    margin-top: 0.05rem;
    margin-left: -20px;

  }

  .checkbox-inline + .checkbox-inline, .radio-inline + .radio-inline {
    margin-top: 0;
    margin-left: 0.13333333333333333rem;
  }
  .location-select-wrapper{
    margin-top: -0.15rem;
    overflow: hidden;
  }
  .location-select-wrapper select {
    float: left;
    width: 1.8rem;
  }
  .location-select-wrapper select + select{
    margin-left: 0.31rem;
  }
  .district{
    overflow: hidden;
    margin-top: 0.16rem;
  }
  .select-district{
    width: 3.9rem;
    margin-right: 0.31rem;
    float: left;
  }
  .btn-location{
    float: left;
    width: 1.8rem;
    background-color: #2baf2b;
    padding: 0.08rem 0.16rem;
    border: 0.013333333333333334rem solid #2baf2b;
    border-radius: 0.1333rem;
    color: #ffffff;
    font-weight: 600;
  }
  .location-detail{
    margin-top: 0.16rem;
  }
  .select-expert-in{
    width: 6.02rem;
  }
  .expert-in-des{
    margin-top: 0.16rem;
    height: 2rem;
  }
</style>
