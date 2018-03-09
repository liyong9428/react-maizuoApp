import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './Drawer.scss'

class Drawer1 extends Component {
   render() {
      return (
         <ul >
            <li>
               <NavLink to="/" onClick={()=>{this.props.toggle();window.title1='卖座电影'}}>
                  <i>首页</i>
                  <span className="iconfont icon-arrow-right"></span>
               </NavLink>
            </li>
            <li>
               <NavLink to="/list" onClick={()=>{this.props.toggle();window.title1='卖座电影'}}>
                  <i>影片</i>
                  <span className="iconfont icon-arrow-right"></span>
               </NavLink>
            </li>
            <li>
               <NavLink to="/cinema" onClick={()=>{this.props.toggle();window.title1='全部影院'}}>
                  <i>影院</i>
                  <span className="iconfont icon-arrow-right"></span>
               </NavLink>
            </li>
            <li>
               <NavLink to='/user' onClick={()=>{this.props.toggle()}}>
                  <i>我的</i>
                  <span className="iconfont icon-arrow-right"></span>
               </NavLink>
            </li>
            <li>
               <NavLink to="/card" onClick={()=>{this.props.toggle();window.title1='卖座卡'}}>
                  <i>卖座卡</i>
                  <span className="iconfont icon-arrow-right"></span>
               </NavLink>
            </li>
         </ul>
      )
   }
}

export default Drawer1;
