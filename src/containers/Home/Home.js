import React, { Component } from 'react'
import './Home.scss'
import nowplay from './nowplay'
import forthcom from './forthcom'
// 引入展示组件
import Carousel from '../../components/Home/Carousel'
import Nowplaying from '../../components/Home/Nowplaying'
import Forthcoming from '../../components/Home/Forthcoming'

class Home extends Component {
   constructor(props){
      super(props);
      this.state={
         nowplay,
         forthcom
      }
   }
   render() {
      return (
         <div className="home">
            <Carousel></Carousel>
            <Nowplaying nowplay={this.state.nowplay}></Nowplaying>
            <div className="icon">
               <span>即将上映</span>
            </div>
            <Forthcoming forthcom={this.state.forthcom}></Forthcoming>
         </div>
      )
   }
}

export default Home;