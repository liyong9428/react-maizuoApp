import React, {Component} from 'react';
import './Right.scss'

class Right extends Component {
   constructor(){
      super();
      this.state = {
         text: '',
         show: false,
         info: ''
      }
   }
   handleChange({target}){
      this.setState({
         [target.name]: target.value
      })
   }
   Query(){
      let text = this.state.text.trim();
      
      if(!text.length){
         this.setState({info: '卡号不能为空', show: true})
         return;
      }
      if(text.length<10){
         this.setState({info: '无法获取到该卡的信息', show: true})
         return;
      }

      this.setState({info: '查询成功'});
      setTimeout(()=>{this.setState({show:false})},3000)
      
   }
   render(){
      return (
         <div className="left">
            <p><input type="text" placeholder="请输入10位的电子卖座卡号" name="text" value={this.state.text} onChange={this.handleChange.bind(this)}/></p>
            <b>{this.state.show ? this.state.info : ''}</b>
            <div className='btn'>
               <span onClick={this.Query.bind(this)}>查询</span>
            </div>
         </div>
      )
   }
}

export default Right;