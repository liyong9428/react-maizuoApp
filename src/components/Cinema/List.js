import React, { Component } from 'react';
import './List.scss'

class List extends Component {
   constructor(props){
      super(props);
      this.state = {
         list: [
            {
               name: '佰迦乐大光明影城文峰店',
               type: '小卖品',
               addr: '上海市张杨北路801号文峰广场二楼',
               tel: '021-2206967'
            },
            {
               name: '佰迦乐大光明影城文峰店',
               type: '小卖品',
               addr: '上海市张杨北路801号文峰广场二楼',
               tel: '021-2206967'
            },
            {
               name: '佰迦乐大光明影城文峰店',
               type: '小卖品',
               addr: '上海市张杨北路801号文峰广场二楼',
               tel: '021-2206967'
            },
            {
               name: '佰迦乐大光明影城文峰店',
               type: '小卖品',
               addr: '上海市张杨北路801号文峰广场二楼',
               tel: '021-2206967'
            },
            {
               name: '佰迦乐大光明影城文峰店',
               type: '小卖品',
               addr: '上海市张杨北路801号文峰广场二楼',
               tel: '021-2206967'
            },
            {
               name: '佰迦乐大光明影城文峰店',
               type: '小卖品',
               addr: '上海市张杨北路801号文峰广场二楼',
               tel: '021-2206967'
            },
            {
               name: '佰迦乐大光明影城文峰店',
               type: '小卖品',
               addr: '上海市张杨北路801号文峰广场二楼',
               tel: '021-2206967'
            },
            {
               name: '佰迦乐大光明影城文峰店',
               type: '小卖品',
               addr: '上海市张杨北路801号文峰广场二楼',
               tel: '021-2206967'
            },
            {
               name: '佰迦乐大光明影城文峰店',
               type: '小卖品',
               addr: '上海市张杨北路801号文峰广场二楼',
               tel: '021-2206967'
            },
            {
               name: '佰迦乐大光明影城文峰店',
               type: '小卖品',
               addr: '上海市张杨北路801号文峰广场二楼',
               tel: '021-2206967'
            },
            {
               name: '佰迦乐大光明影城文峰店',
               type: '小卖品',
               addr: '上海市张杨北路801号文峰广场二楼',
               tel: '021-2206967'
            },
            {
               name: '佰迦乐大光明影城文峰店',
               type: '小卖品',
               addr: '上海市张杨北路801号文峰广场二楼',
               tel: '021-2206967'
            },
            {
               name: '佰迦乐大光明影城文峰店',
               type: '小卖品',
               addr: '上海市张杨北路801号文峰广场二楼',
               tel: '021-2206967'
            },
            {
               name: '佰迦乐大光明影城文峰店',
               type: '小卖品',
               addr: '上海市张杨北路801号文峰广场二楼',
               tel: '021-2206967'
            }
         ]
      }
   }
   handleClick(i,e){
      this.props.route.history.push('/cdetail',{info: this.state.list[i]});
      window.title1 = this.state.list[i].name;
   }
   render() {
      return (
         <div className="list">
            {
               this.state.list.map((item,index)=>{
                  return (
                     <ol key={index}>
                        <li onClick={this.handleClick.bind(this,index)}>
                           <div>
                              <h2>{item.name}</h2>
                              <h3>{item.addr}</h3>
                              <h4>距離未知</h4>
                           </div>
                           <span className='iconfont icon-arrow-right'></span>
                        </li>
                     </ol>
                  )
               })
            }
         </div>
      )
   }
}

export default List;