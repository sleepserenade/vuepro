<template>
	<div>
		<div class="slider">
			<div class="slider-title">
				<ul>
					<li aria-label="Go to slide 1"><span>理财</span></li>
					<li aria-label="Go to slide 2"><span>网贷</span></li>
					<li aria-label="Go to slide 3"><span>保险</span></li>
				</ul>
			</div>
		</div>

		<swiper :options="swiperOption" class="swiper-box">

		    <swiper-slide class="swiper-item">
		    	<div class="swiper-content">
		    		<div class="cardlike"> 
		    			<p class="lcb">理财宝</p>
		    			<div>
		    				<a href="" ><span class="year">年化收益 4.2%</span><span class="registaccount">开通账户</span></a>
		    			</div>	
		    			<p class="cardlikebuttom"></p>
		    		</div>
		    		<div class="bank-container">
		    			<div>
		    				<span class="icon-card">
		    					<img src="../../common/image/service/icon-card.png" alt="">
		    				</span>
		    				<span style="vertical-align:-webkit-baseline-middle;">理财宝</span>
		    			</div>
		    			<div>
		    				<ul>
		    					<li><span style="color:#ff2e27">4.32%</span><span style="color:#303030">上海银行理财</span></li>
		    					<li><span style="color:#ababab">7日年华收益</span><span style="color:#303030">灵活存取&nbsp; 超低风险</span></li>
		    				</ul>
		    			</div>
		    		</div>
		    	</div>
		    </swiper-slide>
		    <swiper-slide class="swiper-item">
		    	<div class="swiper-content">
		    		<div class="bank-container">
		    			<div>
		    				<span class="icon-card">
		    					<img src="../../common/image/service/icon-creditcard.png" alt="">
		    				</span>
		    				<span style="vertical-align:-webkit-baseline-middle;">随薪借</span>
		    			</div>
		    			<div>
		    				<ul>
		    					<li><span style="color:#ff2e27">最高30万</span><span style="color:#303030">“随”享品质生活</span></li>
		    					<li><span style="color:#ababab">贷款额度2</span><span style="color:#303030">申请简便&nbsp; 放款迅速</span></li>
		    				</ul>
		    			</div>
		    		</div>
		    		<div class="bank-container">
		    			<div>
		    				<span class="icon-card">
		    					<img src="../../common/image/service/icon-wallet.png" alt="">
		    				</span>
		    				<span style="vertical-align:-webkit-baseline-middle;">信用卡代还</span>
		    			</div>
		    			<div>
		    				<ul>
		    					<li><span style="color:#ff2e27">最高2万</span><span style="color:#303030">上海银行理财</span></li>
		    					<li><span style="color:#ababab">代还额度</span><span style="color:#303030">日息万2起&nbsp; 秒审秒放</span></li>
		    				</ul>
		    			</div>
		    		</div>
		    	</div>
		    	
		    </swiper-slide>
		    <swiper-slide class="swiper-item">
		    	<div class="swiper-content">
		    		<div class="insurance-container">
		    			<div>
		    				<span style="vertical-align:-webkit-baseline-middle;">诚泰&nbsp;综合意外险</span>
		    			</div>
		    			<div>
		    				<ul>
		    					<li><p style="color:#ff2e27;width:70px;" >330万起</p></li>
		    					<li><span style="color:#ababab;margin-bottom: 10px;"> 高报价&nbsp;高性价比</span><span style="color:#303030">为精英人士量身定制</span></li>
		    					<li class="icon-sure">
		    						<img src="../../common/image/service/isure1.png" alt="">
		    					</li>
		    				</ul>
		    			</div>
		    		</div>
		    		<div class="insurance-container">
		    			<div>
		    				<span style="vertical-align:-webkit-baseline-middle;">诚泰&nbsp;住院宝</span>
		    			</div>
		    			<div>
		    				<ul>
		    					<li><p style="color:#ff2e27;width:70px;" >48万起</p></li>
		    					<li><span style="color:#ababab;margin-bottom: 10px;"> 住院&nbsp;意外全覆盖</span><span style="color:#303030">成人专享 省心无忧</span></li>
		    					<li class="icon-sure">
		    						<img src="../../common/image/service/isure2.png" alt="">
		    					</li>
		    				</ul>
		    			</div>
		    		</div>
		    		<div class="insurance-container">
		    			<div>
		    				<span style="vertical-align:-webkit-baseline-middle;">诚泰&nbsp;账户资金安全险</span>
		    			</div>
		    			<div>
		    				<ul>
		    					<li><p style="color:#ff2e27;width:70px;" >1万起</p></li>
		    					<li><span style="color:#ababab;margin-bottom: 10px;"> 个人账户防盗险</span><span style="color:#303030">含网银 银行卡 支付宝账户</span></li>
		    					<li class="icon-sure">
		    						<img src="../../common/image/service/isure3.png" alt="">
		    					</li>
		    				</ul>
		    			</div>
		    		</div>
		    		<div class="insurance-container">
		    			<div>
		    				<span style="vertical-align:-webkit-baseline-middle;">诚泰&nbsp;综合意外险</span>
		    			</div>
		    			<div>
		    				<ul>
		    					<li><p style="color:#ff2e27;width:70px;" >36万起</p></li>
		    					<li><span style="color:#ababab;margin-bottom: 10px;"> 高报价&nbsp;高性价比</span><span style="color:#303030">为精英人士量身定制</span></li>
		    					<li class="icon-sure">
		    						<img src="../../common/image/service/isure4.png" alt="">
		    					</li>
		    				</ul>
		    			</div>
		    		</div>
		    		<div class="insurance-container">
		    			<div>
		    				<span style="vertical-align:-webkit-baseline-middle;">诚泰&nbsp;综合意外险</span>
		    			</div>
		    			<div>
		    				<ul>
		    					<li><p style="color:#ff2e27;width:70px;" >40万起</p></li>
		    					<li><span style="color:#ababab;margin-bottom: 10px;"> 高报价&nbsp;高性价比</span><span style="color:#303030">为精英人士量身定制</span></li>
		    					<li class="icon-sure">
		    						<img src="../../common/image/service/isure5.png" alt="">
		    					</li>
		    				</ul>
		    			</div>
		    		</div>

		    	</div>
		    </swiper-slide>
		    <div class="swiper-pagination" slot="pagination"></div>
		 </swiper>
	</div>
</template>

<script type="text/ecmascript-6">
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	// window.addEventListener('touchmove', func, { passive: false })
	export default {
	  name: 'carrousel',
	 data() {
	   return {
	     swiperOption: {
	       // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
	       // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
	       notNextTick: true,
	       // swiper configs 所有的配置同swiper官方api配置
	       autoplay: 3000,
	       // direction : 'vertical',
	       // effect:"coverflow",
	       grabCursor : true,
	       setWrapperSize :true,
	       // autoHeight: true,
	       // paginationType:"bullets",
	       // pagination : '.swiper-pagination',
	       // paginationClickable :true,
	       prevButton:'.swiper-button-prev',
	       nextButton:'.swiper-button-next',
	       // scrollbar:'.swiper-scrollbar',
	       mousewheelControl : true,
	       observeParents:true,
	       pagination: {
            el: '.swiper-pagination',
            clickable: true,
        //     renderBullet: function (index, className) {
        //  	 return '<span class="' + className + '">' + (index + 1) + '</span>';
        // 	},
		      // renderBullet: function (index, className) {
		      //     switch(index){
		      //       case 0:text='壹';break;
		      //       case 1:text='贰';break;
		      //       case 2:text='叁';break;
		      //     }
		      //     return '<span class="' + className + '">' + text + '</span>';
		      //   },

          	}
	       // passive: false,
	       // if you need use plugins in the swiper, you can config in here like this
	       // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
	       // debugger: true,
	       // swiper callbacks
	       // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
	       // onTransitionStart(swiper){
	       //   console.log(swiper)
	       // },
	       // more Swiper configs and callbacks...
	       // ...
	     }
	   }
	 },
	 components: {
	 swiper,
	 swiperSlide
	},
	 // you can find current swiper instance object like this, while the notNextTick property value must be true
	 // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
	 computed: {
	   swiper() {
	     return this.$refs.mySwiper.swiper
	   }
	 },
	 mounted() {
	   // you can use current swiper instance object to do something(swiper methods)
	   // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
	   // console.log('this is current swiper instance object', this.swiper)
	   // this.swiper.slideTo(3, 1000, false)
	 }
	}

	document.addEventListener('touchstart', function(event) {
    // 判断默认行为是否可以被禁用
    if (event.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!event.defaultPrevented) {
            event.preventDefault();
        }
    }
}, false);
</script>

<style scoped lang="less">
  @import "../../common/less/variable";
  @import "../../common/less/slider";

	.swiper-box{
		margin-bottom: 50px!important;
	}
	.slider-title{
		height: 2.188rem;
		line-height: 2.188rem;
		background-color: @color-blue;
		ul{
			display: flex;
				flex-direction: row;
				align-items: center;
			li{
				display: inline-block;
				width: 33%;
				text-align: center;
				a{
					span{
						color: #a4b6ff;
					}
				}
			}
		}
	}

	 html,body {
		    position: relative;
		    height: 100%;
		    // touch-action: none!important;
		  }
		  body {
		    background: #eee;
		  }
		  .swiper-box {
		    width: 100%;
		    height: 100%;
		    margin: 0 auto;
		  }
		  .swiper-item {
		    height: 100%;
		    text-align: center;
		    font-size: 18px ;
		    background: #fff;
		    /* Center slide text vertically */
		    display: -webkit-box;
		    display: -ms-flexbox;
		    display: -webkit-flex;
		    display: flex;
		    -webkit-box-pack: center;
		    -ms-flex-pack: center;
		    -webkit-justify-content: center;
		    justify-content: center;
		    -webkit-box-align: center;
		    -ms-flex-align: center;
		    -webkit-align-items: center;
		    align-items: center;
		  }
		  .swiper-pagination-fraction, .swiper-pagination-custom, 
		  .swiper-container-horizontal > .swiper-pagination-bullets{
		  	top:-15px!important;
		  }

</style>