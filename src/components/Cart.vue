<template>
   <div class="cart">

      <div class="content" @click="show">
         <div class="content-left">
            <div class="logo-wrapper">
               <div class="logo" :class="{'highlight': total>0}">
                  <i class="iconfont icon-gouwuchefill" style="font-size: 25px;color: #" :class="{'highlight':total>0}"></i>
               </div>
               <div class="num" v-show="total>0">{{total}}</div>
            </div>
            <div class="price" :class="{'highlight':totalPrice>0}">￥{{totalPrice}}</div>
            <div class="desc">配送费￥4</div>
         </div>

         <div class="content-right">
            <div class="pay" :class="{on: totalPrice>=20}">
               {{total ? totalPrice>=20?'去结算':`还差￥${20-totalPrice}起送` : '￥20起送' }}
            </div>
            
         </div>
      </div>

      <transition name="slide">
         <div class="shopcart-list" v-show="popup && carts.length">
            <div class="list-header">
               <h1 class="title">购物车</h1>
               <span class="empty" @click.prevent="clearCarts" >清空</span>
            </div>
            <div class="list-content" ref="listContent">
               <ul>
                  <li class="food" v-for="(item,index) in carts" :key="index">
                     <span class="name">{{item.name}}</span>
                     <div class="price">
                        <span>￥{{item.price*item.count}}</span>
                     </div>
                     <div class="cartcontrol-wrapper">
                        <addCart :food="item"></addCart>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </transition>

      <transition name="fade">
         <div class="list-mask" @click="popup=false" v-show="popup && carts.length"></div>
      </transition> -->

      <div class="ball-container">
         <div v-for="(boll,index) in bolls" :key="index">
            <transition name="drop" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
               <div class="ball" v-show="boll.show">
                  <div class="inner inner-hook"></div>
               </div>
            </transition>
         </div>
      </div>

   </div>      
</template>

<script>
import addCart from './AddCart'
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
   data(){
      return {
         popup: false,
         bolls: [
            { show: false }
         ],
         dropBolls: []
      }
   },
   components: {
      addCart
   },
   computed: {
      ...mapGetters(['carts']),
      total(){
         let t = 0;
         this.carts.forEach((item)=>{
            t += item.count;
         })
         return t;
      },
      totalPrice(){
         let p = 0;
         this.carts.forEach((item)=>{
            p += item.count*item.price;
         })
         return p;
      },
   },
   updated () {
      if(!this.carts.length){ 
         this.popup = false;
      }
   },
   methods: {
      clearCarts(){
         this.carts.forEach(item=>item.count=0);
         this.popup = false;
      },
      show(){
         if(this.carts.length){
            this.popup = !this.popup;
         }else{
            this.popup = false;
         }
         
      },
      drop(el){
         this.bolls.forEach((item,index)=>{
            if(!item.show){
               item.show = true;
               item.el = el;
               this.dropBolls.push(item);
               return;
            }
            
         })
      },
      beforeEnter: function (el) {
         
         let count = this.bolls.length;
         while(count--){
            let boll = this.bolls[count];
            if(boll.show){
               let rect = boll.el.getBoundingClientRect();
               let x = rect.left - 32;
               let y = -(window.innerHeight - rect.top - 22);
               el.style.display = '';
               el.style.webkitTransform = `translate3d(0,${y}px,0)`;
               el.style.transform = `translate3d(0,${y}px,0)`;
               let inner = el.getElementsByClassName('inner-hook')[0];
               inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
               inner.style.transform = `translate3d(${x}px,0,0)`;
            }
         }
      },
      enter: function (el,done) {
         let rf = el.offsetHeight;
         this.$nextTick(() => {
            el.style.webkitTransform = 'translate3d(0,0,0)';
            el.style.transform = 'translate3d(0,0,0)';
            let inner = el.getElementsByClassName('inner-hook')[0];
            inner.style.webkitTransform = 'translate3d(0,0,0)';
            inner.style.transform = 'translate3d(0,0,0)';
            el.addEventListener('transitionend', done);
        });
      },
      afterEnter: function (el) {
         let boll = this.dropBolls.shift();
         if (boll) {
            boll.show = false;
            el.style.display = 'none';
         }
      }

   }
}
</script>

<style lang="scss" scoped>
.cart {
   position: fixed;
   left: 0;
   bottom: 0;
   z-index: 50;
   width: 100%;
   height: 48px;
   
   .content {
      display: flex;
      background: #504D47;
      .content-left {
         flex: 1;
         .logo-wrapper {
            display: inline-block;
            vertical-align: top;
            position: relative;
            top: -10px;
            margin: 0 12px;
            padding: 6px;
            width: 56px;
            height: 56px;
            box-sizing: border-box;
            border-radius: 50%;
            background: #444;
            .logo {
               width: 100%;
               height: 100%;
               border-radius: 50%;
               text-align: center;
               background: #333;
               &.highlight {
                  background: rgb(0, 160, 220);
               }
               .iconfont {
                  line-height: 44px;
                  font-size: 24px;
                  color: #80858a;
                  &.highlight {
                     color: #fff;
                  }
               }
            }
            .num {
               position: absolute;
               top: 0;
               right: 0;
               padding: 0 6px;
               height: 16px;
               line-height: 17px;
               text-align: center;
               border-radius: 16px;
               font-size: 9px;
               color: #fff;
               background: #EF4C1B;
               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
            }
         }
         .price {
            display: inline-block;
            vertical-align: top;
            margin-top: 12px;
            line-height: 24px;
            padding-right: 12px;
            box-sizing: border-box;
            border-right: 1px solid rgba(255, 255, 255, 0.1);
            color: #fff;
            font-size: 20px; 
            &.highlight {
               color: #fff;
            }
         }
         .desc {
            display: inline-block;
            vertical-align: top;
            margin: 13px 0 0 12px;
            color: #aaaaaa;
            line-height: 24px;
            font-size: 14px;
         }
      }

      .content-right {
         flex: 0 0 105px;
         width: 105px;
         .pay {
            height: 48px;
            line-height: 48px;
            text-align: center;
            font-size: 14px;
            font-weight: 700;
            background: #555;
            color: #fff;
            &.on {
               background: rgb(0, 160, 220);
               
            }
         }
      }
   }


   .shopcart-list {
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      width: 100%;
      
      transform: translate3d(0, -100%, 0);
      &.slide-enter-active, &.slide-leave-active {
         transition: all 0.2s;
      }
      &.slide-enter, &.slide-leave-active {
         transform: translate3d(0, 0, 0)
      }

      .list-header {
         height: 40px;
         line-height: 40px;
         padding: 0 15px;
         background: #f3f5f7;
         border-bottom: 1px solid rgba(7, 17, 27, 0.1);
         .title {
            float: left;
            font-size: 16px;
            color: #555;
         }
         .empty {
            float: right;
            font-size: 16px;
            color: rgb(0, 160, 220);
         }
      }

      .list-content {
         padding: 0 15px;
         max-height: 217px;
         overflow: hidden;
         background: #fff;
         padding-bottom: 20px;
         .food {
            position: relative;
            padding: 12px 0;
            box-sizing: border-box;
            list-style: none;

            .name {
               line-height: 24px;
               font-size: 15px;
               color: #333;
            }
            .price {
               position: absolute;
               right: 90px;
               bottom: 12px;
               line-height: 24px;
               font-size: 16px;
               font-weight: 700;
               color: #E34E22;
            }
            .cartcontrol-wrapper {
               position: absolute;
               right: 0;
               top: 12px;
            }
         }
      }
   }

   .ball-container {
      .ball {
         position: fixed;
         left: 32px;
         bottom: 22px;
         z-index: 200;
         transition: all 0.2s cubic-bezier(0.49, -0.29, 0.75, 0.41);
         .inner {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: rgb(0, 160, 220);
            transition: all 0.2s linear;
         }
      }
   }

   .list-mask {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -2;
      opacity: 1;
      background: rgba(7, 17, 27, 0.6);
      &.fade-enter-active, &.fade-leave-active {
         transition: all 0.5s
      }
      &.fade-enter, &.fade-leave-active {
         opacity: 0;
         background: rgba(7, 17, 27, 0);
      }
   }
}
</style>
