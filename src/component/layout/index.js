import React from "react"
import SwiperMy from "../swiper/index";
import Nav from "../navigation/index";
import './index.scss'
import Login from '../login/index.js'

import {Router, Route, Switch} from 'react-router-dom'
import Home from '../../pages/home'
import Ticket from '../../pages/ticket/index'
import Issue from '../../pages/issue/index'

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showhidden: false,
            cb: null
        }
    }

    toggleClick() {
        this.setState({
            showhidden: true
        })
    }
    closeLoginBox = () => {
        this.setState({
            showhidden: false

        })
    }
    setLoginCb = (cb) => {
        this.setState({
            cb
        })
    }
    closeClick=()=>{
        this.setState({
            showhidden: false

        })
    }
    render() {
      return (
            <Router history={this.props.history}>
                <div>
                    <div className="layoutBox">
                        <Nav history={this.props.history} onClick={this.toggleClick.bind(this)} setLoginCb={this.setLoginCb}/>
                        <Login toggleshow={this.state.showhidden} closeLoginBox={this.closeLoginBox} cb={this.state.cb}  closeClick={this.closeClick}/>
                        <div className="layoutUpper">
                            <SwiperMy />
                        </div>
                        <div className="layoutLower">
                            {this.props.children}
                        </div>
                    </div>
                    <Route exact path="/" component={Home}/>
                    <Route  path="/layout/home" component={Home}/>
                    <Route  path="/layout/ticket" component={Ticket}/>
                    <Route  path="/layout/issue" component={Issue}/>
                </div>
            </Router>
        )
    }
}
