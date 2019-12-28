import React,{Component} from 'react'
import Driver from '../../Components/Driver/Driver'
import axios from '../../axios';
import {withRouter} from 'react-router-dom'
import './Drivers.css'
//import { withRoute } from 'react-router-dom'
class Drivers extends Component{
    state = {
        driverList:[]
    }

    componentDidMount(){
        axios.get('/v1/drivers?onlineStatus=ONLINE')
        .then(response =>{
            this.setState({driverList : response.data})
            console.log(this.state)
        })
        .catch(error => console.log(error))
    }

    HandleDeselect=(id,licenseplate)=>{
        axios.patch('/v1/drivers/'+id+'?licensePlate='+licenseplate+'&status=DESELECT')
        .then(response => {
            if(response.status === 200){
                console.log(response)
                alert("driver got deselected successfully!!!")
                this.props.history.push('/cars');
            }
        })
        .catch(error => {
            console.log(error)
            alert("OOps !!! driver could not be deselected!!")
            this.props.history.push('/cars');
        })
    }

    render(){
        let driver = this.state.driverList.map(driver =>{
            return (
                <div key={driver.id}>
                    <Driver username={driver.username}
                    selectedCar={driver.selectedCar}
                    click={(event) => this.HandleDeselect(driver.id,driver.selectedCar)}></Driver>
                </div>
            )
        })

        return(
            <div className="DriverListContainer">
                {driver}
            </div>
        )
    }
}

export default withRouter(Drivers);