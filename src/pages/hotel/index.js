import React from 'react'
import Nav from '../../component/navigation/index'
import './index.scss'
import tu1 from './image/酒店信息_11.png'
import tu2 from './image/酒店信息_03.png'
import tu3 from './image/酒店信息_05.png'
import tu4 from './image/酒店信息_09.png'
export default class Hotel extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Nav history={this.props.history}/>
                <div className="Hotel-Box">
                    <div className="Hotel-Inner"    >
                        <div className="Hotel-First">
                            <div className="Hotel-First-One">
                                <div className="Hotel-First-One-Img">
                                    <img src={tu2} style={{width:'100%',height:'100%'}} alt=""/>
                                </div>
                                <div className="Hotel-First-One-Text-Box">
                                    <div >
                                        <div style={{fontSize:'16px',color:'#00d9fd'}}>北京国际名人大酒店</div>
                                        <div style={{color:'#fff',margin:"10px 0 10px 0"}}>
                                            <div style={{fontSize:'12px'}}>地址: 北京市朝阳区安立路99号人国际大酒店</div>
                                            <div>联系人: 许大雷 15210991511</div>
                                        </div>
                                    </div>
                                    <div style={{color:'#fff',marginBottom:'7px',fontSize:'12px',fontWeight:'200'}}>
                                        <div>商务标间 (大床)- 700/晚(含单早)</div>
                                        <div>商务标间 (双床)- 700/晚(含双早)</div>
                                        <div>商务套房 (大床)- 850/晚(含单早)</div>
                                        <div>商务标间 (双床)- 850/晚(含双早)</div>
                                    </div>
                                    <div style={{color:'#fff',display:'flex', alignItems: 'center'}}>
                                        <div style={{width:'5px',height:'5px',borderRadius:'50%',backgroundColor:'#01dafb',marginRight:'5px'}}></div>
                                        <div>距离大会地点车程: 10分钟</div></div>
                                </div>
                            </div>
                            <div className="Hotel-First-Two">
                                <div className="Hotel-First-Two-Img">
                                    <img src={tu3} style={{width:'100%',height:'100%'}} alt=""/>
                                </div>
                                <div className="Hotel-First-Two-Text-Box">
                                    <div >
                                        <div style={{fontSize:'16px',color:'#00d9fd'}}>北京北辰洲际酒店</div>
                                        <div style={{color:'#fff',margin:"10px 0 10px 0"}}>
                                            <div style={{fontSize:'12px'}}>地址: 北辰西路8号院4号楼</div>
                                            <div>联系人: 李 聪 13811252693</div>
                                        </div>
                                    </div>
                                    <div style={{color:'#fff',marginBottom:'41px',fontSize:'12px',fontWeight:'200'}}>
                                        <div>豪华房 (大床)- 1200/晚(含单早)</div>
                                        <div>豪华房 (双床)- 1200/晚(含双早)</div>
                                    </div>
                                    <div style={{color:'#fff',display:'flex', alignItems: 'center'}}>
                                        <div style={{width:'5px',height:'5px',borderRadius:'50%',backgroundColor:'#01dafb',marginRight:'5px'}}></div>
                                        <div>距离大会地点车程: 2分钟</div></div>
                                </div>
                            </div>
                        </div>
                        <div className="Hotel-First-Second">
                            <div className="Hotel-First-Second-One">
                                <div className="Hotel-First-Second-One-Img">
                                    <img src={tu1} style={{width:'100%',height:'100%'}} alt=""/>
                                </div>
                                <div className="Hotel-First-Second-One-Text-Box">
                                    <div >
                                        <div style={{fontSize:'16px',color:'#00d9fd'}}>北京凯迪格兰大酒店</div>
                                        <div style={{color:'#fff',margin:"10px 0 10px 0"}}>
                                            <div style={{fontSize:'12px'}}>地址: 北京市朝阳区亚运村北辰东路18号</div>
                                            <div>联系人: 何彬彬 15810054090</div>
                                        </div>
                                    </div>
                                    <div style={{color:'#fff',marginBottom:'23px',fontSize:'12px',fontWeight:'200'}}>
                                        <div>高级间 (大床)- 700/晚(含单早)</div>
                                        <div>高级间 (双床)- 700/晚(含双早)</div>
                                        <div>豪华商务套房 (大床)- 850/晚(含单早)</div>

                                    </div>
                                    <div style={{color:'#fff',display:'flex', alignItems: 'center'}}>
                                        <div style={{width:'5px',height:'5px',borderRadius:'50%',backgroundColor:'#01dafb',marginRight:'5px'}}></div>
                                        <div>距离大会地点车程: 10分钟</div></div>
                                </div>
                            </div>
                            <div className="Hotel-First-Second-Two">
                                <div className="Hotel-First-Second-Two-Img">
                                    <img src={tu4} style={{width:'100%',height:'100%'}} alt=""/>
                                </div>
                                <div className="Hotel-First-Second-Two-Text-Box">
                                    <div >
                                        <div style={{fontSize:'16px',color:'#00d9fd'}}>五洲皇冠国际酒店</div>
                                        <div style={{color:'#fff',margin:"10px 0 10px 0"}}>
                                            <div style={{fontSize:'12px'}}>地址: 朝阳区北四环中路8号</div>
                                            <div>联系人: 杨雪梅 18734874543</div>
                                        </div>
                                    </div>
                                    <div style={{color:'#fff',marginBottom:'23px',fontSize:'12px',fontWeight:'200'}}>
                                        <div>高级房 (大床)- 980/晚(含单早)</div>
                                        <div>高级房 (双床)- 1080/晚(含双早)</div>
                                        <div>豪华房 (大床)- 1280/晚(含单早)</div>
                                    </div>
                                    <div style={{color:'#fff',display:'flex', alignItems: 'center'}}>
                                        <div style={{width:'5px',height:'5px',borderRadius:'50%',backgroundColor:'#01dafb',marginRight:'5px'}}></div>
                                        <div>距离大会地点车程: 2分钟</div></div>
                                </div>
                            </div>
                        </div>
                        <div className="Hotel-Edge">
                            <div style={{fontSize:'18px'}}>预订酒店时，请直接告知酒店联系人您是GITC2017大会的参会人员，即可享受以上协议酒店价格。</div>
                            <div style={{marginLeft:'498px',marginTop:'30px',fontSize:'18px'}}>GITC全球互联网技术大会组委会</div>
                            <div style={{marginLeft:'623px', fontSize:'18px'}}>2017年10月20日</div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}
