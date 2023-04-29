import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

export default props => {
    console.warn(props)
    const {ale} = props
    const aleatorio = parseInt(Math.random() * 100)
    return(
        <Text style={Estilo.txtGrande}>
            Número aleatório {ale}: {aleatorio}
        </Text>
    )
}