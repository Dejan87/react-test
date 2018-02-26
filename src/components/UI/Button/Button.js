import React from "react";

import classes from "./Button.css";

const button = (props) => (
    <button
        onClick={props.clicked}
        className={classes.Button} required>Dodaj</button>
);

export default button;