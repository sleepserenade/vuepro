<template>
  <div id="app">
  <!-- <m-header></m-header> -->
  <router-view></router-view>  
  <tab></tab>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
export default {
  components: {
    MHeader,
    Tab
  }
}
</script>

<style scoped  lang="less">
  @import "common/less/variable.less";
  </style>