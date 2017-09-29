import React, {Component} from 'react'
import logoIcon from '../../../images/logo/logo.png'
import './index.scss'


export default class extends Component {
  render () {
    return (
      <div className='home--footer'>
        <footer className="g-bg-color--dark">
          <div className="g-hor-divider__dashed--white-opacity-lightest">
            <div className="container g-padding-y-30--xs g-padding-y-50--md">
              <div className="row">
                <div className="col-sm-3 g-margin-b-20--xs g-margin-b-0--md">
                  <ul className="list-unstyled g-ul-li-tb-5--xs g-margin-b-0--xs">
                    <li className="g-font-size-12--xs">
                      赞助大会&展览展示咨询
                      <br/>
                      business@kylinclub.org</li>
                    <li className="g-font-size-12--xs">合作单位&合作媒体咨询<br/>gitc@kylinclub.org</li>
                    <li className="g-font-size-12--xs">麒麟会会员申请咨询<br/>member@kylinclub.org</li>
                    <li className="g-font-size-12--xs">志愿者招募<br/>staff@kylincub.org</li>
                    <li className="g-font-size-12--xs">致电我们<br/>010-88323888</li>
                  </ul>
                </div>
                <div className="col-sm-2 col-xs-6 g-margin-b-20--xs g-margin-b-0--md hidden-xs">
                  <ul className="list-unstyled g-ul-li-tb-5--xs g-margin-b-0--xs">
                    <li>
                      <a className="g-font-size-12--xs g-color--white-opacity" href="javascript:;" rel="nofollow"><i className="g-padding-r-5--xs ti-facebook"/> Facebook</a>
                    </li>
                    <li>
                      <a className="g-font-size-12--xs g-color--white-opacity" href="javascript:;" rel="nofollow"><i className="g-padding-r-5--xs ti-twitter"/> Twitter</a>
                    </li>
                    <li>
                      <a className="g-font-size-12--xs g-color--white-opacity" href="javascript:;" rel="nofollow"><i className="g-padding-r-5--xs ti-google"/> Google+</a>
                    </li>
                    <li>
                      <a className="g-font-size-12--xs g-color--white-opacity" href="javascript:;" rel="nofollow"><i className="g-padding-r-5--xs ti-youtube"/> Youtube</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-2 col-xs-6 g-margin-b-20--xs g-margin-b-0--md hidden-xs">
                  <ul className="list-unstyled g-ul-li-tb-5--xs g-margin-b-0--xs">
                    <li><a className="g-font-size-12--xs g-color--white-opacity" href="#">首页</a></li>
                    <li><a className="g-font-size-12--xs g-color--white-opacity" href="javascript:;">上海站</a></li>
                    <li><a className="g-font-size-12--xs g-color--white-opacity" href="javascript:;">深圳站</a></li>
                    <li><a className="g-font-size-12--xs g-color--white-opacity" href="javascript:;">成都站</a></li>
                    <li><a className="g-font-size-12--xs g-color--white-opacity" href="javascript:;">北京站</a></li>
                    <li><a className="g-font-size-12--xs g-color--white-opacity" href="http://www.kylinclub.org/" target="_blank">关于主办方</a></li>
                    <li><a className="g-font-size-12--xs g-color--white-opacity" href="javascript:;">联系我们</a></li>
                  </ul>
                </div>
                <div className="col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-1 s-footer__logo g-padding-y-20--xs g-padding-y-0--md">
                  <a href="/">
                    <h3 className="g-font-size-14--xs g-color--white-opacity text-normal">GITC</h3>
                  </a>
                  <div className="line hidden-xs"/>
                  <p className="g-color--white-opacity g-font-size-12--xs">GITC全球互联网技术大会始终走在互联网技术交流分享的最前端，是目前国内规模最大、资源最成熟的技术峰会，同时也是中国互联网一年一度的行业盛事。</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container g-padding-y-20--xs">
            <div className="row">
              <div className="col-xs-2 hidden-xs">
                <a href="/">
                <img className="g-width-100--xs g-height-auto--xs" src={logoIcon} alt=""/>
                </a>
              </div>
              <div className="col-xs-10 g-text-right--xs">
                <p className="g-font-size-12--xs g-margin-b-0--xs g-color--white-opacity-light">京CP备14035833号-1 &nbsp; 京公网安备11010200322</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}