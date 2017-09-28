import React, {Component} from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return (
      <div className='home--footer'>
       <div className='footer--main'>
         <div className='main--left'>
           <div className="link--area">
             <div>赞助大会展览展示咨询</div>
             <div>合作单位&合作媒体查询</div>
             <div>麒麟会会员申请咨询</div>
             <div>志愿者招募</div>
             <div>致电我们</div>
           </div>
           <div className="blog--account">
             <div>Facebook</div>
             <div>Twitter</div>
             <div>Google+</div>
             <div>Youtube</div>
             <div>Wechat</div>
             <div>Weibo</div>
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
             <div>GITC</div>
             <div className='intro--txt' style={{width: '240px'}}>
               GITC全球互联网技术大会始终走在互联网
               技术交流分享的最前端，是目前国内规模最
               大、资源最成熟的技术峰会，同时也是中国
               互联网一年一度的行业盛事。
             </div>
           </div>
         </div>
       </div>
        <div className='dividing--line'/>
      </div>
    )
  }
}