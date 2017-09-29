import React from 'react';
import './index.scss'
import First from "./components/first/index";
import Event from "./components/event/index";
import CentralSection from "./components/centralsection/index";
import Score from "./components/score/index";
import Tail from "./components/tail/index";
import Zanzhu from "./components/zanzhu/index";
import { BackTop } from 'antd';
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
                    <Zanzhu/>
                    <Tail/>
                    <div>
                        <BackTop />
                        <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
                    </div>
                </div>

            </div>
        )
    }


}



