import React, {useState} from 'react'
import {Text, View, TextInput} from 'react-native'
import Estilo from './estilo'

export default props => {
    const [nome, setNome] = useState('Teste')
    return(
       <View>
            <Text>{nome}</Text>
            <TextInput 
                placeholder='Digite seu nome'
                value={nome}
                //value={null} deixa de ser um componente controlado
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}