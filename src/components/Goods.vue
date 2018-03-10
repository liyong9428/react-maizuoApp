<template>
   <div>
      <div class="goods" ref="goods">
         <ul id="left">
            <div>
               <li @click="select(index)" v-for="(item,index) in getGoodsName" :key="index" :class="{on: current==index}">{{item}}</li>
            </div>
         </ul>
         <div class="list" id="list" ref="list">
            <div class="box">
            <dl v-for="(i,k) in goods" :key="k">
               <dt>{{i.name}}</dt>
               <dd v-for="(item,index) in i.foods" :key="index" @click="aaa(item)">
                  <div class="left">
                     <img :src="item.icon" width="76">
                  </div>
                  <div class="right">
                     <p class="title">{{item.name}}</p>
                     <p class="count">月售{{item.sellCount}}份&nbsp;&nbsp;&nbsp;好评&nbsp;{{item.rating}}</p>
                     <p class="price">
                        <span><i>￥</i>{{item.price}}</span>
                        <addCart :food="item" @add="addFood"></addCart>
                     </p>
                  </div>
               </dd>
            </dl>
            </div>
         </div>
      </div>

      <Detail :show="show" :food="currentFood" @change="change"></Detail>

      <!-- <Cart ref="cart"></Cart> -->
   </div>
</template>

<script>
import Iscroll from 'iscroll/build/iscroll-probe'
import {mapState,mapGetters} from 'vuex'
import Detail from './Detail'
import addCart from './AddCart'
import Cart from './Cart'
export default {
   data(){
      return {
         current: 0,
         show: false,
         currentFood: {}
      }
   },
   components: {
      Detail,
      addCart,
      Cart
   },
   mounted(){
      // if(window.navigator.userAgent.search(/(iPhone|iPad)/)!=-1){
      //    this.$refs.goods.style.top = 267+'px';
      // }
      this.list = new Iscroll('#list',{ 
         probeType: 2,
         click: true
      });

      this.left = new Iscroll('#left',{ 
         click: true
      });

      let outHeight = this.$refs.list.offsetHeight;
      let dls = this.$refs.list.querySelectorAll('dl');
      this.list.on('scroll',()=>{
         let scrollTop = Math.abs(this.list.y);
         dls.forEach((item,index)=>{
            if(outHeight+scrollTop-outHeight/2 > item.offsetTop){
               this.current = index;
            }
         });
      })

      this.list.on('scrollEnd',()=>{
         let scrollTop = Math.abs(this.list.y);
         dls.forEach((item,index)=>{
            if(outHeight+scrollTop-outHeight/2 > item.offsetTop){
               this.current = index;
            }
         });
      })
   },
   methods: {
      select(index){
         let dls = this.$refs.list.querySelectorAll('dl');
         this.current = index;
         this.list.scrollToElement(dls[index])
      },
      change(e){
         this.show = false;
      },
      aaa(item){
         this.currentFood = item;
         setTimeout(() => {
            this.show = true;
         }, 50);
         
      },
      addFood(e){
         this.$nextTick(()=>{
            this.$refs.cart.drop(e);
         })
      }
   },
   computed: {
      ...mapState(['goods']),
      ...mapGetters(['getGoodsName'])
   }
}
</script>

<style lang="scss" scoped>
.goods {
   overflow: hidden;
   // position: fixed;
   touch-action: none;
   display: flex;
   height: 385px;
   width: 100%;
   // left: 0;
   // right: 0;
   // bottom: 48px; 
   // z-index: 5;
   // top: 234px;
   background: #F8F8F8;
   ul {
      width: 80px;
      flex-shrink: 0;
      background: #f3f3f3;
      li {
         height: 45px;
         line-height: 45px;
         text-indent: 10px;
         font-size: 12px;
         border-bottom: 1px solid #eee;
         color: #666;
         &.on {
            background: #fff;
            color: #333;
         }
      }
   }
   .list{
      flex: 1 1 auto;
      padding-left: 5px;
      background: #fff;
      .box {
         position: relative;
      }
      dt {
         height: 30px;
         color: #666;
         font-weight: bold;
         line-height: 30px;
         font-size: 12px;
         text-indent: 2px;
         border-bottom: 1px solid #F5F5F5;
         background: #efefef;
      }
      dd {
         padding: 10px 0;
         display: flex;
         border-bottom: 1px solid #f3f3f3;
         .left {
            width: 85px;
            flex-shrink: 0;
            img {
               border: none;
               max-width: 100%;
            }
         }
         .right {
            flex: 1 1 auto;
            padding-right: 10px;
            .title {
               font-weight: bold;
               color: #222;
               font-size: 15px;
               padding-bottom: 10px;
               padding-top: 3px;
            }
            .count {
               font-size: 12px;
               color: #666;
            }
            .price {
               color: #FF6600;
               font-size: 15px;
               font-weight: bold;
               padding-top: 10px;
               overflow: hidden;
               i {
                  font-size: 12px;
                  font-style: normal;
               }
               &>span {
                  float: left;
               }
            }
         }
      }
   }
}
</style>

