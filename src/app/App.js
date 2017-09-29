import React, { Component } from 'react';
import './App.scss';
import RouterMap from '../router'

class App extends Component {
  componentDidMount(){
    window.unload=()=>{
    localStorage.removeItem("phone")
  }
  }
  render() {
    return (
      <div className="App">
        <RouterMap/>
      </div>
    );
  }
}

export default App;
