import React, { Component } from 'react';
import Item from './Item'
class Forthcom extends Component {

   render() {
      return (
         <div>
            {
               this.props.forthcom.map((item,i)=>{
                  return <Item key={i} item={item} flag={'forthcom'}  history={this.props.history}/>
               })
            }
         </div>
      );
   }
}

export default Forthcom;