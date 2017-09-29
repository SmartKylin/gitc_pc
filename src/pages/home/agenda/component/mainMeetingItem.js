import React, {Component} from 'react'
import defaultAvatar from '../../../../images/default-avatar.png'
import './index.scss'

export default class extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    let {data} = this.props
    return (
    <div className='banner--item'>
      <div className="fixed--info">
        <div className='meeting--name'>{data.name}</div>
        <div className='meeting--addr'>
          <i className="iconfont icon-positioning"/>
          <span>{data.other}</span>
        </div>
        <div className='open--ceremony'>
          <span style={{marginRight: '10px'}}>9:30-10:00</span>
          <span>开幕式致辞直播</span>
        </div>
      </div>
      <div className='guest--list'>
        {
          [0, 1, 2, 3, 4, 5].map((item, index) => (
          <div className='guest--item' key={index}>
            <div className="item--left">
              <img src={defaultAvatar} alt=""/>
              <div className='item--document'>
                <i className="iconfont icon-chakanwendangjilu"/>
                文档
              </div>
            </div>
            <div className="item--right">
              <div className='meeting--time'>9:00-9:45</div>
              <div className="meeting--theme">如何打造一个高效智能</div>
              <div className="guest--name">崔保秋</div>
              <div className='guest--info'>小米| 首席架构师 & 天使投资人</div>
            </div>
          </div>
          ))
        }
        <div className='guest--item'>
          <div className="item--left">
            <i className="iconfont icon-jiangbei1"/>
          </div>
          <div className="item--right">
            <div className='meeting--time'>18:00-19:00</div>
            <div className="meeting--theme">颁奖典礼</div>
            <div className="guest--name">揭示新一代的 技术扛旗者</div>
            <div className='guest--info'>行业中的榜样的力量</div>
          </div>
        </div>
  
        <div className='guest--item'>
          <div className="item--left">
            <i className="iconfont icon-huangguan" style={{fontSize: '40px'}}/>
          </div>
          
          <div className="item--right">
            <div className='meeting--time'>19:00-20:00</div>
            <div className="meeting--theme">特邀晚宴</div>
            <div className="guest--name">塑造互联网社交重头戏，真人王者荣耀</div>
            <div className='guest--info'>你最想认识的人他在游戏里</div>
          </div>
        </div>
        
      </div>
    </div>
    )
  }
}