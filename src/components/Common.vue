<template>
   <div class="common">
      <div class="flag">
         <div class="left">
            <h3>{{seller.score}}</h3>
            <p>综合评价</p>
            <p>高于周边商家43%</p>
         </div>
         <div class="right">
            <p>
               <span>服务态度</span>&nbsp;&nbsp;
               <span class="star"></span>
               <span :style="starW1" class="star1"></span>&nbsp;
               <span >{{seller.serviceScore}}</span>
            </p>
            <p>
               <span>菜品评价</span>&nbsp;&nbsp;
               <span class="star"></span>
               <span :style="starW2" class="star1"></span>&nbsp;
               <span>{{seller.foodScore}}</span>
            </p>
            <p>
               <span>送达时间</span>&nbsp;&nbsp;
               <span>25分钟</span>
            </p>
         </div>
      </div>
      <div class="commonitem">
         <!-- <div class="title">
            <button @click="current='one'" :class="{on: current=='one'}">全部</button>&nbsp;&nbsp;
            <button @click="current='two'" :class="{on: current=='two'}">满意</button>&nbsp;&nbsp;
            <button @click="current='third'"  :class="{on: current=='third'}">不满意</button>
         </div> -->
         <ul>
            <li v-for="(item,index) in ratings" :key="index">
               <div class="pic">
                  <img :src="item.avatar" width="30" style="border-radius: 50%">
               </div>
               <div class="right">
                  <h4>{{item.username}}&nbsp;&nbsp;<span>{{new Date(item.rateTime).toLocaleString()}}</span></h4>
                  <p class="score">
                     <span class="star"></span>
                     <span class="star1" :style="{width: 50/5*item.score+'px'}"></span>
                  </p>
                  <div class="art">{{item.text}}</div>
                  <div class="btn" v-if="item.recommend.length">
                     <button v-for="(i,k) in item.recommend" :key="k">{{i}}</button>   
                  </div>
               </div>
            </li>
         </ul>
      </div>
   </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
   data(){
      return {
         current: 'one'

      }
   },
   computed: {
      starW1(){
         return {
            width: 50/5*this.$store.state.seller.serviceScore+'px'
         }
      },
      starW2(){
         return {
            width: 50/5*this.$store.state.seller.foodScore+'px'
         }
      },
      ...mapState(['seller','ratings'])
   }
}
</script>

<style lang="scss" scoped>
.common {
   background: #f5f5f5;
   .flag {
      width: 100%;
      height: 100px;
      padding: 20px 15px;
      margin-bottom: 10px;
      color: #666;
      background: #ffffff;
      display: flex;
      font-size: 12px;
      .left {
         width: 110px;
         height: 60px;
         flex-shrink: 0;
         padding-right: 5px;
         border-right: 1px solid #f1f1f1;
         text-align: center;
         h3 {
            color: #FF6000;
            font-size: 22px;
         }
         p:last-child {
            font-size: 10px;
         }
      }
      .right {
         padding-left: 15px;
         flex: 1 0 auto;
         height: 60px;
         
         p {
            height: 22px;
            position: relative;
            .star {
               display: inline-block;
               width: 50px; 
               height: 11px;
               background-image: url(../../static/images/silver.png);
               position: absolute;
               left: 60px;
               top: 2px;
               z-index: 6;
            }
            .star1 {
               display: inline-block;
               width: 50px; 
               height: 10px;
               background-image: url(../../static/images/golden.png);
               position: absolute;
               left: 60px;
               top: 2px;
               z-index: 7
            }
            span:last-child {
               color: #FF6000;
               font-weight: bold;
            }
         }
      }
   }
   .commonitem {
      padding: 0 15px;
      background: #ffffff;
      .title {
         height: 54px;
         border-bottom: 1px solid #f1f1f1;
         line-height: 55px;
         button {
            padding: 5px 10px;
            background: #EBF5FF;
            outline: none;
            border: none;
            color: #6D7885;
            border-radius: 3px;
            &.on {
               background: #0097FF;
               color: white;
            }
         }
      }
      li {
         list-style: none;
         font-size: 14px;
         padding-top: 18px;
         padding-bottom: 20px;
         border-bottom: 1px solid #f0f0f0;
         display: flex;
         .pic {
            width: 50px;
            flex-shrink: 0;
         }
         .right {
            flex: 1 1 auto;
            font-size: 12px;
            h4 {
               font-size: 13px;
               color: #222;
               span {
                  font-size: 11px;
                  font-weight: normal;
               }
            }
            .score {
               height: 22px;
               position: relative;
               .star {
                  display: inline-block;
                  width: 50px; 
                  height: 10px;
                  background-image: url(../../static/images/silver.png);
                  background-position: center left;
               }
               .star1 {
                  display: inline-block;
                  width: 50px; 
                  height: 10px;
                  background-image: url(../../static/images/golden.png);
                  background-position: center left;
                  position: absolute;
                  left: 0;
                  top: 3px;
               }
               span:last-child {
                  color: #FF6000;
                  font-weight: bold;
               }
            }
            .art {
               font-size: 12px;
               padding-top: 8px;
               color: #444;
               overflow: hidden;
            }
            .btn {
               padding-top: 10px;
               button{
                  outline: none;
                  border: none;
                  font-size: 12px;
                  color: #777;
                  border: 1px solid #f3f3f3;
                  padding: 3px 9px;
                  margin-right: 10px;
                  background: #fff;
                  border-radius: 5px;
               }
            }
         }
      }
   }
}

</style>


