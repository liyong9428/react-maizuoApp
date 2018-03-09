import React,{Component} from 'react'
import './Forthcoming.scss'
import {Link} from 'react-router-dom'
import Item from './Item'

export default class Forthcoming extends Component {
   render(){
      return (
         <div className="forthcom">
            {
               this.props.forthcom.map((item,index)=>{
                  return <Item key={index} item={item} flag={'forthcom'}></Item>
               })
            }
            <div className="more">
               <Link to="list/ji">更多即将上映电影</Link>
            </div>
         </div>
      )
   }
}