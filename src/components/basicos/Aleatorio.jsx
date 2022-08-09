import React from "react";



export default props => {
    const { min, max } = props
    const valor = Math.floor(Math.random() * (max)) + min

    return (
        <div>
            <h2>Random Numero :</h2>
            <h4>Valor Min: {min}</h4>
            <h4>Valor Max: {max}</h4>
            <h4>Valor Aleatorio : {valor}</h4>
        </div>
    )

}