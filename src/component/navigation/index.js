import React from 'react';
import "./index.scss"
import logo from "../../images/logo/logo.png"
import {Link} from 'react-router-dom'

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      btnshow: false,
      whichPath: '/layout/home'
    }
  }
  
  componentDidMount() {
  
  }
  
  handeClick() {
    let phone = localStorage.getItem('phone');
    let cb = () => {
      this.props.history.push('/layout/ticket')
      this.setState({
        whichPath: '/layout/ticket'
      })
    }
    if (phone) {
      cb()
    } else {
      this.props.setLoginCb(cb)
      this.props.onClick()
      this.setState({
        btnshow: !this.props.btnshow
      })
    }
  }
  
  render() {
    return (
    <div className="NavBox">
      <div className="NavLog">
        <img src={logo} alt=""/>
      </div>
      <div className="NavList">
        
        <Link
        to={'/layout/home'}
        onClick={() => this.setState({whichPath: '/layout/home'})}
        style={this.state.whichPath === '/layout/home' ? {color: '#023fd6'} : null}
        >首页</Link>
        <Link
          to={'/'}
          onClick={() => this.setState({whichPath: '/'})}
          style={this.state.whichPath === '/' ? {color: '#023fd6'} : null}
        >GITC北京站</Link>
        <Link
          to={'/awards'}
          onClick={() => this.setState({whichPath: '/awards'})}
          style={this.state.whichPath === '/awards' ? {color: '#023fd6'} : null}
        >奖项评选报名</Link>
        <Link to={'/layout/issue'}
              onClick={() => this.setState({whichPath: '/layout/issue'})}
              style={this.state.whichPath === '/issue' ? {color: '#023fd6'} : null}>议题提交</Link>
        <div><p><a href="http://www.kylinclub.org/">关于主办方</a></p></div>
        <Link to={'/'}>加入我们</Link>
      </div>
      <div className="NavButton">
        <div className="NavBtn"><a href="https://www.bagevent.com/event/768490">立即购买</a></div>
        <div className="NavBtn"
             onClick={this.handeClick.bind(this)}
             style={this.state.whichPath === '/layout/ticket' ? {color: '#023fd6'} : null}
        >我的门票
        </div>
      </div>
    </div>
    )
  }
}
