import React, {Component} from 'react'
import defaultAvatar from '../../../../images/default-avatar.jpg'
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
      {/*   <div className='open--ceremony'>
          <span style={{marginRight: '10px'}}>9:30-10:00</span>
          <span>开幕式致辞直播</span>
        </div>*/}
      </div>
      <div className='guest--list'>
        {
          data.data && data.data.map((item, index) => (
          <div className='guest--item' key={index}>
            <div className="item--left">
              <img src={item.pic || defaultAvatar} alt=""/>
              {
                item.files__url
                ? <a className='item--document' href={item.files__url}>
                  PPT&nbsp;
                  <i className="iconfont icon-xiazai"/>
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
            <div className="guest--name">打造顶级商务社交平台</div>
            <div className='guest--info'>塑造互联网社交重头戏</div>
          </div>
        </div>
        
      </div>
    </div>
    )
  }
}