import React, { Component } from 'react'
import TicketItem from './ticketItem/index'
import UnTicket from './unTicket/index'
import './ticket.scss'
import { getTicketList } from '../../services/ticket.js'
export default class Ticket extends Component {
  constructor() {
    super()
    this.state = {
      ticketLists: []
    }
  }
   componentDidMount() {
     let phone=localStorage.getItem('phone');
    if(phone){
getTicketList({phone}).then(res => res.json())
      .then(data => {
        console.log(data,'lll')
        this.setState({
        ticketLists: data.data
        })
      })
    }
 
    }
  render() {
    return (
      <div className="ticket-box-felx" style={{background:'#0d1427',minHeight:'1000px'}}>
        <div className="conference--strengths">
          <div className="strengths--title strengths-color">我的门票</div>
        </div>
        {this.state.ticketLists&&this.state.ticketLists.length>0?this.state.ticketLists.map((data, index) => (
          <TicketItem data={data} key={index} />
        )):<UnTicket/>}
      </div>
    )
  }
}