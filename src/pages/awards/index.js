import React from 'react';
import './index.scss'
import First from "./components/first/index";
import Event from "./components/event/index";
import CentralSection from "./components/centralsection/index";
import Score from "./components/score/index";
import Tail from "./components/tail/index";
export default class Awards extends React.Component{

    constructor (props) {
        super(props)
    }

    render (){
        return(
            <div className="AwardsBox">
                <First/>
                <div className="AwardsLaout">
                    <Event/>
                    <CentralSection/>
                    <Score/>
                    <Tail/>
                </div>
            </div>
        )
    }


}



