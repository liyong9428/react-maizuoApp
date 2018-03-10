<template>
   <div id="app">
      <!-- 头部组件 -->
      <Head></Head>
      <!-- 中间主体 -->
   </div>
</template>

<script>
import {mapState} from 'vuex'
// 引入header组件
import Head from './components/Header'

export default {
   name: 'App',
   components: {
      Head
   }
  
}
</script>

<style>
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: '微软雅黑';
   -webkit-tap-highlight-color:rgba(255,255,255,0);
}
</style>
