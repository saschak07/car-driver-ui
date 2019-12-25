import React,{Component} from 'react'
import Car from '../Components/Car/Car'
class Cars extends Component{
    state = {
        carList : [{
            id: 1,
            license_plate: "WB02C3698",
            seat_count: 4,
            convertible: true,
            rating: 4.5,
            engine_type: "GAS",
            manufacturer: "BMW"
          },
          {
            id: 2,
            license_plate: "WB02G3698",
            seat_count: 4,
            convertible: true,
            rating: 5,
            engine_type: "ELECTRIC",
            manufacturer: "BMW"
          },
          {
            id: 3,
            license_plate: "WB02G3699",
            seat_count: 4,
            convertible: true,
            rating: 5,
            engine_type: "ELECTRIC",
            manufacturer: "Daimler"
          },
          {
            id: 4,
            license_plate: "WB02G3685",
            seat_count: 4,
            convertible: false,
            rating: 4.5,
            engine_type: "GAS",
            manufacturer: "BMW"
          }]
    }

    render(){

      const car = this.state.carList.map(car => {
        return (
          <div key={car.id}>
            <Car 
            license_plate={car.license_plate}
            seat_count={car.seat_count}
            convertible={car.convertible}
            engine_type={car.engine_type}
            manufacturer={car.manufacturer}
            rating={car.rating}
            />
          </div>
        )
      })
        return(<div>
            {car}
        </div>);
    }
}

export default Cars;