import React from "react";

import If from "./If";

export default props => {

    const usuario = props.usuario || {}

    return (
        <div>
            <If test={usuario && usuario.nome}>
                <div>
                    Seja Bem Vindo <strong>{usuario.nome}</strong>!
                </div>
            </If>
            <If test={!usuario || !usuario.nome}>
                <div>
                    Seja Bem Vindo <strong>Usuario Anônimo</strong>!
                </div>
            </If>
        </div>


    )
}