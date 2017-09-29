import React, { Component } from 'react'
import './index.scss'
import { sign } from "../layout/../../services/user"
import { sendCode } from "../layout/../../services/code"
import { message } from 'antd'
// import storage from '../../helper/storage'
// import {TOKEN} from "../../helper/login";
export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      mobileRight: true,
      mobile: '',
      coding: false,
      popshow: false
    }
  }
  // componentDidMount() {
  //   this.setState({
  //     popshow: this.props.toggleshow
  //   })
  // }
  validateMobile() {
    this.setState({
      mobile: this.mobile.value
    })
    let reg = /^1[3|4|5|7|8][0-9]{9}$/;
    let mobile = this.mobile.value;
    let coding = reg.test(mobile)
    // this.setState({
    //   mobileRight
    // });

    // console.log(mobileRight,'xxxxxxxxxxxxx')
    this.setState({
      coding
    })
  }
  checkCode() {
    sendCode(this.mobile.value, { phone: this.mobile.value })
      .then(res => res.json())
      .then(data => {
        message.info(data.msg)
        this.setState({
          mobile: data.mobile
        })
      })
  }
  checkSign() {
    sign(this.mobile.value, { phone: this.mobile.value, code: this.code.value })
      .then(res => res.json())
      .then(data => {
        message.info(data.msg)
        if (data.status) {
          this.props.closeLoginBox()
          this.props.cb && this.props.cb()
          localStorage.setItem('phone', this.state.mobile)
        }
      })
  }
  
  render() {
    return (
      <div className="login-pop" style={{ display: this.props.toggleshow ? "block" : 'none' }}>
        <div className="login-box">
          <span className="close-pop-btn" onClick={this.props.closeClick}></span>
          <p>手机</p>
          <div className="phone-box">
            <input type="number" ref={mobile => this.mobile = mobile}
              onChange={(e) => this.validateMobile(e)}
            />
          </div>
          <div >
            <p>验证码</p>
            <div className="code-box">
              <input type="password" ref={code => this.code = code} />
              <a className="add-code pa" onClick={this.checkCode.bind(this)}
                style={{ background: this.state.coding ? '#2b67ff' : '#959595' }}
              >{this.state.coding ? '输入验证码' : '获取验证码'}</a>
            </div>
            <div className="login-btn" onClick={this.checkSign.bind(this)}>登陆</div>
          </div>
        </div>
      </div>
    )
  }
}

