import React, {Component} from 'react'
import TicketItem from '../../component/ticketItem/index'
import './ticket.scss'
export default class Ticket extends Component {
  render() {
    return (
      <div>
        <TicketItem/>
      </div>
    )
  }
}