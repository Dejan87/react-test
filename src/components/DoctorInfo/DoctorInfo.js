import React from "react";

import classes from "./DoctorsInfo.css";

const doctorInfo = (props) => (
    <div className={classes.Info}>
        <p>{props.name}</p>
        <p>{props.speciality}</p>
    </div>
);

export default doctorInfo;