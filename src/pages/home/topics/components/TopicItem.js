import React, {Component} from 'react'
import './index.scss'
// import MyIcon from './MyIcon'


export default class extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    console.log(this.props.iconClass);
    return (
      <div className='topic--item'>
        <div className='topic--icon'>
          {/*<i className='iconfont' style={{fontSize: '40px'}}>&#xe60b;</i>*/}
          <i className={'iconfont ' + this.props.iconClass} style={{fontSize: '40px'}}></i>
        </div>
      </div>
    )
  }
}