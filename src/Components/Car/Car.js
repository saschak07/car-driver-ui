import React from 'react'
import './Car.css'

const car = (props) => {
    return (<div className="carDetails">
        <p className="carheading">{props.license_plate}</p>
        <p className="car">Seat occupancy: {props.seat_count}</p>
        <p className="car">Car is convertible: {props.convertible}</p>
        <p className="car">Car Engine: {props.engine_type}</p>
        <p className="car">Manufacturer: {props.manufacturer}</p>
        <p className="car">Rating: {props.rating}</p>
    </div>)
}

export default car