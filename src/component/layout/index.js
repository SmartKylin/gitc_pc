import React from "react"
import SwiperMy from "../swiper/index";
import Nav from "../navigation/index";
import './index.scss'
import Login from '../login/index.js'
<<<<<<< HEAD
export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showhidden: false,
            cb: null
        }
    }
=======
export default class Layout extends React.Component{
>>>>>>> 74a6c53672fa2ba5bcd71875a146da41275f2ce6

    toggleClick() {
        alert('进入toggle,改变state')
        this.setState({
            showhidden: true
        })
    }
    closeLoginBox = () => {
        this.setState({
            showhidden: false

        })
    }
    setLoginCb = (cb) => {
        this.setState({
            cb
        })
    }
    render() {
        console.log(this.state.showhidden, 'll')
        return (
            <div className="layoutBox">
<<<<<<< HEAD
                <Nav history={this.props.history} onClick={this.toggleClick.bind(this)} setLoginCb={this.setLoginCb}/>
                <Login toggleshow={this.state.showhidden} closeLoginBox={this.closeLoginBox} cb={this.state.cb}/>
                <div className="layoutUpper">
                    <SwiperMy />
                </div>
                <div className="layoutLower">
                    {this.props.children}
                </div>
=======
                 <Nav/>
                   {/*<Login/>*/}
                 <div className="layoutUpper">
                     <SwiperMy/>
                 </div>
                 <div className="layoutLower">
                     {this.props.children}
                 </div>
>>>>>>> 74a6c53672fa2ba5bcd71875a146da41275f2ce6

            </div>
        )
    }
}
