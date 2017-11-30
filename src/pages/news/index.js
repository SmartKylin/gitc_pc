import React, {Component} from 'react'
import './index.scss'
import Nav from '../../component/navigation'

let img = require('./images/summary_01.png')

const generateImgAry = () => {
  let ary = []
  for (var i = 0; i < 7; i ++) {
    ary.push(require(`./images/summary_0${i + 1}.png`));
  }
  return ary
}

const imgAry = generateImgAry()

export default class extends Component {
  render () {
    return (
      <div className="news-summary">
        <Nav history={this.props.history}/>
        {
          imgAry.map((item, index) => (
            <img src={item} alt=""/>
          ))
        }
      </div>
    )
  }
}