import React, {Component} from 'react'
import './index.scss'
// import defaultAvatar from '../../../images/default-avatar.png'
import defaultAvatar from '../../../images/yueguangjifeng.jpg'

export default class extends Component {
  constructor (props) {
    super(props);
    this.state = {
      guestBoxVisible: false
    }
  }
  componentDidMount () {
    this.body.onmouseenter = () => {
      this.setState({
        guestBoxVisible: true
      })
    }
    this.body.onmounseleave = () => {
      this.setState({
        guestBoxVisible: false
      })
    }
  }
  render () {
    return (
     <div className={'guest--item'}>
       <div className={'guest--avatar--area'} >
         <img src={this.props.avatarUrl || defaultAvatar} className={'guest--avatar'} ref={body => this.body = body}/>
         <div className="guest--detail--box"
              style={{visibility: this.state.guestBoxVisible ? 'visible' : 'hidden'}}
              onMouseLeave={() => this.setState({ guestBoxVisible: false})}>
           <img className="small--avatar" src={defaultAvatar}/>
           <div style={{marginTop: '44px', fontSize: '16px'}}>月光疾风</div>
           <div style={{fontSize: '12px', marginTop: '8px'}}>BBT 研发总监</div>
           {
             this.props.speech ?
             <div className={'speech--box'}>
               <div className={'addr--time'}>
                 <div>
                   <i className="iconfont icon-positioning"/>
                   <span style={{marginRight: '18px'}}>技术发展&产品</span>
                   <span style={{marginRight: '40px'}}>1F大宴会厅</span></div>
                 <div>
                   <i className="iconfont icon-shijian"/>
                   <span style={{marginRight: '18px'}}>11月23日</span>
                   <span>9:00-10:00</span>
                 </div>
               </div>
               <div className="speech--topic"
                    style={{marginTop: '40px', width: '100%'}}>
                 <span style={{fontWeight: 'bold'}}>演讲主题：</span>
                 大数据时代下AI能走多远
               </div>
               <div className="topic--intro">
                 <span>主题介绍：</span>
                 清华大学软件学院硕士，曾就职于新浪微博、奇虎360、搜狐畅游多家互联网公司，专注于数据挖掘、机器学习、数据平台构建等大数据领域工作，在精准营销、个性化推荐引擎、数字化运营以及商务智能等领域有丰富的经验。目前就职于国美金融任大数据中心总监，负责构建基于用户画像精准营销系统、基于知识图谱的反欺诈系统、基于大数据实时计算引擎的大数据风控系统，构建整个公司的数据价值体系，包括BI系统和数据分析体系等一套完整的从数据收集、整理、报告到转化成行业洞见和决策建议的流程。
               </div>
             </div> : null
           }
           <div className='guest--intro'>
             <span>个人简介：</span>
             主要解决一下问题1.自动化部署代码覆盖率的工具，将代码覆盖率的部署，获取，重置自动化，通过调用封装的Restful API就可以获取2.单元测试代码覆盖率和集成测试代码覆盖率及UI和自动化测试覆盖率整合，有效的反映出整体的测试覆盖情况，为自动化发布提供参考指标，同时还可以提供单个执行方法的覆盖率，让测试和开发各自补充和完善测试用例3.提供了多种的覆盖率报告，有全量的代码的覆盖率.变更代码的覆盖率及基于方法变更的覆盖率，能够从多种维度提供指标，让开发和测试了解到那些变更的代码未被测试到，特别适用于重构的场景，基于方法变更的覆盖率适用于精准测试，能够有效的提升测试人员的覆盖率节省测试时间且保证质量4.如何使用代码覆盖率筛除无用的测试用例，适用于自动化生成的测试用例，比如通过日志者其它自动生成测试用例或者测试数据的工具生成的Case，过滤出有效的测试用例和测试数据，缩短回归时间5.通过分析代码覆盖率，发现常见的未被测试场景，优化测试方法
           </div>
         </div>
       </div>
       <div style={{marginBottom: '10px', fontSize: '16px'}}>月光疾风</div>
       <div>BBT 研发总监</div>
     </div>
    )
  }
}