import React, { Component } from 'react';
import './Item.scss'
import {Link} from 'react-router-dom'
class Item extends Component {
   newTime(){
      let time = this.props.item.premiereAt
      return new Date(time).toLocaleString().replace(/\//g, '-')
   }
   render() {
      return (
         <Link to={{pathname:'/detail',state:this.props.item}}  onClick={()=>{window.title1=this.props.item.name}}>
         <div className="item1">
            <div>
               <img src={this.props.item.poster.origin} width="60"/>
            </div>
            <div className="right">
               <h2>
                  <span>{this.props.item.name}</span>
                  <span>
                    
                     { this.props.flag=='nowplay' ? this.props.item.grade : ''}
                     <i className="iconfont icon-arrow-right"></i>
                  </span>
               </h2>
               {this.props.flag=='nowplay'?
                  <h3>{this.props.item.intro}</h3>:
                  <h3>&nbsp;</h3>
               }
               {
                  this.props.flag=='nowplay'?
                  <h4>
                     {this.props.item.cinemaCount}家影院上映&nbsp;&nbsp;&nbsp;&nbsp;
                     {this.props.item.watchCount}人购票
                  </h4>:
                  <h4 style={{color: '#F28F31'}}>{this.newTime()}&nbsp;上映</h4>
               }
            </div>
         </div>
         </Link>
      );
   }
}

export default Item;