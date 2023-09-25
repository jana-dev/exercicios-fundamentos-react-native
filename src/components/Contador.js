import React, {useState} from 'react'
import {Text, Button} from 'react-native'
import Estilo from './estilo'

export default ({inicial = 1, passo = 1}) => {
   // let numero = props.inicial

    /*
    usando o useState para criar uma variável de estado número
    useState retorna um array com dois elementos: o estado atual (numero)
    e uma função para atualizar o estado (setNumero)
    O estado é inicializado com o valor passado como (inicial)
    */
    const [numero, setNumero] = useState(inicial)
    const inc = () => setNumero(numero + passo)
    const dec = () => setNumero(numero - passo)
    return(
        <>
            <Text style={Estilo.txtGrande}>{numero}</Text>
            <Button title="+" onPress={inc} />
            <Button title="-" onPress={dec} />
        </>
    )
}