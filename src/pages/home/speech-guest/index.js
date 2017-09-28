import React, {Component} from 'react'
import GuestItem from '../components/GuestItem'
import './index.scss'
import $ from 'jquery'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hasMore: false
    }
  }
  // 产看更多
  catMore = () => {
    this.top = $(document).scrollTop();
    this.setState({
      hasMore: true
    })
  }
  // 收起
  collapse = () => {
    this.setState({
      hasMore: false
    })
    $(document).scrollTop(this.top)
  }
  render () {
    return (
      <div className={'speech--guest'}>
        <div className='speech--title'>演讲嘉宾</div>
        <div className='speech--body'>
          <GuestItem speech={true}/>
          <GuestItem speech={true}/>
          <GuestItem speech={true}/>
          <GuestItem speech={true}/>
          <GuestItem speech={true}/>
  
          <GuestItem speech={true}/>
          <GuestItem speech={true}/>
          <GuestItem speech={true}/>
          <GuestItem speech={true}/>
          <GuestItem speech={true}/>
  
          <GuestItem speech={true}/>
          <GuestItem speech={true}/>
          <GuestItem speech={true}/>
          <GuestItem speech={true}/>
          <GuestItem speech={true}/>
        </div>
       
        {
          this.state.hasMore ?
          <div className='speech--more'>
            <GuestItem speech={true}/>
            <GuestItem speech={true}/>
            <GuestItem speech={true}/>
            <GuestItem speech={true}/>
            <GuestItem speech={true}/>
  
            <GuestItem speech={true}/>
            <GuestItem speech={true}/>
            <GuestItem speech={true}/>
            <GuestItem speech={true}/>
            <GuestItem speech={true}/>
  
            <GuestItem speech={true}/>
            <GuestItem speech={true}/>
            <GuestItem speech={true}/>
            <GuestItem speech={true}/>
            <GuestItem speech={true}/>
            <div className="btn--more" onClick={this.collapse}>
              <span>收起</span>
              <i className="iconfont icon-arow_up"/>
            </div>
          </div>
          :
          <div className="btn--more"
            onClick={this.catMore}>
            <span>查看更多</span>
            <i className="iconfont icon-arow_down-copy"/>
          </div>
        }
      </div>
    )
  }
}