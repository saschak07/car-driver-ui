import React, { Component } from 'react';
import './App.css';
import Cockpit from './Components/Cockpit/Cockpit'
import Cars from './Containers/Cars/Cars';
import Drivers from './Containers/Drivers/Drivers'
import { BrowserRouter,Route, Switch } from 'react-router-dom';
class App extends Component {
  
  
  
  render() {
    
    return (
      <BrowserRouter>
      <div className="App">
        <Cockpit selectDriver={this.selectDriverdetailsHandler}
        selectCar={this.selectCarDetailsHandler}/>
        <Switch>
        <Route path="/cars" component={Cars}/>
        <Drivers></Drivers>
        
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
