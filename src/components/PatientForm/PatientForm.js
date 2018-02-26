import React from "react";

import classes from "./PatientForm.css";

const doctorForm = (props) => (
    <form className={classes.Form}>
        <input id="patientName" type="text" name="name" placeholder="Ime i prezime"/>
        <input id="jmbg" type="text" name="jmbg" placeholder="JMBG"/>
        <input id="chart" type="text" name="chart" placeholder="Br. zdravstvenog kartona"/>
    </form>
);

export default doctorForm;