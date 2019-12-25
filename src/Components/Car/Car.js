import React from 'react'
import './Car.css'
import personImage from '../../../public/extras/multiple-users-silhouette.svg'
import carImage from '../../../public/extras/car.svg'

const car = (props) => {
    return (<div className="carDetails">
        <div className="info">
            <img className="carImage" src={carImage} alt=""/>
        <p className="car"> {props.manufacturer}</p>
        </div>

        <div className="info">
        <h1>  {props.license_plate}</h1>
        <p className="car">ENGINE: {props.engine_type}</p>
        </div>
        <div className="info">
        <p className="car">
        <img className="personImage" src={personImage} alt=""/> {props.seat_count}
        </p>
        </div>
        <div className="car_button">
            <button >Assign a Driver</button>
        </div>
        
    </div>)
}

export default car