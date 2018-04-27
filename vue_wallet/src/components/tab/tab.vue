<template>
  <div class="tab-nav">
    <div class="tab">
    <router-link tag="div" class="tab-item" to="/home">
     <i class="iconfont">&#xe66c;</i>       
      <span class="tab-link">首页</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/mall">
     <i class="iconfont">&#xe658;</i>

      <span class="tab-link">精品</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/service">
     <i class="iconfont">&#xe627;</i>

      <span class="tab-link">金融</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/center">
     <i class="iconfont">&#xe615;</i>

      <span class="tab-link">我的</span>
    </router-link>
  </div>
  </div>
  
</template>

<script>
  export default{};
</script>

<style scoped lang="less">
  @import "../../common/less/variable.less";
  // @import "../../common/less/icon.less";
  .tab-nav{
    position: fixed;
    bottom: 0;
    width: 100%;
    // padding-bottom: 20px;
    height: 50px;
    line-height: 50px;
    background-color: #fbfbfb;
  }
  .tab{
    display: flex;
    height: 50px;
    // line-height: 50px;
    font-size:@font-size-medium;
    .tab-item{
      flex: 1;
      text-align: center;
      .tab-link{
        padding-bottom: 5px;
        color:@color-text;
      }
      &.router-link-active{
        .tab-link,.iconfont{
          color:@color-blue;
          // border-bottom: 2px solid @color-theme;
        }
      }
    }
  }
  .tab>.tab-item>i{
        display: block;
    font-size: 28px;
    height: 21px;
    margin-top: -6px;
  }
</style>
