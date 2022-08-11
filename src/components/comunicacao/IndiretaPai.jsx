import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {


    // nome idade nerd
    const [nome, setNome] = useState("indefinido")
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
    function fornecerInfo(n, i, ne) {
        setNome(n)
        setIdade(i)
        setNerd(ne)
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong> </span>
                <span>{nerd ? "Verdadeiro" : "Falso"}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInfo}></IndiretaFilho>
        </div>
    )
}