import React, {Component} from 'react'
import GuestItem from '../components/GuestItem'
import './index.scss'

export default class extends Component {
  render () {
    return (
      <div className={'speech--guest'}>
        <div className='speech--title'>演讲嘉宾</div>
        <div className='speech--body'>
          <GuestItem speech={true}/>
        </div>
      </div>
    )
  }
}