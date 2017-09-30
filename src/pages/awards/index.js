import React from 'react';
import './index.scss'
import First from "./components/first/index";
import Event from "./components/event/index";
import CentralSection from "./components/centralsection/index";
import Score from "./components/score/index";
import { BackTop } from 'antd';
import Nav from "../../component/navigation/index";
import Footer from '../../pages/home/footer'

export default class Awards extends React.Component{

    constructor (props) {
        super(props)
    }

    render (){
        return(
            <div className="AwardsBox">
                <Nav history={this.props.history}/>
                <First/>
                <div className="AwardsLaout">
                    <Event/>
                    <CentralSection/>
                    <Score/>
                    <Footer/>
                    <div>
                        <BackTop />
                        <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
                    </div>
                </div>

            </div>
        )
    }


}



