<template>
   <div class="header">
      <div class="top"></div>
      <div class="logo"><h2 class="pic" ref="logo"><img :src="seller.avatar"></h2></div>
      <h2 class="title" @click="dialog=true">{{seller.name}}<strong></strong></h2>
      <p class="total"  @click="dialog=true">
         <span>{{seller.score}}</span>&nbsp;&nbsp;
         <span>月售{{seller.sellCount}}单</span>&nbsp;&nbsp;
         <span>{{seller.description}}</span>
         <span>约25分钟</span>&nbsp;&nbsp;
         <span>距离600m</span>
      </p>
      <p class="welcome">{{seller.bulletin}}</p>
      <div class="huodong" @click="popup=!popup">
         <p class="left"><span>首单</span>&nbsp;&nbsp;新用户下单立减14元(不与其它活动同享)</p>
         <p class="right">2个优惠<strong></strong></p>
      </div>

      <!-- 菜单栏 -->
      <mt-navbar v-model="selected" >  
         <mt-tab-item id="1" >点餐</mt-tab-item>  
         <mt-tab-item id="2" >评价</mt-tab-item>  
         <mt-tab-item id="3" >商家</mt-tab-item>  
      </mt-navbar>  
      <!-- tabcontainer -->  
      <mt-tab-container v-model="selected">  
         <mt-tab-container-item id="1"> 
            <!-- 商品组件 -->
            <Goods></Goods>
         </mt-tab-container-item>  
         <mt-tab-container-item id="2">  
            <!-- 评论组件 -->
            <Common></Common>
         </mt-tab-container-item>  
         <mt-tab-container-item id="3">  
            <!-- 商家组件 -->
            <Seller></Seller>
         </mt-tab-container-item>  
      </mt-tab-container> 

      <mt-popup v-model="popup" position="bottom" style="width:100%;z-index: 9">
         <div class="popup">
            <h2>优惠活动</h2>
            <p><span>首单</span>&nbsp;新用户下单立减14元(不与其它活动同享)</p>
            <p><span class="sub">满减</span>&nbsp;满29减3，满50减10</p>
            <i class="close" @click="popup=!popup">&times;</i>
         </div>
      </mt-popup>
      
      <Dialog :show="dialog" @change="change"></Dialog>
   </div>
  
</template>

<script>
import {mapState} from 'vuex'
// 引入Dialog组件
import Dialog from './Dialog'
// 引入商品组件
import Goods from './Goods'
// 引入评论组件
import Common from './Common'
// 引入商家组件
import Seller from './Seller'
export default {
   data(){
      return {
         popup: false,
         dialog: false,
         selected: '1' 
      }
   },
   computed: {
      ...mapState(['seller'])
   },
   components: {
      Dialog,
      Goods,
      Common,
      Seller
   },
   methods: {
      change(e){
         this.dialog = false;
      }
   }
}
</script>

<style lang="scss" scoped>
$v: 75px;
@function rem($n) {
  @return $n/$v*1rem;
}
.header {
   width: 100%;
   margin-bottom: 12px;
   position: relative;
   .top {
      width: 100%;
      height: 50px;
      background: #C4BDCC;
   }
   .logo {
      width: 100%;
      height: 50px;
      position: absolute;
      top: 20px;
      display: flex;
      img {
         width: 50px; 
         max-width: 100%;
         height: 50px;
      }
      .pic {
         background: #000;
         width: 50px;
         height: 50px;
         margin: auto;
         border-radius: 3px;
      }
   }
   .title {
      font-size: 20px;
      text-align: center;
      margin-top: 30px;
      color: #333;
      strong {
         width: 0;
         height: 0;
         font-weight: normal;
         border: 6px solid transparent;
         border-left-color: #333;
         display: inline-block;
         margin-left: 4px;
         vertical-align: middle;
      }
   }
   .total {
      font-size: 10px;
      text-align: center;
      color: #333;
      line-height: 24px;
   }
   .welcome {
      font-size: 11px;
      text-align: center;
      color: #aaa;
      line-height: 18px;
      padding-bottom: 10px; 
   }
   .huodong {
      width: 90%;
      margin: 0 auto;
      border: 1px solid #efefef;
      font-size: 11px;
      padding: 3px 10px;
      margin-bottom: 12px;
      color: #777;
      overflow: hidden;
      display: flex;
      span {
         background:mediumseagreen;
         color: white;
         font-size: 9px;
         border-radius: 2px;
         width: 35px;
         text-align: center;
         display: inline-block;
      }
      p.left {
         width: 78%;
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;
      }
      p.right {
         width: 20%;
         text-align: right;
         color: #666;
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;
         strong {
            width: 0;
            height: 0;
            font-weight: normal;
            border: 3px solid transparent;
            border-top-color: #666;
            display: inline-block;
            margin-left: 4px;
            vertical-align: middle;
         }
      }
   }

   .popup {
      width: 100%;
      background: #fff;
      position: relative;
      height: 200px;
      h2 {
         font-size: 17px;
         margin-top: 15px;
         text-align: center;
         color: #222;
         margin-bottom: 10px;
      }
      p {
         font-size: 13px;
         text-indent: 25px;
         color: #222;
         line-height: 25px;
         span {
            padding: 0px 6px;
            background:mediumseagreen;
            font-size: 12px;
            color: white;
            border-radius: 2px;
            margin-right: 3px;
         }
         span.sub {
            background: salmon;
         }
      }
      .close {
         font-style: normal;
         position: absolute;
         font-size: 30px;
         color: #888;
         right: 10px;
         top: -15px;
      }
   }
}
</style>



