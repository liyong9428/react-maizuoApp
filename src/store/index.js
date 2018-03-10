import Vue from 'vue'
import Vuex from 'vuex'
import Json from '../../data.json'
Vue.use(Vuex);

const state = {
   seller: Json.seller,
   goods: Json.goods,
   ratings: Json.ratings,
   carts: []
}

const getters = {
   getGoodsName(state){
      return state.goods.map((item)=>{
         return item.name;
      })
   },
   carts(state){
      let foods = [];
      state.goods.forEach((item)=>{
         item.foods.forEach((i)=>{
            if(i.count){
               foods.push(i);
            }
         })
      })
      return foods;
   }
}

const mutations = {}

export default new Vuex.Store({
   state, 
   mutations,
   getters
})


