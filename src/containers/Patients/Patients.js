import React, { Component } from "react";

import PatientInfo from "../../components/PatientInfo/PatientInfo";
import classes from "./Patients.css";
import PatientForm from "../../components/PatientForm/PatientForm";
import Button from "../../components/UI/Button/Button";

class Patients extends Component {
    state = {
        patients: [
            {
                id: 0,
                name: "Ivana Ivanović",
                jmbg: "1605981750517",
                chart: "2813/09",
                doctor: "Jovan Jovanović"
            },
            {
                id: 1,
                name: "Mitar Mitrović",
                jmbg: "2112986820581",
                chart: "2813/09",
                doctor: ""
            }
        ]
    }

    updatePatientsDoctorHandler = (id) => {
        // Get the input from select
        const doctor = document.getElementById("select").value;

        // Get the copy of patients array
        const patients = [...this.state.patients];

        // Update doctor property in object based on the id
        patients[id].doctor = doctor;

        // update the state
        this.setState({patients: patients});
    }

    addPatientHandler = (event) => {
        // After adding each patient, increment id in order to have a unique value
        let id = this.state.patients.length;
        id++;

        // Get the value from inputs
        const name = document.getElementById("patientName").value;
        const jmbg = document.getElementById("jmbg").value;
        const chart = document.getElementById("chart").value;

        
        // Create new patient object
        const patient = {
            id: id,
            name: name,
            jmbg: jmbg,
            chart: chart,
            doctor: ""
        }
        
        this.state.patients.push(patient);

        const updatedState = this.state.patients;

        this.setState({patients: updatedState});
        console.log(this.state.patients);
    }

    render() {
        return(
            <div className={classes.Patients}>
                <p>Pacijenti</p>
               {this.state.patients.map(patient => (
                   <PatientInfo 
                        update={(id) => this.updatePatientsDoctorHandler(id)}
                        key={patient.id} 
                        patientId={patient.id}
                        name={patient.name} 
                        jmbg={patient.jmbg} 
                        chart={patient.chart} 
                        doctor={patient.doctor}
                        doctors={this.state} />
               ))} 
               <PatientForm />
               <Button clicked={this.addPatientHandler}/>
            </div>
        );
    }
}

export default Patients;