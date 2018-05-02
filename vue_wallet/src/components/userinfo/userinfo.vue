<template>
	<transition name="slide">
		<div class="userinfo">
			<div class="top-title">
				<i @click="tocenter()" class="iconfont back">&#xe720;</i>
				<span>
				个人信息
				</span>
			</div>
			<div class="myinformation">
				<ul>
					<li><span>头像</span> <img class="headimg" src="../../common/image/service/isure1.png" alt=""> </li>
					<li><span>昵称</span> <i class="iconfont">&#xe6f8;</i></li>
					<li><span>绑定手机号</span> <i class="iconfont">&#xe6f8;</i><span class="right">15618687236</span> </li>
					<li><span>我的收款码</span><i class="iconfont">&#xe6f8;</i><i class="iconfont blue">&#xe7ad;</i></li>
					<li><span>我的地址</span><i class="iconfont">&#xe6f8;</i></li>
				</ul>
			</div>
			<div class="myinsure">
				<ul>
					<li><span>账户安全险</span> <i class="iconfont">&#xe6f8;</i></li>
					<li><span>更多保险</span> <i class="iconfont">&#xe6f8;</i></li>

					
				</ul>
			</div>
			<div class="myinsure">
				<ul>
					<li><span>我的推荐人</span> <i class="iconfont">&#xe6f8;</i></li>
					<li><span>收银员专区</span><i class="iconfont">&#xe6f8;</i></li>
					<li><span>邮箱</span><i class="iconfont">&#xe6f8;</i></li>
				</ul>
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
	@import "../../common/less/userinfo";

	.userinfo{
		position: fixed;
		z-index: 100;
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

</style>