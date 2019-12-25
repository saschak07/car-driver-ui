import React,{Component} from 'react'
import Car from '../../Components/Car/Car'

import axios from '../../axios'
import './Cars.css'
class Cars extends Component{
    state = {
        carList : []
    }

    componentDidMount(){
      console.log('making http call to get cars')
      axios.get('/v1/cars')
      .then(response => {
        this.setState({carList : response.data})
      })
      .catch(error => {
        console.log(error);
      })
      
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
        return(<div className='CarListContainer'>
            {car}
        </div>);
    }
}

export default Cars;