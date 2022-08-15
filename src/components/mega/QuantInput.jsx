import React from "react";

export default props => {

    return (
        <div>
            <label htmlFor="">Qtde de Números</label>
            <input 
            min={6}
            max={12}
            type="number" 
            value={props.qtde}
            onChange={
                props.setQtde
            }
             />
        </div>
    )
}