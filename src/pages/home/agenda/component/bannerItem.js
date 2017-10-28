import React, {Component} from 'react'
import './index.scss'
import defaultAvatar from '../../../../images/default-avatar.png'

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
            [0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <div className='guest--item' key={index}>
              <div className="item--left">
                <img src={defaultAvatar} alt=""/>
               {/*  <div className='item--document'>
                  <i className="iconfont icon-chakanwendangjilu"/>
                  文档
                </div> */}
              </div>
              <div className="item--right">
                {/* <div className='meeting--time'>9:00-9:45</div> */}
                <div className="meeting--theme">如何打造一个高效智能</div>
                <div className="guest--name">崔保秋</div>
                <div className='guest--info'>小米| 首席架构师 & 天使投资人</div>
              </div>
            </div>
            ))
          }
        </div>
      </div>
    )
  }
}