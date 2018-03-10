<template>
<div>
  
   <div class="dialog">
      <div class="modal" v-show="show" @click="send">
         <span>&times;</span>
      </div>
      <transition name="bounce">
      <div class="con" ref="con" v-show="show">
         <h2 class="title">粥品香坊(万达店)</h2>
         <div class="total">
            <div class="item">
               <h3>4.2</h3>
               <span>评分</span>
            </div>
            <div class="item">
               <h3>150单</h3>
               <span>月售</span>
            </div>
            <div class="item">
               <h3>蜂鸟专送</h3>
               <span>约25分钟</span>
            </div>
            <div class="item">
               <h3>5元</h3>
               <span>配送费</span>
            </div>
            <div class="item">
               <h3>600m</h3>
               <span>距离</span>
            </div>
         </div>
         <div class="notice">
            <h2>--- 公告 ---</h2>
            <p>欢迎光临，用餐高峰期请提前下单，谢谢！</p>
         </div>
      </div>
      </transition>
   </div>
  
</div>
   
</template>

<script>
export default {
   data(){
      return {}
   },
   props: {
      show: {
         type: Boolean,
         require: true,
         default: false
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
.bounce-enter-active {
   animation: bounce-in 0.1s;
}
@keyframes bounce-in {
   from {
      transform: scale3d(0,0,0)
   }
   to {
      transform: scale3d(1,1,1);
   }
}
.dialog {
   .modal {
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 2333;
      background: rgba(0,0,0,.5);
      span {
         font-size: 35px;
         color: #fff;
         position: absolute;
         left: 48%;
         bottom: 10%;
         font-weight: normal;
      }
   }
   .con {
      width: 90%;
      margin: auto;
      border-radius: 5px;
      background: #fff;
      filter: blur(.3px);
      padding: 20px 20px 25px;
      position: absolute;
      z-index: 44444;
      top: 150px;
      left: 5%;
      right: 5%;
      .title {
         font-size: 20px;
         text-align: center;
         color: #333;
      }
      .total {
         display: flex;
         justify-content: space-around;
         color: #333;
         margin-top: 15px;
      }
      .item {
         text-align: center;
         h3 {
            font-size: 15px;
         }
         span {
            font-size: 12px;
            color: #888;
         }
      }
      .notice {
         margin-top: 18px;
         text-align: center;
         h2 {
            font-size: 14px;
            color: #888;
            font-weight: normal;
            padding-bottom: 8px;
         }
         p {
            font-size: 14px;
            color: #555;
         }
      }
   }
}

</style>

