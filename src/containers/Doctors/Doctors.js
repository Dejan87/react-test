import React, { Component } from "react";

import DoctorInfo from "../../components/DoctorInfo/DoctorInfo";
import classes from "./Doctors.css";
import DoctorForm from "../../components/DoctorForm/DoctorForm";
import Button from "../../components/UI/Button/Button";

class Doctors extends Component {
    state = {
        doctors: [
            {
                id: 1,
                name: "Jovan Jovanović",
                speciality: "Kardiolog"
            },
            {
                id: 2,
                name: "Petar Petrović",
                speciality: "Imunolog"
            }
        ]
    }

    addDoctorHandler = (event) => {
        // After adding each doctor, increment id in order to have a unique value
        let id = this.state.doctors.length;
        id++;

        // Get the value from inputs
        const name = document.getElementById("name").value;
        const speciality = document.getElementById("speciality").value;
        
        // Create new doctor object
        const doctor = {
            id: id,
            name: name,
            speciality: speciality
        }

        this.state.doctors.push(doctor);

        const updatedState = this.state.doctors;

        this.setState({doctors: updatedState});
    }

    render() {
        return(
            <div className={classes.Doctors}>
                <p>Doktori</p>
               {this.state.doctors.map(doctor => (
                   <DoctorInfo key={doctor.id} name={doctor.name} speciality={doctor.speciality} />
               ))}

               <DoctorForm />
               <Button clicked={this.addDoctorHandler}/>
            </div>
        );
    }
}

export default Doctors;