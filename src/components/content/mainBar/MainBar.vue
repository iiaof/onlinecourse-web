<template>
  <div class="main-bar">
    <div class="main-bar-content">
      <div class="main-bar-img">
        <img src="https://static.shiyanlou.com/img/shiyanlou_logo.svg">
      </div>
      <ul class="main-bar-ul ul1">
        <li class="main-bar-item main-bar-sub">
          <label class="main-bar-text">
            课程
          </label>
          <span class="d3"></span>
          <ul class="main-bar-sub-content">
            <li class="main-bar-sub-item main-bar-text" v-for="item in courseList" :key='item'>
              <label>
                {{item}}
              </label>
            </li>
          </ul>
        </li>
        <li class="main-bar-item">
          <label class="main-bar-text">
          训练营
          </label>
        </li>
        <li class="main-bar-item">
          <label class="main-bar-text">
            课程+
            </label>
        </li>
        <li class="main-bar-item">
          <label class="main-bar-text">
            会员
            </label>
        </li>
        <li class="main-bar-item main-bar-sub">
          <label class="main-bar-text">
          社区
          </label>
          <span class="d3"></span>
          <ul class="main-bar-sub-content">
            <li class="main-bar-sub-item main-bar-text" v-for="item in communityList" :key='item'>
              <label>
                {{item}}
              </label>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="main-bar-ul ul2">
        <li class="edition">
          <span class="main-bar-text">企业版</span>
          <span>|</span>
          <span class="main-bar-text">学校版</span>
        </li>
        <SearchCom tipMsg="搜索 课程/问答"></SearchCom>
        <li class="login-li main-bar-item">登录</li>
        <li class="register-li">注册</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import SearchCom from '@/components/common/searchCom/SearchCom.vue'

  export default {
    name: 'MainBar',
    data: function() {
      return {
        courseList: ['全部课程','学习路径'],
        communityList: ['讨论','教程库','直播','比赛']
      }
    },
    components: {
      SearchCom
    }
  }
</script>

<style scoped>
  
  .main-bar-content {
    width: 70%;
    height: var(--main-bar-height);
    color: #666;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: turquoise; */
  }
  .main-bar {
    width: 100%;
    height: var(--main-bar-height);

    position: absolute;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.05);
  }
  .main-bar-text:hover {
    color: var(--main-color);
    cursor:pointer;
  }
  .main-bar-img {
    width: 10%;
    height: var(--main-bar-height);

    display: flex;
    justify-content: center;
  }
  .main-bar-img:hover {
    cursor:pointer;
  }
  .main-bar-ul {  
    display: flex;
    align-items: center;
    width: 45%;
    height: 100%;
  }
  .ul1 {
    justify-content: space-around;
    /* background-color: orange; */
  }
  .ul2 {
    justify-content: flex-end;
    /* background-color: blueviolet; */
  }
  .main-bar li {
    list-style: none;
  }
  .login-li {
    height: 100%;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .register-li {
    height: 100%;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--main-color);
  }
  .edition {
    color: #999;
    width: 110px;
    padding-right: 10px;
    display: flex;
    justify-content: space-around;
  }
  .d3 {
    margin-left: 7px;
    margin-top: 7px;
    float: right;
    width: 0; 
    height: 0;
    border-width: 6px;
    border-style: solid;
    border-color:#666 transparent transparent transparent;
  }
  .d3:hover {
    border-color: var(--main-color) transparent transparent transparent;
  }
  .main-bar-sub-content {
    display: none;
    position: absolute;
    top: var(--main-bar-height);
    width: 150px;
    background: #fff;
    padding: 0;
    margin: 0;
    box-shadow: 0 15px 16px 0 rgba(0,0,0,.18);
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    z-index: 10;
  }
  .main-bar-sub {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .main-bar-sub:hover ul{
    display: block;
  }
  .main-bar-sub-item {
    display: block;
    color: #3a3a3a;
    width: 90%;
    padding: 15px 0 15px 15px;
    font-size: 16px;
  }
  .main-bar-sub-item:hover {
    background-color: rgba(0,0,0,.05);
  }
</style>