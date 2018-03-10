import React,{Component} from 'react'
import ReactSwipe from 'react-swipe'
import './Carousel.scss'

class Carousel extends Component {
   render(){
      return (
         <div className='carousel'>
            <ReactSwipe swipeOptions={{continuous:true,auto:2000}}>
               <div><img src={'https://static.maizuo.com/pc/v5/h5PicUpload/3ffa7c910eeeebed4a1c8be727808d0e.jpg' || '../../styles/timg.jpg'}/></div>
               <div><img src={'https://pic.maizuo.com/h5PicUpload/288990d94a53c7920834102c74f521e0.jpg' || '../../styles/timg.jpg'}/></div>
               <div><img src={'https://pic.maizuo.com/h5PicUpload/65069aaed86ef60773a319a12db1a9ba.jpg' || '../../styles/timg.jpg'}/></div>
            </ReactSwipe>
         </div>
      )
   }
}

export default Carousel;