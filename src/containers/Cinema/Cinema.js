import React, { Component } from 'react';
import './Cinema.scss'
import List from '../../components/Cinema/List'

class Cinema extends Component {
   constructor(){
      super();
      window.scrollTo(0,0);
   }
   render() {
      return (
         <div className='cinema'>
            <List route={this.props}/>
         </div>
      )
   }
}

export default Cinema;