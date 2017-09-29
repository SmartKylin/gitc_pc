import React,{Component} from 'react'

export default class Score extends Component{

    render(){
        return(
            <div className="ScoreBox">
                <div className="ScoreTitle">评分规则</div>
                <div className="ScoreTitleBox">
                    <div className="ScoreTitleBoxA">大众投票选举规则</div>
                    <div className="ScoreTitleBoxAA">专家评审团内部审核规则</div>
                </div>
                <div className="ScoreTitleBoxEnglish">
                    <div className="ScoreTitleBoxEnglishA">Popular voting norms</div>
                    <div className="ScoreTitleBoxEnglishAA">Expert review panel internal audit rules</div>
                </div>

                <div className="ScoreTitleBoxRule">
                    <div className="ScoreTitleBoxRuleA">
                        <div>1）凡是互联网技术领域的产品、人物、企业，均可参评。报名截止时间为10月20日。</div>
                        <div>2）企业或个人将相关信息在“官网”页面提交报名申请，我们将在候选名单页面列出。
                        </div>
                        <div>3）网络评分标准</div>
                        <div>微信投票：5个投票=1分（加微信关注方可有投票权）</div>
                        <div>官网投票：5票=1分</div>
                        <div>多平台投票：5票=2分</div>
                        <div>多平台、多人次投票有效，累计计分。同一推荐内容多平台发布，投票数累计有效。</div>
                    </div>
                    <div className="ScoreTitleBoxRuleA">
                        <div>大会主席团和专家顾问团组成奖项评委会，召开评审会议，根据报名申请进行奖项</div>
                        <div>大会主席团和专家顾问团组成奖项评委会，召开评审会议，根据报名申请进行奖项</div>
                        <div>监督核查。</div>
                        <div>投票：1票=1分</div>
                    </div>
                </div>


            </div>
        )
    }
}

