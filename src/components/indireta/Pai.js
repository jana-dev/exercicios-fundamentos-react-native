import React, {useState} from 'react'
import Filho from './Filho'
import { Text } from 'react-native'
import Estilo from '../estilo'

export default props => {
    const [texto, setTexto] = useState('')
    const [num, setNum] = useState(0)

    function exibirValor(numero, texto){
        setNum(numero)
        setTexto(texto)
    }


    return(
        <>
            <Text style={Estilo.txtGrande}>
                {texto}{num}
            </Text>
            <Filho 
            min={1} //comu direta passando dados para o filho
            max={60} 
            funcao={exibirValor}  //comu indireta passando uma funcao pro comp filho
        />
        </>
        
    )
}