import React,{Component} from 'react'
import './Modal.css'
import BackDrop from '../Backdrop/Backdrop'
import axios from '../../axios'
import { withRouter,Redirect } from 'react-router-dom'
class Modal extends Component{
    
    state ={
        driverList: [],
        selectedDriver: null,
        route: false
    }
    componentDidMount(){
        console.log("calling get drivers!!")
        console.log(this.props)
        axios.get('/v1/drivers?onlineStatus=ONLINE')
        .then(response =>{
            this.setState({driverList : response.data})
            console.log(this.state)
        })
        .catch(error => console.log(error))
    }

    HandleDriverSelection =(driver_id) =>{
        this.setState({selectedDriver:driver_id})
        console.log(driver_id)
    }

    HandleDriverAssignment = () =>{
        let driverId = this.state.selectedDriver;
        let licensePlate = this.props.license_plate;
        console.log('patching driver!!')
        axios.patch('/v1/drivers/'+driverId+'?licensePlate='+licensePlate+'&status=SELECT')
        .then(response => {
            if(response.status === 200){
                console.log(response)
                alert("driver got assigned successfully!!!")
                this.props.history.replace('/');
            }
        })
        .catch(error => {
            console.log(error)
            alert("OOps !!! driver could not be assigned!!")
            this.props.history.push('/');
        })
    }

    render (){
        const redirect = this.state.route?<Redirect to='/cars'/>:null;
        let optionList = this.state.driverList.map(driver => {
            return (
                <option key={driver.id} value={driver.id}>{driver.username}</option>
            )
        })
           return (<div>
               {redirect}
                <BackDrop show={this.props.show} close={this.props.close}/>
            
            <div className="Modal">
               <p>Assign Car: {this.props.license_plate}</p>
               <p>to driver:</p>
            <select onChange={(event) => this.HandleDriverSelection(event.target.value)}>
                <option value={null}>--select--</option>
                {optionList}
            </select>
            <p></p>
            <button className="button" onClick={(event) => this.HandleDriverAssignment(event)}>Assign Driver</button>
            </div>

            </div>)
        }
        
    }


export default withRouter(Modal)