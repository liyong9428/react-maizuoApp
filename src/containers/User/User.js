import React, {Component} from 'react';
import './User.scss'

class User extends Component {
   constructor(props){
      super(props)
      let isLogin = sessionStorage.getItem('isLogin');
      if(!isLogin){
         props.history.push('/login')
         window.title1 = '登录';
      }else{
         window.title1 = '我的';
      }
      
   }
   logout(){
      sessionStorage.removeItem('isLogin');
      this.props.history.push('/login')
      window.title1 = '登录';
   }
   render() {
      return (
         <div className='user'>
            <div className="title">
               <div className="left">
                  <img src="https://pic.maizuo.com/usr/default/maizuomoren66.jpg"/>
               </div>
               <div className="right">
                  <h2>18201400020</h2>
                  <h3>ID:341853974</h3>
                  <h4>
                     <span onClick={this.logout.bind(this)}>退出</span>
                  </h4>
               </div>
            </div>
            <ul className="list">
               <li>
                  <span><img src="https://ly809652226.github.io/imageserver/maizuo1.png"/>&nbsp;&nbsp;影票订单</span>
                  <span className="iconfont icon-arrow-right"></span>
               </li>
               <li>
                  <span><img src="https://ly809652226.github.io/imageserver/maizuo2.png"/>&nbsp;&nbsp;影票待付订单</span>
                  <span className="iconfont icon-arrow-right"></span>
               </li>
               <li>
                  <span><img src="https://ly809652226.github.io/imageserver/maizuo3.png"/>&nbsp;&nbsp;商城订单</span>
                  <span className="iconfont icon-arrow-right"></span>
               </li>
            </ul>
            <ol>
               <li>
                  <span><img src="https://ly809652226.github.io/imageserver/maizuo4.png"/>&nbsp;&nbsp;我的现金券</span>
                  <span className="iconfont icon-arrow-right"></span>
               </li>
               <li>
                  <span><img src="https://ly809652226.github.io/imageserver/maizuo5.png"/>&nbsp;&nbsp;账户余额</span>
                  <span className="iconfont icon-arrow-right"></span>
               </li>
               <li>
                  <span><img src="https://ly809652226.github.io/imageserver/maizuo6.png"/>&nbsp;&nbsp;我的卖座卡</span>
                  <span className="iconfont icon-arrow-right"></span>
               </li>
            </ol>
         </div>
      );
   }
}

export default User;