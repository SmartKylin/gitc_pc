import React, {Component} from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return (
      <div className='home--footer'>
        <div className='footer--main'>
         <div className='main--left'>
           <div className="link--area">
             <div>
               赞助大会展览展示咨询
               <br/>
               <span className='english--font'>business@kylinclub.org</span>
             </div>
             <div>合作单位&合作媒体查询
               <br/>
               <span className='english--font'>gitc@kylinclub.org</span>
             </div>
             <div>
               麒麟会会员申请咨询
               <br/>
               <span className='english--font'>member@kylinclub.org</span>
             </div>
             <div>
               志愿者招募
               <br/>
               <span className='english--font'>staff@kylinclub.org</span>
             </div>
             <div>
               致电我们
               <br/>
               <span>010-88323888</span>
             </div>
           </div>
           <div className="blog--account">
             <div>
               <i className="iconfont icon-facebookicon"/>
               Facebook
             </div>
             <div>
               <i className="iconfont icon-twitter"/>
               Twitter
             </div>
             <div>
               <i className="iconfont icon-google26"/>
               Google+
             </div>
             <div>
               <i className="iconfont icon-youtube"/>
               Youtube
             </div>
             <div>
               <i className="iconfont icon-wechat"/>
               Wechat
             </div>
             <div>
               <i className="iconfont icon-weibo"/>
               Weibo
             </div>
           </div>
           <div className="external--link">
             <div>首页</div>
             <div>上海站</div>
             <div>深圳站</div>
             <div>成都站</div>
             <div>北京站</div>
             <div>加入麒麟会</div>
             <div>赞助合作</div>
           </div>
         </div>
         <div className="main--right">
           <div className="intro--area">
             <div style={{marginBottom: '50px'}}>GITC</div>
             <div className='litter--dividing'/>
             <div className='intro--txt' style={{width: '240px'}}>
               GITC全球互联网技术大会始终走在互联网
               技术交流分享的最前端，是目前国内规模最
               大、资源最成熟的技术峰会，同时也是中国
               互联网一年一度的行业盛事。
             </div>
           </div>
         </div>
        </div>
        <div className='dividing--line'>
          <img src="" alt="" style={{flex: 1.55}}/>
          <div style={{flex: 1}}>京CP备14035833号-1 &nbsp; 京公网安备11010200322</div>
        </div>
      </div>
    )
  }
}