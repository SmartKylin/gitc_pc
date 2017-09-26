import React, {Component} from 'react'

export default class extends Component {
  constructor (props) {
    super(props)
  }
  getUnicode = type => {
    switch (type) {
      case 'main-place':
        return '&#xe60b;';
      default:
        return '&#xe60b;'
    }
  }
  render () {
    console.log(this.getUnicode(this.props.type));
    return (
      <div style={{}}>
        <i className='iconfont'>{this.getUnicode(this.props.type)}</i>
      </div>
    )
  }
}