import "./App.css"

import React from "react";

import Mega from "./components/mega/Mega";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Familia from "./components/basicos/Familia"
import Card from "./components/layout/Card";
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from "./components/basicos/Aleatorio";



export default _ =>
    <div className="App">

        <h1>Fundamentos React </h1>

        <div className="Cards">

            <Card titulo="#014 - Desafio Mega" color="#009688">
                <Mega qtde={8}></Mega>
            </Card>

            <Card titulo="#013 - Contador" color="#251e3e">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#012 - Componente Controlado (Input)" color="#fe4a49">
                <Input></Input>
            </Card>

            <Card titulo="#011 - Cominicação Indireta" color="#451e3e">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#010 - Cominicação Direta" color="#008744">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#009 - Renderização Condicional 2" color="#1e1f26">
                <UsuarioInfo usuario={{ nome: "Deriki" }}></UsuarioInfo>
                <UsuarioInfo usuario={{ email: "der@test.com" }}></UsuarioInfo>
            </Card>

            <Card titulo="#008 - Renderização Condicional 1" color="#283655">
                <ParOuImpar numero={20}></ParOuImpar>
            </Card>

            <Card titulo="#007 - Desafio Repetição" color="#fe9c8f">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#006 - Repetição" color="#011f4b">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#005 - Componentes com Filhos" color="#fe8a71">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#004 - Desafio Aleatorio" color="#2ab7ca">
                <Aleatorio min={1} max={10}></Aleatorio>
            </Card>

            <Card titulo="#003 - Fragmento" color="#f4b6c2">
                <Fragmento />
            </Card>

            <Card titulo="#002 - ComParametro" color="#6497b1">
                <ComParametro
                    titulo="Segundo Componente"
                    subtitulo="Muito Legal!!!"
                />
            </Card>

            <Card titulo="#001 - Primeiro" color="#651e3e">
                <Primeiro />
            </Card>

        </div>

    </div>

