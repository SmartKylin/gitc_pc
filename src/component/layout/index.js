import React from "react"
import SwiperMy from "../swiper/index";
import Nav from "../navigation/index";
import './index.scss'
import Login from '../login/index.js'
export default class Layout extends React.Component{

    render(){
        return(
            <div className="layoutBox">
                 <Nav/>
                   <Login/>
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
