import React from 'react';
import "./index.scss"
import logo from "../../images/logo/logo.png"
import {getLiveUrl} from "../../services/home";


export default class Nav extends React.Component {
  
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
                style={(pathname === '/layout/home' || pathname === '/' )? {color: '#04bddc'} : null}
              >GITC北京站</div>
  
              <a
              href={'http://www.thegitc.com/static/pdf/bj2017.pdf'}
              style={pathname === '/layout/issue' ? {color: '#04bddc'} : null}
              >大会会刊</a>
              
              <a
                href={"#meeting-agenda"}
                // style={pathname === '/awards' ? {color: '#fadb93'} : null}
              >资料下载</a>
              

              <div
                  onClick={() => this.handleClickLink('/hotel')}
                  style={pathname === '/hotel' ? {color: '#04bddc'} : null}
              >酒店信息</div>

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
