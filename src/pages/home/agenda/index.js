import React, {Component} from 'react'
import './index.scss'
import $ from 'jquery'

const dateAry = ['11月23日', '11月24日']

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      whichDay: 0,
      topicIndex: 1,
      topicGroup: {
        0: ['企业专场', '主会场', '运维专场', '大数据专场', '基础架构专场', '前端技术专场', '移动互联网专场', 'IOT峰会', '技术管理&产品', '领袖峰会', '企业专场', '主会场'],
        1: ['企业专场', '主会场', '运维专场', '大数据专场', '基础架构专场', '质量和测试专场', '网络安全专场', '互联网金融峰会', '智慧物流论坛', '企业专场', '主会场']
      },
      bannerAry: ['企业专场', '主会场', '运维专场', '大数据专场', '基础架构专场', '前端技术专场', '移动互联网专场', 'IOT峰会', '技术管理&产品', '领袖峰会', '企业专场', '主会场'],
    }
  }
  // 改变日期
  switchDay = async (index) => {
    await this.setState({
      whichDay: index,
    })
    await this.setState({
      bannerAry: this.state.topicGroup[this.state.whichDay]
    })
  }
  // 改变焦点
  changeFocus = async (index) => {
    console.log(index);
    await this.setState({
      topicIndex: index,
    })
    $('.banner--body').css({
      left: -((this.state.topicIndex-1) * 403) + 'px'
    })
    /*if (index === 0) {
      let bannerAry = this.state.bannerAry
      let last = bannerAry.pop()
      bannerAry.unshift(last)
      this.setState({
        bannerAry
      })
      console.log(bannerAry);
    }*/
  }
  // 切换下一个会场
  next = async () => {
    let length = this.state.bannerAry.length
    await this.setState({
      topicIndex: this.state.topicIndex-1
    })
    if (this.state.topicIndex === 0) {
      await this.setState({
        topicIndex: length - 2
      })
      $('.banner--body')
      .css({
        left: -((this.state.topicIndex) * 403) + 'px'
      })
    }
    
    $('.banner--body')
    .stop()
    .animate({
      left: -((this.state.topicIndex - 1) * 403) + 'px'
    })
  }
  
  // 切换上一个会场
  last = async () => {
    let length = this.state.bannerAry.length
    await this.setState({
      topicIndex: this.state.topicIndex + 1
    })
    if (this.state.topicIndex === length - 1) {
      await this.setState({
        topicIndex: 1
      })
      $('.banner--body')
      .css({
        left: -((this.state.topicIndex - 2) * 403) + 'px'
      })
    }
    $('.banner--body')
    .stop()
    .animate({
      left: -((this.state.topicIndex - 1) * 403) + 'px'
    })
  }
  componentDidMount () {
  
  }
  render () {
    return (
      <div className={'conference--agenda'}>
        <div className={'agenda--title'}>大会议程</div>
        <div className={'date--control'}>
          {
            dateAry.map((date, index) => (
              <div
              key={index}
              className={'agenda--date ' + (this.state.whichDay === index ? 'active' : '')}
              onClick={() => this.switchDay(index)}
              >{date}</div>
            ))
          }
        </div>
        <div className={'topic--group'}>
          {
            this.state.topicGroup[this.state.whichDay].map((item, index) => (
              (index > 0 && index < (this.state.topicGroup[this.state.whichDay].length - 1)) ? <div key={index}
                   className={'topic--box ' + (this.state.topicIndex === index ? 'active' : '')}
                   onClick={() => this.changeFocus(index)}>{item}</div> : null
            ))
          }
        </div>
        {/*会场轮播图*/}
        <div className={'topic--banner'}>
          <div className='banner--window'>
            {/*<ul className={'banner--body'} style={{left: -((this.state.topicIndex-1) * 403) + 'px'}}>*/}
            <ul className={'banner--body'}>
              {
                this.state.bannerAry.map((item, index) => (
                <li key={index}
                    className={'banner--item ' + (this.state.topicIndex === index ? 'active' : '')}
                    style={{backgroundColor: 'red'}}>{item}</li>
                ))
              }
            </ul>
          </div>
          <ul className='focus--list'>
            {
              this.state.topicGroup[this.state.whichDay].map((item, index) => (
                (index > 0 && index < (this.state.topicGroup[this.state.whichDay].length - 1)) ?
                  <div key={index}
                       className={'topic--box ' + (this.state.topicIndex === index ? 'active' : '')}
                       onClick={() => this.changeFocus(index)}>{item}</div> : null
                )
              )
            }
          </ul>
          <div className="arrow arrow--left" onClick={this.next}>&lt;</div>
          <div className='arrow arrow--right' onClick={this.last}>&gt;</div>
        </div>
      </div>
    )
  }
}