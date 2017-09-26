import React, {Component} from 'react'
import './index.scss'
import TopicItem from './components/TopicItem'

export default class extends Component {
  render () {
    return (
      <div className='conference--topic'>
        <div className='topic--title'>大会专题</div>
        <TopicItem/>
      </div>
    )
  }
}