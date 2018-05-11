<template>
	<transition name="slide">
		<div class="creditcard">
			<div class="top-title">
				<i @click="tocenter()" class="iconfont back">&#xe720;</i>
				<span>
				添加银行卡
				</span>
			</div>
			<div class="cardinfo">
				<input type="text" name="" placeholder="请输入持卡人姓名">
				<input type="tel" name="" placeholder="请输入银行卡号"> 
				<div>
					支持银行列表
				</div>
				<button type="button" >下一步</button>
			</div>
		</div>
	</transition>		
</template>

<script type="text/ecmascritp-6">
	import axios from 'axios'
	import jsonp from 'jsonp'

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

	.creditcard{
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
	.top-title{
	height: 2.5rem;
	line-height: 2.5rem;
	background-color: @color-blue;
	color: #fff;
	text-align: center;
	.back{
		float: left;
		margin-left: 5px;
		font-size: 24px;
		}
	}
	.cardinfo{
		padding: 0 15px;
		// width: 100%;
		input{
			width: 95%;
			background-color: #fff;
			height: 45px;
			line-height: 45px;
			margin-top:15px;
			border:1px solid #eeeeee; 
			border-radius: 5px;
			padding-left: 15px;
		}
		div{
			text-align: right;
			color: @color-blue;
			font-size: 12px;
			margin:  8px 0;
		}
		button{
			width: 100%;
			height: 45px;
			line-height: 45px;
			background-color: @color-blue;
			border:none;
			border-radius: 5px;
			color: #fff;
			font-size: 18px;
		}
	}

</style>