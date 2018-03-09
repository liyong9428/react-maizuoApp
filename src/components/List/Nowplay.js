import React,{Component} from 'react'
import Item from './Item'

class Nowplay extends Component {
   render(){
      return (
         <div className="nowplay">
            {
               this.props.nowplay.map((item,i)=>{
                  return  <Item key={i} item={item} flag={'nowplay'} history={this.props.history}/>
               })
            }
         </div>
      )
   }
}

export default Nowplay;