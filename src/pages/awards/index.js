import React from 'react';
import './index.scss'
import Nav from "../../component/navigation/index";
import SwiperMy from "../../component/swiper/index";
export default class Awards extends React.Component{

    constructor (props) {
        super(props)
    }
    componentWillMount () {
        this.props.history.hiddenLayout()
    }
    // componentWillUnmount () {
    //     this.props.history.showLayout()
    // }
    render (){
        return(
            <div className="AwardsBox">
                <Nav/>
                <SwiperMy/>
            </div>
        )
    }


}



