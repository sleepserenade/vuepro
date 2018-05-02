<template>
  <div class="finance">
     <div class="finance-top">
        <span>金融</span>
        <span>我的理财</span>
        <slider></slider>
    </div>
  </div>
   
</template>

<script type="text/ecmascript-6">
	// import VueAwesomeSwiper from 'vue-awesome-swiper'
	// import Swiper from 'swiper'
  import Slider from 'base/slider/slider' 

  export default {
    data (){
        return{

        }
    },
    created(){

    },
    methods: {

    },
    components:{
      Slider
    }

  }
</script>

<style scoped lang="less">
  @import "../../common/less/variable.less";
  @import "../../common/less/mixin.less";
  @import "../../common/less/finance.less";
  body{
    touch-action: none;
  }
	
</style>