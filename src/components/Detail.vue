<template>
   <div>
      <transition name="fade">
      <div class="detail" v-show="show" @click="send">
         <div class="modal" @click.stop>
            <img :src="food.image" width="100%">
            <div class="right">
               <p class="title">{{food.name}}</p>
               <p class="count">月售{{food.sellCount}}份&nbsp;&nbsp;&nbsp;好评&nbsp;{{food.rating}}</p>
               <p class="price">
                  <span><i>￥</i>{{food.price}}</span>
                  <addCart :food="food"></addCart>
               </p>
            </div>
         </div>
      </div>
      </transition>
   </div>
</template>

<script>
import addCart from './AddCart'
export default {
   data(){
      return {}
   },
   components: {
      addCart
   },
   props: {
      show: {
         type: Boolean,
         require: true,
         default: false
      },
      food: {
         type: Object,
         require: true,
         default: {}
      }
   },
   methods: {
      send(){
         this.$emit('change',false);
      }
   }
}
</script>

<style lang="scss">
.fade-enter-active,.fade-leave-active {
   transition: all .5s;
}
.fade-enter,.fade-leave-active {
   opacity: 0;
}
.detail {
   width: 100%;
   position: fixed;
   left :0;
   right: 0;
   top :0;
   bottom: 0;
   z-index: 3000;
   background: rgba(0,0,0,.5);
   .modal {
      width: 84%;
      position: absolute;
      border-radius: 3px;
      left: 8%;
      right: 8%;
      top: 80px;
      z-index: 20000;
      background: #fff;
      border: 1px solid #999;
      img {
         border: none;
         outline: none;
         width: 100%;
         max-width: 100%;
         border-radius: 3px 3px 0 0;
         max-height: 240px;
      }
      .right {
         padding: 8px 15px 20px;
         .title {
            font-weight: bold;
            color: #222;
            font-size: 15px;
            padding-bottom: 2px;
         }
         .count {
            font-size: 12px;
            color: #666;
         }
         .price {
            color: #FF6600;
            font-size: 18px;
            font-weight: bold;
            padding-top: 10px;
            overflow: hidden;
            // float: left;
            i {
               font-size: 13px;
               font-style: normal;
            }
            &>span {
               float: left;
            }
         }
      }
   }
}

</style>

