import React, {Component} from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return (
      <div className='conference--strengths'>
        <div className='strengths--title'>大会亮点</div>
        <div className='strengths--body'>
          <div className='body--row'>
            <div className='strength--item'>
              <div className='item--img--wrap'><div className='item--img'/></div>
              <div className='english--title'>RESTAURANT EVOLUTI</div>
              <div style={{marginTop: '8px', fontSize: '16px'}}>品牌专场</div>
              <div style={{fontSize: '12px', marginTop: '14px'}}>
                重新定义品牌价值
              </div>
              <div style={{fontSize: '12px'}}>
                超一流的分享盛会
              </div>
            </div>
  
            <div className='strength--item'>
              <div className='item--img--wrap'><div className='item--img'/></div>
              <div className='english--title'>TECH TUTORRE</div>
              <div style={{marginTop: '8px', fontSize: '16px'}}>Tech Tutorre</div>
              <div style={{fontSize: '12px', marginTop: '14px'}}>
                掌握最强最先进的技术的
              </div>
              <div style={{fontSize: '12px'}}>
                神秘大触
              </div>
            </div>
  
            <div className='strength--item'>
              <div className='item--img--wrap'><div className='item--img'/></div>
              <div className='english--title'>TECH+</div>
              <div style={{marginTop: '8px', fontSize: '16px'}}>Tech+</div>
              <div style={{fontSize: '12px', marginTop: '14px'}}>
                让技术带你感受游戏的魅力
              </div>
              <div style={{fontSize: '12px'}}>
                遨游最真实的表演
              </div>
            </div>
  
            <div className='strength--item'>
              <div className='item--img--wrap'><div className='item--img'/></div>
              <div className='english--title'>AWARDING CEREMONY</div>
              <div style={{marginTop: '8px', fontSize: '16px'}}>颁奖典礼</div>
              <div style={{fontSize: '12px', marginTop: '14px'}}>
                揭示新一代的 技术扛旗者
              </div>
              <div style={{fontSize: '12px'}}>
                行业中榜样的力量
              </div>
            </div>
           
          </div>
          <div className='body--row'>
            <div className='strength--item'>
              <div className='item--img--wrap'><div className='item--img'/></div>
              <div className='english--title'>BLACK TECH AMUSEMENT  </div>
              <div style={{marginTop: '8px', fontSize: '16px'}}>黑科技游乐园</div>
              <div style={{fontSize: '12px', marginTop: '14px'}}>
                未来世界跨维度体验
              </div>
              {/*<div style={{fontSize: '12px'}}>
                超一流的分享盛会
              </div>*/}
            </div>
    
            <div className='strength--item'>
              <div className='item--img--wrap'><div className='item--img'/></div>
              <div className='english--title'>INVITATION DINNER</div>
              <div style={{marginTop: '8px', fontSize: '16px'}}>邀请晚宴</div>
              <div style={{fontSize: '12px', marginTop: '14px'}}>
                塑造互联网社交重头戏，真人王者荣耀
              </div>
              <div style={{fontSize: '12px'}}>
                你最想认识的人他在游戏里
              </div>
            </div>
  
          </div>
        </div>
      </div>
    )
  }
}