import './styles/reset.css'
import './styles/icon.css'

import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'

import Home from './containers/Home/Home'
import List from './containers/List/List'
import Card from './containers/Card/Card'
import User from './containers/User/User'
import Login from './containers/Login/Login'
import Detail from './containers/Detail/Detail'
import Cinema from './containers/Cinema/Cinema'
import Cdetail from './components/Cinema/Cdetail'
import HeadBar from './components/common/HeadBar'
import Drawer1 from './components/common/Drawer1'

// 引入material-ui组件
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';

class App extends React.Component {
   constructor(){
      super();
      this.state = {
         open: false
      }
      window.scrollTo(0,0);
   }
   handleToggle=()=>this.setState({open: !this.state.open})
   handleFalse=()=>this.setState({open: false})
   render() {
      return (
         <Router basename='/react-maizuoApp/dist'>
            <div>
               {/* 头部组件 */}
               <HeadBar toggle={this.handleToggle} off={this.handleFalse}/>

               {/* 抽屉组件 */}
               <MuiThemeProvider>
                  <Drawer docked={false} width={'72%'} open={this.state.open}
                     onRequestChange={(open)=>this.setState({open})}
                     containerStyle={{background: '#282828'}}>
                     <Drawer1 toggle={this.handleToggle} ></Drawer1>
                  </Drawer>
               </MuiThemeProvider>

               {/* 配置路由 */}
               <Route exact path='/' component={Home}/>
               <Route exact path='/list' component={List}/>
               <Route path='/list/:n' component={List}/>
               <Route path='/user' component={User}/>
               <Route path='/card' component={Card}/>
               <Route path='/login' component={Login}/>
               <Route path='/cinema' component={Cinema}/>
               <Route path='/detail' component={Detail}/>
               <Route path='/cdetail' component={Cdetail}/>
            </div>
         </Router>
      )
   }
}

export default App;
