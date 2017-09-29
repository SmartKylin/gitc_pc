import React, { Component } from 'react'
import './ticketItem.scss'
import JsBarcode from 'jsbarcode'
export default class TicketItem extends Component {
  constructor(){
    super()
    this.state={
      toggle:true,
      barcodeString:'',
      ticket:'',
      name:''
    }
  }
  // componentWillMount(){

  // }
   async componentDidMount(){
     const {data}=this.props;
     
     await this.setState({
        ticket: data && data.bt__name,
        barcodeString: data && data.code,
        name: data && data.name
      })
      console.log(data,'data222')
      // 生成条形码
      JsBarcode(this.barcode, this.state.barcodeString,
      // JsBarcode(this.barcode, '47389743748397',
      {
        displayValue: false,  //  不显示原始值
        // background: '#4b8b7f',  //  背景色
        blank: 100,
        lineColor: 'rgba(255,255,255)', // 线条颜色
        width: 2.4  // 线条宽度
      })
  }
  render() {
  const {data}=this.props
    return (

      <div className="ticket-box" style={{background:'#0d1427',minHeight:'500px'}}>
        <div className="ticket-content">
          <div className="ticket-content-left">
            <h3 className="content-left-title">GITC2017全球互联网技术大会</h3>
            <p className="content-left-showname">GITC2017 GLOBLAL INTERENET TECHNOLOGY CONFERENCE</p>
                <div className="pople-name-box"><span className="pople-name">参会人</span>{data.name}</div>
                <div><span className="ticket-name">门票类型</span>{data.bt__name}</div>
                <div className="tiem-addr clearfix">
                  <span className="ticket-time-icon fl"></span><span className="fl ">2017.11.23-2017.11.24</span>
                  <span className="ticket-add-icon fl "></span><span className="fl">北京·国家会议中心</span>
                </div>
                <div className="logo-content-box"> 
                  <div className="logo-icon-zzs"></div>
                  <div>
                    <p className="ticket-content-left-p">白云山科技集团提醒您:到展位抽奖赢汽车</p>
                    <p className="ticket-content-left-p">展位地址:3F 38Q展位</p>
                  </div>
                </div>
          </div>
          <div className="ticket-content-right">
            {/*<img src="www.baidu.com" alt="" className="er-code"/>*/}
            <svg ref={ barcde => this.barcode = barcde}></svg>
            <p className="code-font">{data.code}</p>
            <p className="ticket-content-right-title">使用说明</p>
            <p className="ticket-content-right-p">1、本活动凭票入场,一人一票一次性使用;</p>
            <p className="ticket-content-right-p">2、请截屏保存次条形码,保持条形码清晰,以及作为入场凭证。</p>
          </div>
        </div>
        <div className="ticket-bottpm-positon">
          <div className="ticket-box-bottom">
          <div className="ticket-bottom-left"></div>
          <div className="ticket-bottom-right"></div>
        </div>
        </div>
      </div>


    )
  }
}