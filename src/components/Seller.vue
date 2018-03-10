<template>
   <div class="seller">
      <div class="dispatch">
         <h2>配送信息</h2>
         <p><span>{{seller.description}}</span>&nbsp;&nbsp;约25分钟送达，距离600m</p>
         <p>配送费 ￥{{seller.deliveryPrice}}</p>
      </div>
      <div class="server">
         <h2>活动与服务</h2>
         <p><span>首单</span>&nbsp;新用户下单立减14元(不与其它活动同享)</p>
         <p><span class="sub">满减</span>&nbsp;满29减3，满50减10</p>
      </div>
      <div class="info">
         <h2>商家信息</h2>
         <ul>
            <li class="first"><span>暂无简介</span></li>
            <li>
               <span>品种</span>
               <span>{{seller.infos.type}}</span>
            </li>
            <li>
               <span>商家电话</span>
               <span>{{seller.infos.tel}}</span>               
            </li>
            <li>
               <span>地址</span>
               <span>{{seller.infos.address}}</span>               
            </li>
            <li>
               <span>营业时间</span>
               <span>{{seller.infos.time}}</span>               
            </li>
         </ul>
      </div>
   </div>
</template>

<script>
import {mapState} from 'vuex'
import Iscroll from 'iscroll/build/iscroll-probe'
export default {
   computed: {
      ...mapState(['seller'])
   }
}
</script>

<style lang="scss" scoped>
.seller {
   background: #f5f5f5;
   .dispatch {
      span {
         background: #0097FF;
         color: #fff;
         font-size: 11px;
         padding: 1px 3px;
         border-radius: 2px;
         vertical-align: bottom;
      }
      width: 100%;
      padding: 20px 15px;
      background: #ffffff;
      margin-bottom: 10px;
      font-size: 13px;
      color: #666;
      h2 {
         font-size: 15px;
         padding-bottom: 10px;
         color: #222;
      }
      p {
         line-height: 24px;
      }
   }
   .server {
       width: 100%;
      padding: 20px 15px;
      background: #ffffff;
      margin-bottom: 10px;
      font-size: 13px;
      color: #666;
      h2 {
         font-size: 15px;
         padding-bottom: 10px;
         color: #222;
      }
      p {
         line-height: 24px;
      }
      p {
         span {
            padding: 0px 6px;
            background:mediumseagreen;
            font-size: 10px;
            color: white;
            border-radius: 2px;
            margin-right: 3px;
         }
         span.sub {
            background: salmon;
         }
      }
   }
   .info {
      padding-bottom: 0;
      margin-bottom: 0;
       width: 100%;
      padding: 20px 15px;
      background: #ffffff;
      margin-bottom: 10px;
      font-size: 13px;
      color: #666;
      h2 {
         font-size: 15px;
         padding-bottom: 10px;
         color: #222;
      }
      p {
         line-height: 24px;
      }
      li {
         list-style: none;
         height: 43px;
         line-height: 43px;
         border-bottom: 1px solid #f1f1f1;
         display: flex;
         justify-content: space-between;
         & span:first-child {
            font-weight: bold;
            color: #444;
         }
      }
   }
}
</style>

