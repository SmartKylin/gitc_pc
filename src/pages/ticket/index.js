import React, { Component } from 'react'
import TicketItem from './ticketItem/index'
import './ticket.scss'
import { getTicketList } from '../../services/ticket.js'
export default class Ticket extends Component {
  constructor() {
    super()
    this.state = {
      ticketList: []
    }
  }
  componentWillMount() {
    const dat = {
      "msg": "请按照格式请求！",
      "status": true,
      "data": [
        {
          "sign_staus": 0,
          "name": "郑建文1",
          "code": "7754600022432562",
          "phone": "17710633221",
          "bt__name": '展览票1',
          "id": 1
        },
        {
          "sign_staus": 0,
          "name": "郑建文2",
          "code": "5475346000964303",
          "phone": "17710633222",
          "bt__name": '展览票2',
          "id": 2
        },
        {
          "sign_staus": 0,
          "name": "郑建文",
          "code": "4634676004079204",
          "phone": "17710633223",
          "bt__name": '展览票3',
          "id": 3
        },
      ]
    }
    this.setState({
      ticketLists: dat
    })

    // document.title = '大会议程'

    // getTicketList(13800138000).then(res => res.json())
    //   .then(data => {
    // 		this.setState({
    // 			dadas:data.data
    // 		})
    //   })
  }
  render() {
    console.log(this.state.ticketLists.data, 'props')
    return (
      <div className="ticket-box-felx">
        <div className="conference--strengths">
          <div className="strengths--title strengths-color">我的门票</div>
        </div>
        {this.state.ticketLists.data.map((data, index) => (
          <TicketItem data={data} key={index} />
        ))}
      </div>
    )
  }
}