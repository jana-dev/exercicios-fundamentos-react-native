import React from 'react'
import {View, Text} from 'react-native'
import Estilo from './estilo'

export default props => {
    return(
        <View>
            <Text style={Estilo.txtGrande}>O resultado é: </Text>
            {
                props.num % 2 === 0
                    ? <Text style={Estilo.txtGrande}>Par</Text>
                    : <Text style={Estilo.txtGrande}>Ímpar</Text>
            }
        </View>
    )
}