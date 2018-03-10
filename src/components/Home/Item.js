import React, { Component } from 'react';
import './Item.scss'
import {Link} from 'react-router-dom'


class Item extends Component {
   
   render() {
      return (
         <div className='item'>
           <Link to={{pathname:'/detail',state:this.props.item}} onClick={()=>{window.title1=this.props.item.name}}>
            <img src={this.props.item.cover.origin || '../../styles/timg.jpg'} width="100%"/>
            <div className="title">
               <h2>
                  <p>{this.props.item.name}</p>
                  {
                     this.props.flag=='nowplay'?
                     <p className="last">
                        {this.props.item.cinemaCount}家影院上映&nbsp;&nbsp;
                        {this.props.item.watchCount}人购票
                     </p>
                     : null
                  }
               </h2>
               {
                  this.props.flag=='nowplay' ?
                  <h3>{this.props.item.grade}</h3> :
                  <h4>即将上映</h4>
               }
            </div>
            </Link>
         </div>
      )
   }
}

export default Item;