<template>
  <div class="search-comp" :class="{'search-active':isFocus}">
    <input class="search-input" 
           type="text" 
           v-model="msg" 
           :placeholder="tipMsg" 
           @focus='onFocus' 
           @blur='onBlur'
           @keyup.enter="enterKeyHandler"
           >
    <i class="icon-search" @click="searchHandler"></i>
  </div>
</template>

<script>
export default {
  name: 'SearchCom',
  props: {
    tipMsg: {
      type:String,
      default: '输入查询内容'
    }
  },
  data: function() {
    return {
      isFocus: false,
      msg:''
    }
  },
  methods: {
    onFocus() {
        this.isFocus = true;
        this.onEnterKey();
    },
    onBlur() {
      this.isFocus = false;
    },
    searchHandler() {
      alert(this.msg);
    },
    enterKeyHandler() {
      alert(this.msg);
    }
    // onEnterKey() {
    //   this.$el.onkeydown = (event)=> {
    //     if (event.key === 'Enter') {
    //       alert(this.msg);
    //     }
    //   }
    // }
  }
}
</script>

<style scoped>
  .search-comp {
    width: 190px;
    height: 32px;
    position: relative;
    border-radius: 20px;
    border: 1px solid #cccccc;
    background-color: #fff;
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
  }
  .search-input {
    width: 140px;
    height: 30px;
    padding-left: 12px;
    font-size: 14px;
    color: #555;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border: 0px;
    outline: none;
  }
  .search-active {
    border: 1px solid #08bf91;
    box-shadow: 0 0 0 1px #21d6a8;
  }
  .icon-search {
    font-size: 20px;
    position: absolute;
    top: 6px;
    right: 7px;
  }
  .icon-search:hover {
    cursor:pointer;
  }
</style>