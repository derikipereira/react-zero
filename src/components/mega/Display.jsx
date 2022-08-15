import React from "react";

export default props => {
    
    const lis = props.numeros.map(num => {
        return (
            <li key={num}>{num}</li>
        )
    })

    return (
        <div>
            <ul>
                {lis}
            </ul>
        </div>
    )
}