import "./Mega.css";

import React, { useState } from "react";

import QuantInput from "./QuantInput";
import Display from "./Display";
import Botao from "./Botao";

export default props => {

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = gerarListaNumeros(qtde)
    const [listaNumeros, setListaNumeros] = useState(numerosIniciais)

    function gerarListaNumeros(qtde) {
        const listaNumeros = Array(qtde)
            .fill(0)
            .reduce(
                (nums) => {
                    const novoNumero = gerarNumeroNaoContido(1, 61, nums)
                    return [...nums, novoNumero]
                }, [])
            .sort((n1, n2) => n1 - n2)

        return listaNumeros;
    }

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max - min)) + min

        return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio
    }

    return (
        <div className="Mega">
            <h2>Gerar Numeros Mega</h2>
            <Display numeros={listaNumeros}></Display>
            <QuantInput qtde={qtde} setQtde={e => {
                setQtde(+e.target.value)
                setListaNumeros(gerarListaNumeros(+e.target.value))
            }} ></QuantInput>
            <Botao setNumeros={_ => setListaNumeros(gerarListaNumeros(qtde))}></Botao>
        </div>
    )
}