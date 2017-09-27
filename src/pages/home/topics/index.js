import React, {Component} from 'react'
import './index.scss'
import TopicItem from './components/TopicItem'

export default class extends Component {
  render () {
    return (
      <div className='conference--topic'>
        <div className='topic--title'>大会专题</div>
        <div className='topic--body'>
          <div className='topic--row'>
            <TopicItem iconClass={'icon-zhuhuichang'} title={'主会场'} content={'Gartner发布的2017年十项重大科技发展趋势，人工智能、物联网、区块链名列其中；三大科技与大数据技术结合，降低了大数据应用门槛，让大数据成为开启智能化生活的有效工具；人工智能驱动下的智能驾驶使驾车出行更安全，各大互联网巨头纷纷加大筹码，将其确定为重要战略方向；互联网教育作为新兴教育模式，广受教育机构及学员追捧,主会场将聚焦IT行业最热门技术，力邀优秀技术领袖，把脉最新发展趋势，深度分享经典应用案例。'}/>
            <TopicItem iconClass={'icon-zhuhuichang'} title={'运维专场'} content={'运维是IT服务安全运行的重要保障。伴随企业业务规模扩大，业务场景日益复杂化，传统运维管理方式已无法适应甚至阻碍企业发展。寻求更高效、更敏捷、更易管理、更精益智能化运维体系成为很多技术型企业努力探索方向。本专题将揭晓行业领先运维创新经典案例，核心技术人员现身揭秘，利用大数据、云计算、人工智能等新兴技术打造智能化运维的实战经验。'}/>
            <TopicItem iconClass={'icon-zhuhuichang'} title={'大数据专场'} content={'随着生态系统的日趋完善，大数据产业已正式进入行业应用时代。利用行业知识，将大数据技术与具体业务相结合，打造出用户真实需要的产品功能，才能称得上大数据应用的真正落地。本专题将邀请多位领域专家分享大数据在各行各业应用中遇到的问题，以及如何应用人工智能深度挖掘大数据价值，开创创新应用场景，同时还将展示行业成功案例及背后的技术实践过程。'}/>
          </div>
          
          <div className='topic--row'>
            <TopicItem iconClass={'icon-zhuhuichang'} title={'基础架构专场'} content={'IT基础架构直接影响上层应用及工作负载能力。网络、软件、数据库、服务器、存储网络等每一个组件都影响着基础架构的整体响应能力与突发情况的应变能力。而在云计算、大数、人工智能等新技术热潮的推动下，基础架构又该如何搭建，其难点在哪里，有哪些值得参考的技术实践，本专题携手多位资深架构师，结合他们的实践经验，带你一揭晓这些问题的答案。'}/>
            <TopicItem iconClass={'icon-zhuhuichang'} title={'前端技术专场'} content={'近几年来，前端技术迅猛发展，给前端开发者带来了广阔的发展空间，而技术的快速更新迭代，又给他们带来了前所未有的挑战。如何应对这些挑战，多位知名前端技术专家将在本专题面对面给你支招，并紧扣前端开发当前的热点和难点，展来深入剖析与实战分享。'}/>
            <TopicItem iconClass={'icon-zhuhuichang'} title={'移动互联网专场'} content={'经历了异常激烈的竞争角逐后，移动互联网大局似乎已定，我们也迎来了移动互联网的下半场。通过创新为用户创造价值，被认为是下半场的核心，内容、IP两大领域成为新的争夺战场。新形式下如何窥得发展先机，寻得新的机会，本专题将带您深入了解行业领先企业对此的思考、探索与实践过程。'}/>
          </div>
          
          <div className='topic--row'>
            <TopicItem
              iconClass={'icon-zhuhuichang'}
              title={'IOT峰会'}
              content={'Gartner发布的2017年十项重大科技发展趋势，人工智能、物联网、区块链名列其中；三大科技与大数据技术结合，降低了大数据应用门槛，让大数据成为开启智能化生活的有效工具；人工智能驱动下的智能驾驶使驾车出行更安全，各大互联网巨头纷纷加大筹码，将其确定为重要战略方向；互联网教育作为新兴教育模式，广受教育机构及学员追捧,主会场将聚焦IT行业最热门技术，力邀优秀技术领袖，把脉最新发展趋势，深度分享经典应用案例。'}/>
            <TopicItem
              iconClass={'icon-zhuhuichang'}
              title={'技术管理&产品'}
              content={'运维是IT服务安全运行的重要保障。伴随企业业务规模的扩大，业务场景日益复杂化，传统运维管理方式已无法适应甚至阻碍企业的发展。寻求更高效、更敏捷、更易管理、更精益智能化运维体系成为很多技术型企业努力探索方向。本专题将揭晓行业领先运维创新经典案例，核心技术人员现身揭秘，利用大数据、云计算、人工智能等新兴技术打造智能化运维的实战经验。\n'}/>
            <TopicItem
              iconClass={'icon-zhuhuichang'}
              title={'质量&测试专场'}
              content={'软件质量测试，是企业应用开发中很重要的一环。近年来，各类新技术的兴起，催生了各类优秀的测试工具，产生了诸多高效的测试理念。测试方法变得越来越丰富，大大提高了测试效率。本论坛将解析软件测试领域最热门高效的技术和工具，及分享各知名企业在测试领域的探索实践。'}/>
          </div>
  
          <div className='topic--row'>
            <TopicItem
            iconClass={'icon-zhuhuichang'}
            title={'网络安全专场'}
            content={'万物互联时代，网络安全形势将面临更加严峻的考验。近年来发生的一系列网络安全事件，更是向企业安全防护敲响警钟。目前企业仍存在哪些未察觉的网络安全隐患？网络安全防护有哪些有效技术手段？新兴技术对网络安全保证将带来哪些帮助？如何搭建适合自己企业的网络安全防护体系？……聚焦网络安全，本专题将请领域专家带我们一步步打造企业安全“防护门”。'}/>
            <TopicItem
            iconClass={'icon-zhuhuichang'}
            title={'互联网金融专场'}
            content={'互联网金融惠普民众的同时，也正经受着各种风险的考验，诸如各种欺诈、安全事件频发。“风险控制”仍旧是互联网金融的核心。如何通过技术手段，发现并规避这些风险，是各大互联网金融企业正亟需解决的问题。本专题将挖掘互联网金融背后隐藏的各种风险，分享多家知名企业为此所做的技术探索与实践成果。'}/>
            <TopicItem
            iconClass={'icon-zhuhuichang'}
            title={'智慧物流专场'}
            content={'科技改变物流，物流改变生活，物流业是支撑国民经济和社会发展的基础性、战略性产业。随着新技术、新模式、新业态不断涌现，物流业与互联网、物联网、人工智能等深度融合，智慧物流逐步成为推进物流业发展的新动力、新路径。本届GITC智慧物流专场，我们将邀请一批知名物流企业的技术精英们，全方位展示智慧物流台前幕后不为人知的技术秘密。'}/>
          </div>
  
          <div className='topic--row'>
            <TopicItem
            iconClass={'icon-zhuhuichang'}
            title={'领袖峰会'}
            content={'技术浪潮此起彼伏，市场布局瞬息万变。大数据、云计算、IOT、人工智能等一波波新技术的冲击下，企业CTO/CIO如何选择未来技术发展之路？本次闭门峰会将定向邀请企业CTO、CIO参与，主要探讨当前技术发展趋势，技术管理应对之道。'}/>
            <TopicItem
            iconClass={'icon-zhuhuichang'}
            title={'企业专场'}
            content={'除了抢占国内市场，很多企业开始布局海外市场。拓展海外市场时，有哪些注意事项？暗藏哪些风险危机？有哪些成功应对之策？……本专场将邀请有着丰富海外市场开拓经验的企业，现场分享进军海外市场应避免的坑。'}/>
          </div>
        </div>
      </div>
    )
  }
}