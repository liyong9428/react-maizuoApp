import React,{Component} from 'react';
import './Left.scss'

class Left extends Component {
   constructor(){
      super();
      this.state = {
         text: '',
         pwd: '',
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
      let pwd  = this.state.pwd.trim();
      
      if(!text.length){
         this.setState({info: '卡号不能为空', show: true})
         return;
      }
      if(text!='8888'){
         this.setState({info: '卡号不存在', show: true})
         return;
      }
      if(!pwd.length){
         this.setState({info: '密码不能为空', show: true})
         return;
      }
      if(pwd!='8888'){
         this.setState({info: '密码不正确',show: true})
         return;
      }

      this.setState({info: '查询成功'});
      setTimeout(()=>{this.setState({show:false})},3000)

   }
   render(){
      return (
         <div className="left">
            <p><input type="text" placeholder="卡号" name="text" value={this.state.text} onChange={this.handleChange.bind(this)}/></p>
            <p><input type="password" placeholder="密码" name="pwd" value={this.state.pwd} onChange={this.handleChange.bind(this)}/></p>
            <b>{this.state.show ? this.state.info : ''}</b>
            <div className='btn'>
               <span onClick={this.Query.bind(this)}>查询</span>
            </div>
         </div>
      )
   }
}

export default Left;