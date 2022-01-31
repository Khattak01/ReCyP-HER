import React from "react";
import "./Alert.css";

const Alert = ({ alert }) => <div className={`alert alert-${alert?.alertType}`}>
    <p className="text">{alert.msg}</p>
</div>



export default Alert;

