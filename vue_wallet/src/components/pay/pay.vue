<template>
	<transition name="slide">
		<div class="totalassets">
			<div class="top-title">
				<i @click="tocenter()" class="iconfont back">&#xe720;</i>
				<span>
				支付
				</span>
			</div>
			<div class="main-pay">
				<div class="order-info">
					<span>订单号：123123123123</span>
					<span class="totalamount">总金额：<span class="red">¥2330</span> </span>
				</div>
				<div class="pay-title">
					选择支付方式
				</div>
				<ul>
					<li>
						<img class="paylogo" width="65px" src="../../common/image/mixed/lbf.png" alt="">
						<img class="selstate" @click="payWay()" v-show="false" src="../../common/image/mixed/cycle.png" alt="">
						<img class="selstate" @click="payWay()" v-show="true" src="../../common/image/mixed/sel.png" alt="">
						<span class="right">分期支付</span>

					</li>
				</ul>
				<button class="next" type="submit">下一步</button>
			</div>
		</div>
	</transition>		
</template>

<script type="text/ecmascritp-6">
	import axios from 'axios'

	export default{
		data(){
			return{
				data :[]
			}
		},
		methods:{
			tocenter(){
				this.$router.push({
					path:'center'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	@import "../../common/less/variable";
	@import "../../common/less/totalassets";

	.totalassets{
		position: fixed;
		z-index: 1001;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #f6f6f6;
	}
	.slide-enter-active,.slide-leave-active{
		transition: all 0.3s

	}
	.slide-enter,.slide-leave-to{
			transform: translate3d(100% ,0,0);
		}
	
	.main-pay{
		div{
		}
		.order-info{
			background-color:#fff;
			height: 65px;
			line-height: 65px;
			font-size: 12px;
			padding-left: 15px;
			color: @black;
			margin-bottom: 8px;
			.totalamount{
				float: right;
				margin-right: 15px; 
			}
		}
		.pay-title{
			height:50px;
			line-height:50px;
			background-color:#fff;
			border-bottom: 1px solid @border-line;
			padding-left: 15px;
			color:@black;

		}
		ul{
			background-color: #fff;
			li{
				height:50px;
				line-height:50px;
				padding-left: 15px;
				color:@black;
				.paylogo{
					vertical-align: middle;
				}
				.selstate{
					float: right;
					width:30px;
					margin: 10px 10px 0 10px;
				}
			}
		}
	}
	.right{
		float: right;
	}
	.next{
		background-color:@color-blue;
		width: 94%;
		height:50px;
		border:none;
		color:#fff;
		border-radius: 8px;
		margin-left: 3%;
		margin-top: 50px;
	}

</style>