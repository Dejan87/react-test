import React from "react";

import classes from "./PatientInfo.css";

const patientInfo = (props) => {
    let doctor;

    // If doctor prop is not set/equal to an empty string
    if(props.doctor === "") {
        doctor = "(nema)";
    }

    return(
        <div className={classes.Info}>
            <p>{props.name}</p>
            <p>{props.jmbg}</p>
            <p>{props.chart}</p>
            <span>Izabrani lekar: </span><span>{props.doctor || doctor}</span><br />
            {!props.doctor ? 
                <select id="select" onChange={() => props.update(props.patientId)}>
                    <option value="">Izaberite lekara</option>
                    <option value="Jovan Jovanović">Jovan Jovanović</option>
                    <option value="Petar Petrović">Petar Petrović</option>
                </select> : null}
        </div>
    );
};

export default patientInfo;