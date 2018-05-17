<template>
	<transition name="slide">
		<div class="login">
			<div class="center-top">
				<div >
					<img @click="toinfo()" :src="data.avatar" alt="">
					<p>{{data.mobile}}</p>
					<p>安全认证：未认证</p>
				</div>
			</div>
			<div class="main">
				<div>
					<div class="main-title">
						手机号码绑定
					</div>
					<ul>
							<li><input type="tel" placeholder="请输入电话号码"><span class="tosend" @click="sendVerificationCode()">发送验证码</span></li>
							<li><input type="tel" placeholder="请输入验证码"></li>
					</ul>	
				</div>
			</div>
					<button type="button" class="submit" @click="submit()">确定</button>

		</div>
	</transition>		
</template>

<script>
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
					path:'/center'
				})
			},
			tologin(){
				if(this.$route.query.redirect){
				       let redirect = this.$route.query.redirect;
				       this.$router.push(redirect);
				}else{
				       this.$router.push('/');
				 }
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
			}
		},
		created(){
			this._getuserinfo();
		}
	}
</script>

<style scoped lang="less">
	@import "../../common/less/variable";
	@import "../../common/less/userinfo";

	.login{
		position: fixed;
		z-index: 1002;
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
	.center-top div{
		padding: 3.5rem 0 0 6.875rem
	}
	.main{
		background-color:#fff;
		.main-title{
			height: 50px;
			line-height: 50px;
			border-bottom: 1px solid @border-line;
			padding-left: 15px;
			color:@black;
		}
		ul{
			li{
				position:relative;
				input{
					height: 50px;
					line-height: 50px;
					padding-left: 15px;
					color:@black;
				}
				.tosend{
					float: right;
					font-size: 12px;
					color: @color-blue;
					background-color:#eef1ff;
					border-radius: 10px;
					padding :5px 10px;
					margin-top: 15px;
					margin-right: 20px;
				}
			}
		}
	}
	.submit{
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