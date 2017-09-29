import React from "react";
import img1 from "../../images/lunbotu/banner_01.png"
import img2 from "../../images/lunbotu/banner_01.png"
import img3 from "../../images/lunbotu/banner_01.png"
import "./index.css"
import "jquery"
import "swiper/dist/css/swiper.min.css"
import "swiper/dist/js/swiper.min.js"
import Swiper from "swiper/dist/js/swiper.js"

export default class SwiperMy extends React.Component {
  constructor () {
    super()
    this.state = {
      btnSwitchVisible: false
    }
  }
  
  render() {
    return (
    <div
      className="swiper-container"
      ref="container"
      onMouseEnter={() => this.setState({btnSwitchVisible: true})}
      onMouseLeave={() => this.setState({btnSwitchVisible: false})}
    >
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img src={img1} alt=""/>
        </div>
        <div className="swiper-slide">
          <img src={img2} alt=""/>
        </div>
        <div className="swiper-slide">
          <img src={img3} alt=""/>
        </div>
      </div>
      
      {/*<div className="swiper-pagination" ref="pagination"></div>*/}
      {
        this.state.btnSwitchVisible ?
        <div>
          <div className="swiper-button-prev swiper-button-white" ref="prev"></div>
          <div className="swiper-button-next swiper-button-white" ref="next"></div>
        </div>
        :
        null
      }
    </div>
    )
  }
  
  componentDidMount() {
    
    new Swiper(this.refs.container, {
      loop: true,
      effect: 'coverflow',
      autoplay: 3000,
      grabCursor: true,
      speed: 1000,
      autoplayDisableOnInteraction: false,
      // paginationType: 'fraction',
      prevButton: this.refs.prev,
      nextButton: this.refs.next,
    })
  }
  
}
