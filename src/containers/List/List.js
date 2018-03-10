import React, {Component} from 'react';
import './List.scss'

import Nowplay  from '../../components/List/Nowplay'
import Forthcom from '../../components/List/Forthcom'
import nowplay  from './nowplay'
import forthcom from './forthcom'

class List extends Component {
   constructor(props) {
      super(props);
      this.state = {
         current: 'one',
         nowplay,
         forthcom
      }
      window.scrollTo(0,0);
   }
   componentWillMount(){
      if(this.props.match.params.n && this.props.match.params.n=='ji'){
         this.setState({current: 'two'})
      }
     
   }
   render() {
      return (
         <div className="list2">
            <div className="tabs">
               <b onClick={()=>this.setState({current:'one'})} className={this.state.current=='one'?'on':''}>正在热映</b>
               <b onClick={()=>this.setState({current:'two'})} className={this.state.current=='two'?'on':''}>即将上映</b>
            </div>
            {
               this.state.current=='one'?
               <Nowplay history={this.props.history} nowplay={this.state.nowplay} />:
               <Forthcom history={this.props.history} forthcom={this.state.forthcom}/>
            }
         </div>
      )
   }
}

export default List;