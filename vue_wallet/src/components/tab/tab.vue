<template>
  <div class="tab-nav">
    <div class="tab">
    <router-link tag="div" class="tab-item" to="/home">
     <i class="iconfont">&#xe66c;</i>       
      <span class="tab-link">首页</span>
    </router-link>
    <!-- <router-link tag="div" class="tab-item" to=""> -->
      <div class="tab-item " @click="toshop()">
            <i class="iconfont">&#xe658;</i>
            <span class="tab-link">精品</span>
      </div>
    <!-- </router-link> -->
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
  import axios from 'axios'
  export default{
    data(){
      return{
        data:[]
      }
    },
    created(){
      this.setTags(this.$route)
      this._getuserinfo()
    },
    watch: {
      $route(newValue){ //监听路由改变调用方法
         this.setTags(newValue)
      }
    },
    methods:{
      toshop(){
        window.location.href="http://xflshop.sevensme.com/"
      },
      _getuserinfo(){
        axios({
          url:'http://xfl.sevensme.com/app/index.php?i=4&c=entry&do=apicenter&m=wallet'
        })
        .then((response)=>{
          this.data = response.data
          console.log(this.data)
        })
        .catch(function(error){
          console.log(error)
        })
      },
      setTags(route){
        console.log(this.$route)
        if(route.path == '/center'){
             if(this.data.mobile){ //判断是否有手机号码
              this.$router.push('/center')
            }else{
              this.$router.push('/login')
            }
        }
      }
    },
    mounted(){

    }


  };
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
    z-index: 1000;
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
