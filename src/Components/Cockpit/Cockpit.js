import React,{Component} from 'react'

class Cockpit extends Component {

state = {
    openedSideBar:false
}

sideBartoggleHandler = () => {
    const sidebarStatus = this.state.openedSideBar;
    this.setState({openedSideBar:!sidebarStatus})
    
  }
  


render(){
    let sideBar = null;
    if(!this.state.openedSideBar){
        sideBar =  <div className="w3-teal">
        <button className="w3-button w3-teal w3-xlarge" onClick={this.sideBartoggleHandler}
        style={{float:'left'}}>☰</button>
        <div className="w3-container">
            <div style={{float:'left'}} ><h1>Kuber Cars</h1></div>
        </div>
    </div>
    }
    else{
        sideBar = <div className="w3-sidebar w3-bar-block w3-border-right"
        id="mySidebar"> 
         <button onClick={this.sideBartoggleHandler} className="w3-bar-item w3-large" >Close &times;</button>
        <a href="#" className="w3-bar-item w3-button" style={{color:'black'}} onClick={this.props.selectCar}>Show cars</a>
        <a href="#" className="w3-bar-item w3-button" style={{color:'black'}} onClick={this.props.selectDriver}>Show Drivers</a>
        <a href="#" className="w3-bar-item w3-button" style={{color:'black'}}>Search Drivers</a></div>
        }
    
 return(
     <div>
        {sideBar}
    </div>
 );
}
}

export default Cockpit