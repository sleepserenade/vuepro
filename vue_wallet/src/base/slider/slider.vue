<template>
  <div>
    <div class="slider">
      <div class="slider-title">
        <ul>
          <li><span :class="{'active' : isActive == 0}">理财</span></li>
          <li><span :class="{'active' : isActive == 1}">网贷</span></li>
          <li><span :class="{'active' : isActive == 2}">保险</span></li>
        </ul>
      </div>
    </div>
    <swiper :options="swiperOption" class="swiper-box swiper-container" ref="mySwiper">
      <swiper-slide class="swiper-item">
        <div class="swiper-content">
          <div class="cardlike">
            <p class="lcb">理财宝</p>
            <div>
              <a href=""><span class="year">年化收益 4.2%</span><span class="registaccount">开通账户</span></a>
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
                <li>
                  <p style="color:#ff2e27;width:70px;">330万起</p>
                </li>
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
                <li>
                  <p style="color:#ff2e27;width:70px;">48万起</p>
                </li>
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
                <li>
                  <p style="color:#ff2e27;width:70px;">1万起</p>
                </li>
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
                <li>
                  <p style="color:#ff2e27;width:70px;">36万起</p>
                </li>
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
                <li>
                  <p style="color:#ff2e27;width:70px;">40万起</p>
                </li>
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
export default {
  name: 'carrousel',
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: 3000,
        grabCursor: true,
        setWrapperSize: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        // scrollbar:'.swiper-scrollbar',
        preventClick: false,
        mousewheelControl: true,
        observeParents: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        on:{
            slideChange: () => {
                this.isActive = this.swiper.activeIndex;
            }
        }
      },
      isActive : ''
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper ? this.$refs.mySwiper.swiper : undefined;
    }
  },
  mounted() {
  	// console.log(this.$refs.mySwiper.swiper,this.swiper.activeIndex)
    // console.log(this.swiper.activeIndex)
  },
    components: {
  },
}

</script>
<style scoped lang="less">
@import "../../common/less/variable";
@import "../../common/less/slider";

.swiper-box {
  margin-bottom: 50px!important;
}

.slider-title {
  height: 2.188rem;
  line-height: 2.188rem;
  background-color: @color-blue;
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    li {
      display: inline-block;
      width: 33%;
      text-align: center;
      span {
        // color: #a4b6ff;
        color: #ababab;
      }
    }
  }
}

span.active {
  color: #fff!important;
  border-bottom: 2px solid #fff;
}

html,
body {
  position: relative;
  height: 100%; // touch-action: none!important;
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
  font-size: 18px;
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

.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal>.swiper-pagination-bullets {
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background: #000;
    opacity: 0!important;
    display: none!important;
}


</style>
