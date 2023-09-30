import React from 'react'
import {Text} from 'react-native'
import Estilo from '../estilo'

import produtos from './produtos'

export default props => {
    function obterLista(){
        return produtos.map(p =>{
            return (
                <Text key={p.id}>{p.id} - {p.nome} R$ {p.preco}</Text>
                //é recomendável sempre criar uma key única ao renderizar uma lista
            )
        })
    }
    return(
        <>
            <Text style={Estilo.txtGrande}>Lista de Produtos</Text>
            {obterLista()}
        </>
       
    )
}