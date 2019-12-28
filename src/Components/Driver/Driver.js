import React from 'react'
import './Driver.css'
import driverImage from '../../../public/extras/icons8-person-80.png'

const driver = (props) => {
    let carDetails =null;
    let deselection = null;
    if(props.selectedCar != null)
    {
        carDetails = <div> <p className="driverheading">driving car: {props.selectedCar}</p></div>
        deselection =  <button onClick={props.click}>De-select car</button>
    }
    return (<div className="driverDetails">
        <div className="info">
            <img className="driverImage" src={driverImage} alt=""/>
        <p className="driver">Name:  {props.username}</p>
        </div>

        <div className="info">
        {carDetails}
        </div>
       
        <div className="driver_button">
           {deselection}
        </div>
        
    </div>)
}

export default driver