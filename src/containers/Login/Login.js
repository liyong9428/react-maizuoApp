import React, { Component } from 'react';
import './Login.scss'

class Login extends Component {
   constructor(props){
      super(props);
      this.state = {
         text: '',
         pwd: '',
         show: false,
         info: ''
      }
      window.title1 = '登录';
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
         this.setState({info: '手机号码不能为空', show: true})
         return;
      }
      if(text!='13888888888'){
         this.setState({info: '用户不存在', show: true})
         return;
      }
      if(!pwd.length){
         this.setState({info: '密码不能为空', show: true})
         return;
      }
      if(pwd!='888'){
         this.setState({info: '密码不正确',show: true})
         return;
      }
      sessionStorage.setItem('isLogin',1)
      this.setState({text: '',pwd: ''})
      this.props.history.push('/user');
      window.title1 = '我的';
   }
   render(){
      return (
         <div className="login">
            <input type="text" autoComplete='off' placeholder="请输入您的手机号！" name="text" value={this.state.text} onChange={this.handleChange.bind(this)}/>
            <input type="password" autoComplete='off' placeholder="请输入您的密码喔！" name="pwd" value={this.state.pwd} onChange={this.handleChange.bind(this)}/>
            <b>{this.state.show ? this.state.info : ''}</b>
            <div className='btn'>
               <span onClick={this.Query.bind(this)}>登录</span>
            </div>
         </div>
      )
   }
}

export default Login;