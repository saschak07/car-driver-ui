import React,{Component} from 'react'
import Car from '../../Components/Car/Car'

import axios from '../../axios'
import './Cars.css'
import Modal from '../../Components/Modal/Modal'
class Cars extends Component{
    state = {
        carList : [],
        showModal: false,
        selactedcarId: null
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

     HandleDriverSelection = (license_plate) =>{
      this.setState({showModal:true});
      this.setState({selactedcarId:license_plate})
      console.log(license_plate)
    }
      HandleCancelSelection = () =>{
        this.setState({showModal:false});
      }

    render(){

      const modal= this.state.showModal?<div><Modal show={this.state.showModal}
      close={this.HandleCancelSelection}
      license_plate={this.state.selactedcarId}/></div>:null;
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
            click={(event) => {this.HandleDriverSelection(car.license_plate)}}
            />
          </div>
        )
      })
        return(<div className='CarListContainer'>
            {car}
            {modal}
        </div>);
    }
}

export default Cars;