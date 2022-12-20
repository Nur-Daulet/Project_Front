import React from "react";
import '../css/Input.css'

const Input = (props) => {
    return (
        <input onChange={(event) => props.setValue(event.target.value)}
               value={props.value}
               type={props.type} />
    );
};

export default Input;