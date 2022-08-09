import "./TabelaProdutos.css"

import React from "react";
import produtos from "../../data/produtos";
export default props => {
    const tab = produtos.map((produto,i) => {
        return (
            <tr key={produto.id} className={i % 2 === 0 ? "Par" : "Impar"}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$: {produto.preco.toFixed(2).replace(".",",")}</td>
            </tr>
        )
    }) 

    return(
        <div className="TabelaProdutos">
            <table >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>PRODUTO</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    {tab}
                </tbody>

            </table>
        </div>
    )
}