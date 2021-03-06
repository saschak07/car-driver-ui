import React,{Component} from 'react'
import './Cockpit.css'
class Cockpit extends Component {

state = {
    openedSideBar:false,
}

sideBartoggleHandler = () => {
    const sidebarStatus = this.state.openedSideBar;
    this.setState({openedSideBar:!sidebarStatus})
    
  }

componentDidUpdate(){
    console.log(this.state)
} 
componentDidMount(){
    console.log(this.state)
} 


render(){
    let sideBar = null;
    console.log(this.state.openedSideBar)
    if(!this.state.openedSideBar){
        sideBar =  <div className="w3-teal cockpitContainer">
        <button className="w3-button w3-teal w3-xlarge" onClick={this.sideBartoggleHandler}
        style={{float:'left'}}>☰</button>
        <div className="w3-container">
            <div style={{float:'left'}} ><h1>Kuber Cars</h1></div>
        </div>
    </div>
   
    }
   else if(this.state.openedSideBar){
        
    sideBar = <div><div className="w3-teal cockpitContainer">
    <button className="w3-button w3-teal w3-xlarge" onClick={this.sideBartoggleHandler}
    style={{float:'left'}}>☰</button>
    <div className="w3-container">
        <div style={{float:'left'}} ><h1>Kuber Cars</h1></div>
    </div>
    </div>
    <div className="w3-sidebar w3-bar-block w3-border-right"
    id="mySidebar"> 
     <button onClick={this.sideBartoggleHandler} className="w3-bar-item w3-large" >Close &times;</button>
    <a href="/cars" className="w3-bar-item w3-button" style={{color:'black'}} >Show cars</a>
    <a href="/drivers" className="w3-bar-item w3-button" style={{color:'black'}} >Show Drivers</a>
    <a href="#" className="w3-bar-item w3-button" style={{color:'black'}}>Search Drivers</a></div>   
    </div>
    }
    
 return(
     <div>
        {sideBar}
    </div>
 );
}
}

export default Cockpit