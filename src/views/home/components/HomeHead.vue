<template>
  <div class="home-head">
    <div class="home-head-left">
        <div class="home-head-left-img">
          <img src="https://static.shiyanlou.com/frontend/dist/img/9f43b00.svg">
        </div>
        <span class="home-head-left-text">做实验, 学编程</span>
    </div>
    <ul class="home-head-right">
      <li class="edition">
        <span class="home-head-right-text">企业版</span>
        <span>|</span>
        <span class="home-head-right-text">学校版</span>
      </li>
      <li class="login-li">登录</li>
      <li class="register-li">注册</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeHead'
  }
</script>

<style scoped>
  
  .home-head {
    width: 70%;
    height: var(--main-bar-height);
    color: #666;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: turquoise; */
  }
  .home-head-left {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .home-head-right {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }
  .home-head-left-text {
    display: inline-block;
    color: #274a59;
    font-size: 18px;
  }
  .edition {
    color: #999;
    width: 110px;
    padding-right: 10px;
    display: flex;
    justify-content: space-around;
  }
  .home-head-right-text:hover {
    color: var(--main-color);
    cursor:pointer;
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
  
</style>