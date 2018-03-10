import React, {Component} from 'react';
import './Card.scss'

import Left from '../../components/Card/Left'
import Right from '../../components/Card/Right'

class List extends Component {
   constructor(props) {
      super(props);
      this.state = {
         current: 'one'
      }
      window.scrollTo(0,0);
   }
   render() {
      return (
         <div className="card">
            <div className="tabs">
               <b
                  onClick={() => this.setState({current: 'one'})}
                  className={this.state.current == 'one'
                  ? 'on'
                  : ''}>賣座卡</b>
               <b
                  onClick={() => this.setState({current: 'two'})}
                  className={this.state.current == 'two'
                  ? 'on'
                  : ''}>電子賣座卡</b>
            </div>
            {this.state.current == 'one'? <Left /> : <Right />}
         </div>
      )
   }
}

export default List;