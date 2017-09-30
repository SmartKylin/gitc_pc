import React from 'react';
import "./index.scss"
import logo from "../../images/logo/logo.png"
// import {Link} from 'react-router-dom'


export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      btnshow: false,
    }
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
  
  // 点击子菜单处理时间
  handleClickLink = (path) => {
    this.props.history.push(path)
  }
  
  render() {
    let pathname = this.props.history.location.pathname
    return (
    
    <div className="NavBox">
      <div className='NavBoxInner'>
        <div className="NavLog">
          <img src={logo} alt=""/>
        </div>
        
        <div className="NavList">
          
          <div className='NavListBox'>
            <div className='NavListBoxInner'>
              <a href="http://www.thegitc.com/index.html">首页</a>
              <div
                onClick={() => this.handleClickLink('/layout/home')}
                style={pathname === '/layout/home' ? {color: '#023fd6'} : null}
              >GITC北京站</div>
              
              <div
                onClick={() => this.handleClickLink('/awards')}
                style={pathname === '/awards' ? {color: '#023fd6'} : null}
              >奖项评选报名</div>
              
              <div
                    onClick={() => this.handleClickLink('/layout/issue')}
                    style={pathname === '/layout/issue' ? {color: '#023fd6'} : null}
              >议题提交</div>
              
              <a href="http://www.kylinclub.org/">关于主办方</a>
              <a href="http://www.thegitc.com/contact.html">加入我们</a>
            </div>
          </div>
          <div className="NavButton">
            <div className="NavBtn"><a href="https://www.bagevent.com/event/768490">立即购买</a></div>
            
            {/* <div className="NavBtn"
               onClick={this.handeClick.bind(this)}
               style={this.state.whichPath === '/layout/ticket' ? {color: '#023fd6'} : null}
          >我的门票
          </div>*/}
          </div>
        </div>
      </div>
    </div>
    )
  }
}
