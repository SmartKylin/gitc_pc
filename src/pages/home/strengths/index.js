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
              <div className='item--img--wrap'>
                <div className='item--img'>
                  <i className="iconfont icon-pinpai"/>
                </div>
              </div>
              <div className='english--title'>BRANDING TRACk</div>
              <div style={{marginTop: '8px', fontSize: '16px'}}>品牌专场</div>
              <div style={{fontSize: '12px', marginTop: '14px'}}>
                重新定义品牌价值
              </div>
              <div style={{fontSize: '12px'}}>
                超一流的分享盛会
              </div>
            </div>
  
   {/*         <div className='strength--item'>
              <div className='item--img--wrap'>
                <div className='item--img'>
                  <i className="iconfont icon-techtutor"/>
                </div>
              </div>
              <div className='english--title'>TECH TUTOR</div>
              <div style={{marginTop: '8px', fontSize: '16px'}}>Tech Tutor</div>
              <div style={{fontSize: '12px', marginTop: '14px'}}>
                掌握最强最先进技术的
              </div>
              <div style={{fontSize: '12px'}}>
                神秘大触
              </div>
            </div>*/}
  
 {/*           <div className='strength--item'>
              <div className='item--img--wrap'>
                <div className='item--img'>
                  <i className="iconfont icon-teach"/>
                </div>
              </div>
              <div className='english--title'>TECH+</div>
              <div style={{marginTop: '8px', fontSize: '16px'}}>Tech+</div>
              <div style={{fontSize: '12px', marginTop: '14px'}}>
                让技术带你感受游戏的魅力
              </div>
              <div style={{fontSize: '12px'}}>
                遨游最真实的技术梦境
              </div>
            </div>*/}
  
            <div className='strength--item'>
              <div className='item--img--wrap'>
                <div className='item--img'>
                  <i className="iconfont icon-banjiangdianli"/>
                </div>
              </div>
              <div className='english--title'>AWARDING CEREMONY</div>
              <div style={{marginTop: '8px', fontSize: '16px'}}>颁奖典礼</div>
              <div style={{fontSize: '12px', marginTop: '14px'}}>
                揭晓新一代的技术扛旗者
              </div>
              <div style={{fontSize: '12px'}}>
                见证行业中榜样的力量
              </div>
            </div>

            <div className='strength--item'>
              <div className='item--img--wrap'>
                <div className='item--img'>
                  <i className="iconfont icon-heikejiyouleyuan"/>
                </div>
              </div>
              <div className='english--title'>BLACK TECH AMUSEMENT</div>
              <div style={{marginTop: '8px', fontSize: '16px'}}>黑科技游乐园</div>
              <div style={{fontSize: '12px', marginTop: '14px'}}>
                未来世界跨维度体验
              </div>
                {/*<div style={{fontSize: '12px'}}>
                 超一流的分享盛会
                 </div>*/}
            </div>

            <div className='strength--item'>
              <div className='item--img--wrap'>
                <div className='item--img'>
                  <i className="iconfont icon-wanyan"/>
                </div>
              </div>
              <div className='english--title'>INVITATION DINNER</div>
              <div style={{marginTop: '8px', fontSize: '16px'}}>邀请晚宴</div>
              <div style={{fontSize: '12px', marginTop: '14px'}}>
                数百名业内大咖汇聚一堂，领悟社交
              </div>
              <div style={{fontSize: '12px'}}>
                魅力，推动互联网技术领域分享与合作。
              </div>
            </div>
          </div>
        {/*  <div className='body--row'>

          </div>*/}
        </div>
      </div>
    )
  }
}