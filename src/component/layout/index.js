import React from "react"
import SwiperMy from "../swiper/index";
import Nav from "../navigation/index";
import './index.scss'
export default class Layout extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="layoutBox">
                 <Nav/>
                 <div className="layoutUpper">
                     <SwiperMy/>
                 </div>
                 <div className="layoutLower">
                     {this.props.children}
                 </div>

            </div>
        )
    }
}
