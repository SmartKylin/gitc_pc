import React, { Component } from 'react'
import './index.scss'
export default class Login extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  checkMobile(str) {
    if(str==""){
        alert("手机号不能为空！");
    }
    else{
        var re = /^1\d{10}$/                                
        if (re.test(str)) {
            alert("正确");
        } else {
            alert("手机号格式错误！");
        }
    }
}
  render() {
    return (
      <div></div>
      // <div className="login-pop">
      //   <div className="login-box">
      //     <p>手机</p>
      //     <div className="phone-box">
      //       <input type="text" />
      //     </div>
      //     <div>
      //       <p>验证码</p>
      //       <div className="code-box">
      //         <input type="text" />
      //         <div className="add-code pa" onClick={this.checkMobile.bind(this)}>获取验证码</div>
      //       </div>
      //       <div className="login-btn">登陆</div>
      //     </div>
      //   </div>
        
      // </div>


    )
  }
} 