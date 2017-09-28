import React from 'react';
import "./index.scss"
import logo from "../../images/logo/logo.png"
import {Link} from 'react-router-dom'
export default class Nav extends React.Component{

    render(){
        return(
            <div className="NavBox">
                <div className="NavLog">
                    <img src={logo} alt=""/>
                </div>
                <div className="NavList">
                    <div><Link to={'/'}><p>首页</p></Link></div>
                    <div><Link to={'/'}><p>GITC北京站</p></Link></div>
                    <div><Link to={'/'}><p>奖项评选报名</p></Link></div>
                    <div><Link to={'/issue'}><p>议题提交</p></Link></div>
                    <div><Link to={'/'}><p>关于主办方</p></Link></div>
                    <div><Link to={'/'}><p>加入我们</p></Link></div>
                </div>
                <div className="NavButton">
                    <div className="NavBtn"><a href="https://www.bagevent.com/event/768490">立即购买</a></div>
                    <div className="NavBtn">我的门票</div>
                </div>
            </div>
        )
    }
}
