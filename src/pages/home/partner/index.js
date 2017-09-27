import React, {Component} from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return (
      <div className='cooperation--partner'>
        <div className="partner--title">合作伙伴</div>
        <div className="super--sponsor--area">
          <div>顶级赞助</div>
        </div>
        <div className="area diamon--area">
          <div>钻石赞助</div>
        </div>
        <div className="area platinum--area">
          <div>铂金赞助</div>
        </div>
        <div className="area gold--area">
          <div>金牌赞助</div>
        </div>
        <div className="area exhibitor--area">
          <div>参展商</div>
        </div>
        <div className="area special--area">
          <div>专项赞助</div>
        </div>
        <div className='area ticket--official--area'>
          <div>票务官网合作平台</div>
        </div>
        <div className='area ticket--area'>
          <div>票务官网合作平台</div>
        </div>
        <div className="area live--official--area">
          <div>视频官方直播平台</div>
        </div>
        <div className="area live--area">
          <div>视频直播平台</div>
        </div>
      </div>
    )
  }
}