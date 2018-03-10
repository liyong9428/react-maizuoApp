<template>
   <div class="buy" @click.stop.prevent>
      <transition name="rotate">
         <div class="sub" v-show="food.count>0">
            <span class="iconfont icon-icon--" @click.stop="sub"></span>
         </div>
      </transition>
      <transition name="fade">
         <strong v-show="food.count>0">{{food.count?food.count:1 }}</strong>
      </transition>
      <span class="add iconfont icon-wuuiconxiangjifangda" @click.stop.prevent="add"></span>
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
   data () {
      return {}
   },
   props: {
      food: {
         type: Object,
         require: true,
         default: {}
      }
   },
   computed: {
      ...mapState(['carts','goods'])
   },
   methods: {
      add(e){
         if (this.food.count) {
            this.food.count++;
         }else {
            this.$set(this.food,'count',1);
         }
         this.$emit('add',e.target)
      },
      sub(){
         if(this.food.count>0){
            this.food.count--;
         }
      }
   }
}
</script>


<style lang="scss" scoped>
.rotate-enter-active,.rotate-leave-active {
   transition: all .7s;
}
.rotate-enter,.rotate-leave-active{
   transform: translateX(48px);
}
.fade-enter-active,.fade-leave-active {
   transition: all .8s;
}
.fade-enter,.fade-leave-active{
   opacity: 0;
}
.buy {
   width: 70px;
   float: right;
   height: 24px;
   line-height: 24px;
   position: relative;
   margin-right: 2px;
   color:rgb(0,160,220);
   .sub {
      position: absolute;
      left : -10px;
      top: -10px;
      padding: 10px;
      span {
         font-size: 24px;
         color:rgb(0,160,220);
      }
   }
   .add {
      position: absolute;
      top: -10px;
      font-size: 19px;
      padding: 10px;
      right: -10px;;
   }
   strong {
      font-size: 13px;
      color: rgb(147,153,159);
      position: absolute;
      left: 50%;
      top: -10px;
      transform: translateX(-50%);
      padding: 10px;
   }
}
</style>

