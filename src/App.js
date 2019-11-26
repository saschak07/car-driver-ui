import React, { Component } from 'react';
import './App.css';
import Cockpit from './Components/Cockpit/Cockpit'
import Cars from './Containers/Cars';
class App extends Component {
  state = {
    isCarDetailsSelected:true,
    isDriverDetailsSelected:false
  }

   selectCarDetailsHandler = () => {
    this.setState({isCarDetailsSelected:true,isDriverDetailsSelected:false})
  }

  selectDriverdetailsHandler = () => {
    this.setState({isCarDetailsSelected:false,isDriverDetailsSelected:true})
  }

  render() {
    let cars = null
    //let drivers = null
    if(this.state.isCarDetailsSelected && !this.state.isDriverDetailsSelected){
      cars = <Cars/>
    }
    
    return (
      <div className="App">
        <Cockpit selectDriver={this.selectDriverdetailsHandler}
        selectCar={this.selectCarDetailsHandler}/>
        {cars}
      </div>
    );
  }
}

export default App;
