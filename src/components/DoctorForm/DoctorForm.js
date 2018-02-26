import React from "react";

import classes from "./DoctorForm.css";

const doctorForm = (props) => (
    <form className={classes.Form}>
        <input id="name" type="text" name="name" placeholder="Ime i prezime"/>
        <input id="speciality" type="text" name="speciality" placeholder="Specijalnost"/>
    </form>
);

export default doctorForm;