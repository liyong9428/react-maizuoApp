import React, {Component} from 'react';
import './Detail.scss'

class Detail extends Component {
   constructor(props) {
      super(props);
      this.state = {
         item: props.location.state
      }
      window.title1 = props.location.state.name;
   }
   componentWillMount(){
     
      document.documentElement.scrollTop = 0;
   }
   render() {
      return (
         <div className="detail">
            <img src={this.state.item.cover.origin}/>
            <div className="box">
               <h2>影片简介</h2>
               <p>
                  <span>片　　名：</span>
                  <span>{this.state.item.name}</span>
               </p>
               <p>
                  <span>导　　演：</span>
                  <span>未知</span>
               </p>
               <p>
                  <span>主　　演：</span>
                  <span>未知</span>
               </p>
               <p>
                  <span>地区语言：</span>
                  <span>未知</span>
               </p>
               <p>
               <span>类　　型：</span>
               <span>未知</span>
               </p>
               <p>
                  <span>上映时间：</span>
                  <span>未知</span>
               </p>
               <div className="text">
                  不好意思，此接口已失效 !不好意思，此接口已失效 !不好意思，此接口已失效 !不好意思，此接口已失效 !不好意思，此接口已失效 !不好意思，此接口已失效
                  !不好意思，此接口已失效 !不好意思，此接口已失效 !不好意思，此接口已失效 !不好意思，此接口已失效 !不好意思，此接口已失效 !不好意思，此接口已失效
                  !不好意思，此接口已失效 !不好意思，此接口已失效 !不好意思，此接口已失效 !不好意思，此接口已失效 !不好意思，此接口已失效 !不好意思，此接口已失效
                  !不好意思，此接口已失效 !不好意思，此接口已失效 !
               </div>
               <span>立即购票</span>
            </div>
         </div>
      )
   }
}

export default Detail;