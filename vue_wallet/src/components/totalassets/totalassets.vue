<template>
	<transition name="slide">
		<div class="totalassets">
			<div class="top-title">
				<i @click="tocenter()" class="iconfont back">&#xe720;</i>
				<span>
				总资产
				</span>
			</div>
			<div class="myassets">
				<span class="allassets">总资产（元）</span>
				<div class="profit">
					<span class="myallassets">0.00</span>
					<span class="ydayprofit">昨日收益： <span>0.00</span></span>
				</div>
			</div>
			<div class="walletaccount">
				<div class="title">钱包账户</div>
				<div class="walletdetail">
					<ul>
						<li>
							<span>
								<img src="../../common/image/center/wallet1.png" alt="">
							</span>
							<span>钱包余额</span>
							<span class="red">立即开通</span>
						</li>
						<li>
							<span>
								<img src="../../common/image/center/wallet2.png" alt="">
							</span>
							<span>钱包积分</span>
							<span>0.00</span>
						</li>
						<li>
							<span>
								<img src="../../common/image/center/wallet3.png" alt="">
							</span>
							<span>福利积分</span>
							<span>0.00</span>
						</li>
						
					</ul>
				</div>
			</div>
			<div class="myfinancing">
				<div class="title">我的理财</div>
				<div class="financedetail">
					<ul>
						<li>
							<span>
								<img src="../../common/image/center/wallet4.png" alt="">
							</span>
							<span>理财宝</span>
							<span class="red">立即开通</span>
						</li>
						<li>
							<span>
								<img src="../../common/image/center/wallet5.png" alt="">
							</span>
							<span>定期理财</span>
							<span>0.00</span>
						</li>
						<li>
							<span>
								<img src="../../common/image/center/wallet6.png" alt="">
							</span>
							<span>银行理财</span>
							<span>去开户</span>
						</li>
						
					</ul>
				</div>
			</div>
			<div class="otheraccount">
				<div class="title">
					<span>其他账户</span>
					<i class="iconfont bule">&#xe6e0;</i>
				</div>
				<p>
					您尚未绑定其他账户
				</p> 
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

</style>