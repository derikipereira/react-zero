import "./Contador.css"

import React from "react";

export default props => {

    return (
        <div className="Contador">
            <button onClick={props.setInc}>+</button>
            <button onClick={props.setDec}>-</button>
        </div>
    )
}