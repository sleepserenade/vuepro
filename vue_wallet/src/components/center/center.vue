<template>
	<div class="container">
		<div class="center-top">
			<p>消息</p>
			<div >
				<img @click="toinfo()" :src="data.avatar" alt="">
				<p>{{data.mobile}}</p>
				<p>安全认证：未认证</p>
			</div>
		</div>
		<div class="nav" style="height: 5rem">
			<ul>
				<!-- <router-link to="/totalassets">ddd</router-link>	 -->
				<li @click="assets()"><i class="iconfont" style="color:#ffb82d;">&#xe643;</i><span>总资产</span></li>
				<li @click="tocreditcard()"><i class="icon-bankcard"></i><span>银行卡</span></li>
				<li><i class="iconfont" style="color:#ff6a5d;">&#xe62b;</i><span>优惠券</span></li>
			</ul>
		</div>
		<div class="linka"> 
			<ul>
				<li>
					<a href=""><i class="iconfont">&#xe6de;</i><i class="iconfont">&#xe6f8;</i><span>账单</span></a>
				</li>
				<li>
					<a href=""><i class="iconfont">&#xe728;</i><i class="iconfont">&#xe6f8;</i><span>设置</span></a>
				</li>
			</ul>
		</div>
		<div class="linka"> 
			<ul>
				<li>
					<a href=""><i class="iconfont">&#xe78c;</i><i class="iconfont">&#xe6f8;</i><span>推荐有礼</span></a>
				</li>
				<li>
					<a href=""><i class="iconfont">&#xe704;</i><i class="iconfont">&#xe6f8;</i><span>用户反馈</span></a>
				</li>
				<li>
					<a href=""><i class="iconfont">&#xe6f1;</i><i class="iconfont">&#xe6f8;</i><span>联系客服</span></a>
				</li>
			</ul>
		</div>
		<router-view></router-view>	
	</div>
</template>

<script type="text/ecmascript-6">
	// import Totalassets from 'components/totalassets/totalassets' 
	// import Userinfo from 'components/userinfo/userinfo' 
	import axios from 'axios'
	import login from 'components/login/login'

	export default {
		data(){
			return{
				data:[],
			}
		},
		created(){
		},
		methods :{
			assets() {
				this.$router.push({
					path:'totalassets'
				})
			},
			toinfo() {
				this.$router.push({
					path:'userinfo'
				})
			},
			tocreditcard() {
				this.$router.push({
					path:'creditcard'
				})
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
		mounted(){
			this._getuserinfo()
		},
		components:{
			login
		}

	}

</script>

<style lang=less>
  @import "../../common/less/variable.less";
  @import "../../common/less/mixin.less";
  @import "../../common/less/center.less";

	.container{
		height: 100%;
		width: 100%;
	}
</style>