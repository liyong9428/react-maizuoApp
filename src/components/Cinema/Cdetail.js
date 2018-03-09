import React, { Component } from 'react';
import './Cdetail.scss'

class Cdetail extends Component {
   constructor(props) {
      super(props);
      this.state = {
         info: props.location.state.info
      }
   }
   render() {
      return (
         <div className="detail1">
            <img src="//static.m.maizuo.com/v4/static/app/asset/66461d1a02a9eaa64876c90952c42aed.png"/>
            <div className="box">
               <div className="one">
                  <div className="img">
                     <img src="https://ly809652226.github.io/imageserver/mapzuo11.png"/>
                  </div>
                  <div className="right">
                     <h2>订座票</h2>
                     <h3>选好场次座位，到自助机取票</h3>
                  </div>
                  <span>立即订座</span>
               </div>
               <div className="one">
                  <div className="img">
                     <img src="https://raw.githubusercontent.com/ly809652226/imageserver/master/maizuo22.png"/>
                  </div>
                  <div className="right">
                     <h2>通兑票</h2>
                     <h3>有效期内到影院前台兑换影票</h3>
                  </div>
                  <span>立即订票</span>
               </div>
               <div className="one">
                  <div className="img">
                     <img src="https://raw.githubusercontent.com/ly809652226/imageserver/master/maizuo33.png"/>
                  </div>
                  <div className="right">
                     <h2 style={{paddingTop:'10px'}}>{this.state.info.type}</h2>
                  </div>
                  <span style={{top: '30px'}}>购买</span>
               </div>
               <div className="one">
                  <div className="img">
                     <img src="https://raw.githubusercontent.com/ly809652226/imageserver/master/maizuo44.png"/>
                  </div>
                  <div className="right">
                     <h2 style={{paddingTop:'10px'}}>{this.state.info.addr}</h2>
                  </div>
               </div>
               <div className="one">
                  <div className="img">
                     <img src="https://raw.githubusercontent.com/ly809652226/imageserver/master/maizuo55.png"/>
                  </div>
                  <div className="right">
                     <h2 style={{paddingTop:'10px'}}>{this.state.info.tel}</h2>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Cdetail;