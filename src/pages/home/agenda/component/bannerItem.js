import React, {Component} from 'react'
import './index.scss'
import defaultAvatar from '../../../../images/default-avatar.jpg'
import qrImg from '../image/down-qr-code.png'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      qrPop: false
    }
  }
  qrPopChange = () => {
    if(!this.state.qrPopChange){
      window.setTimeout(() => this.setState({qrPop: false}), 5000)
    }
    this.setState({qrPop: !this.state.qrPop})
  }
  render () {
    let {data} = this.props
    // console.log(data, 'bannerItem');
    return (
      <div
        // className='banner--item'
      >
        <div className="fixed--info">
          <div className='meeting--name'>{data.name}</div>
          <div className='meeting--addr'>
            <i className="iconfont icon-positioning"/>
            <span>{data.other}</span>
          </div>
            {
                this.props.whichDay ==0 && data.name != '全球化专场'?
              <div className={data.name =="基础架构专场" ? 'open--ceremonyA':'open--ceremony'}>
                <span style={{marginRight: '10px'}}>09:00-10:00</span>
                <span>开幕式直播</span>
                {
                    data.name =="基础架构专场" ? <div>10:00-10:10 &nbsp;&nbsp;开场致辞--思科</div> : ''
                }

              </div> : ""
            }
        </div>
        <div className='guest--list'>
          {
            data.data && data.data.map((item, index) => (
              <div className='guest--item' key={index}>
              <div className="item--left">
                <img src={item.pic || defaultAvatar} alt=""/>
                {
                  item.file
                    ? <a className='item--document' href={item.file}>
                      PPT&nbsp;
                      <i className="iconfont icon-down"/>
                    </a>
                  : null
                }
              </div>
              <div className="item--right">
                <div className='meeting--time'>{item.stime}</div>
                <div className="meeting--theme">{item.stheme}</div>
                <div className="guest--name">{item.name}</div>
                <div className='guest--info'>{item.company} | {item.position}</div>
              </div>
            </div>
            ))
          }
        </div>
        <div className="banner-bottom">
          <a className="header-down-btn" onClick={this.props.openQrPop}>
            <i className="iconfont icon-down"/>
            &nbsp;批量下载分会场PPT
          </a>
  
          {/*{
            this.state.qrPop
            ? <div className="pop-qr-code">
              <img src={qrImg} alt=""/>
            </div>
            : null
          }*/}
        </div>
      </div>
    )
  }
}