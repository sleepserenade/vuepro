<template>
	<div class="container">
		<div class="header">
			<i class="iconfont">&#xe6ec;</i>
			<span class="locationname">上海市</span>
			<!-- <i class="iconfont">&#xe689;</i> -->
			<span class="message">消息</span>
		</div>
		<div class="nav">
			<ul class="nav-tab">
				<li class="nav-item"><a href="">
					<span class="nav-tab-icon">
						<img src="../../common/image/home/Page1@3x.png" alt="">
					</span>
					<span  class="nav-tab-text">手机充值</span>
				</a></li>
				<li class="nav-item"><a href="">
					<span class="nav-tab-icon">
						<img src="../../common/image/home/Page2@3x.png" alt="">
						
					</span>
					<span class="nav-tab-text">流量充值</span>
				</a></li>
				<li class="nav-item"><a href="">
					<span class="nav-tab-icon">
						<img src="../../common/image/home/Page3@3x.png" alt="">
						
					</span>
					<span class="nav-tab-text">水电煤缴费</span>
				</a></li>
				<li class="nav-item"><a href="">
					<span class="nav-tab-icon">
						<img src="../../common/image/home/Page4@3x.png" alt="">
						
					</span>
					<span class="nav-tab-text">看电影</span>
				</a></li>
				<li class="nav-item"><a href="">
					<span class="nav-tab-icon">
						<img src="../../common/image/home/Page5@3x.png" alt="">
						
					</span>
					<span class="nav-tab-text">万家社区</span>
				</a></li>
				<li class="nav-item"><a href="">
					<span class="nav-tab-icon">
						<img src="../../common/image/home/Page6@3x.png" alt="">
						
					</span>
					<span class="nav-tab-text">校园缴费</span>
				</a></li>
				<li class="nav-item"><a href="">
					<span class="nav-tab-icon">
						<img src="../../common/image/home/Page7@3x.png" alt="">
						
					</span>
					<span class="nav-tab-text">手环</span>
				</a></li>
				<li class="nav-item"><a href="">
					<span class="nav-tab-icon">
						<img src="../../common/image/home/Page8@3x.png" alt="">
						
					</span>
					<span class="nav-tab-text">更多</span>
				</a></li>
			</ul>
		</div>
		<div class="show-tab">
			<img class="tabtitle" src="../../common/image/home/nav.png" alt="">
			<p class="show-line"></p>
			<div class="show-main">
				<ul>
					<li>
						<a href="">
							<div>
							<img src="../../common/image/home/Group.jpg" alt="">
						</div>
						</a>
					</li>
					<li>
						<a href="">
							<div>
							<img src="../../common/image/home/Pagejd.jpg" alt="">
						</div>
						</a>
					</li>
					<li>
						<a href="">
							<div>
							<img src="../../common/image/home/Bitmap.jpg" alt="">
						</div>
						</a>
					</li>
					<li>
						<a href="">
							<div>
							<img src="../../common/image/home/Pagepp.jpg" alt="">
						</div>
						</a>
					</li>
					<li>
						<a href="">
							<div>
							<img src="../../common/image/home/Bitmapyx.jpg" alt="">
						</div>
						</a>
					</li>
				</ul>
			</div>			
		</div>
		<div class="banner2">
			<a href="">
			<img  src="../../common/image/home/banner2.jpg" alt="">
				
			</a>
		</div>
		<div class="integration">
			<p>
				<a href="">
				<img src="../../common/image/home/cooperationgift.jpg" alt="">
				
			</a>
				<a href="">
				<img src="../../common/image/home/integrationarea.jpg" alt="">
					
				</a>
			</p>
			<div>
				<a href="">
				<img src="../../common/image/home/Group11@2x.png" alt="">
				</a>
				
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import {getRecommend} from 'api/recommend'
	import {ERR_Ok} from 'api/config'
	import axios from 'axios'
	import jsonp from 'jsonp'

	export default{
		data(){
			return{
				data :[]
			}
		},
		created(){
			// this._getRecommend()
			this._getList()
			// this._fetchJsonp()
		},
		methods:{
			_getRecommend(){
				getRecommend().then((res)=>{
					console.log(res)
				})
			},
			_getList(){
				axios({
				url: 'http://xfl.sevensme.com/app/index.php?i=4&c=entry&do=test&m=wallet'
			})
			.then((response)=>{
				this.data = response.data;
				console.log(this.data)
			})
			.catch(function(error){
				console.log(error)
			})
			},
			_fetchJsonp(){
				var url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=132&json=1"
				var body =  document.getElementsByTagName('body')[0];
				var script = document.createElement('script');
				script.setAttribute('src',url);
				body.appendChild(script);
				
			}
		}
	}

</script>

<style lang=less>
  @import "../../common/less/variable.less";
  @import "../../common/less/mixin.less";
  @import "../../common/less/home.less";

</style>