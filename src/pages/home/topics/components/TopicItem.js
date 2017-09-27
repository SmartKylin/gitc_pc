import React, {Component} from 'react'
import './index.scss'
// import $ from 'jquery'

export default class extends Component {

  componentDidMount () {
    this.item.onmouseenter = () => {
      this.item.classList.add('active')
    }
    /*$('.topic--item').mouseenter(() => {
      $(this).addClass('active')
    })*/
    this.item.onmouseleave = () => {
      this.item.classList.remove('active')
    }
  }
  render () {
    return (
    <div className='topic--item' ref={item => this.item = item}>
      <div className='topic--icon'>
        <i className={'iconfont ' + this.props.iconClass} style={{fontSize: '40px'}}></i>
      </div>
      <div className='topic--item--title'>{this.props.title}</div>
      <div className='topic--item--content'>{this.props.content}</div>
    </div>
    )
  
  }
  componentWillUnmount () {
    this.item.onmouseenter = null
    this.item.onmouseleave = null
  }
}