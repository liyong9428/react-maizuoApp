import React, { Component } from 'react';
import './Nowplaying.scss'
import {Link} from 'react-router-dom'
import Item from './Item'

class Nowplaying extends Component {
   render() {
      return (
         <div className='nowplaying'>
            {
               this.props.nowplay.map((item,index)=>{
                  return <Item key={index} item={item} flag={'nowplay'}></Item>
               })
            }

            <div className="more">
               <Link to="/list">更多热映电影</Link>
            </div>
         </div>
      )
   }
}
Nowplaying.defaultProps = {
   data: []
}

export default Nowplaying;