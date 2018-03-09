import './HeadBar.scss'
import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class HeadBar extends Component {
   render() {
      return (
         <header>
            <div className="header-icon" onClick={()=>this.props.toggle()}>
               <i className="iconfont icon-list"></i>
            </div>
            <div className="header-right">
               <h2 onClick={()=>this.props.toggle()} >{window.title1 || '卖座电影'}</h2>
               <h3>
                  <span>上海&nbsp;<i className='iconfont icon-dropdown'></i></span>
                  <Link to='/user' onClick={()=>{this.props.off()}}>
                     <span className='iconfont icon-user'></span>
                  </Link>
               </h3>
            </div>
         </header>
      )
   }
}

export default HeadBar;