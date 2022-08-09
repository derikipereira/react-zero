import React from "react";

export default props => {

    const isPar = props.numero % 2 === 0

    return (
        <div>
            {isPar ?
                <span>{props.numero} é Par</span> :
                <span>{props.numero} é Impar</span>
            }
        </div>
    )
}