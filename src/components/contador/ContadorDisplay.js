import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Estilo from '../estilo'

export default props => {
    return (
        <View style={style.Display}>
            <Text style={[Estilo.txtGrande, style.DisplayText]}>
                {props.num}
            </Text>
        </View>

    )
}

const style = StyleSheet.create({
    Display:{
        width: 100,
        padding: 20,
    },
    DisplayText:{
        color: 'white',
        textAlign: 'center'
    }
})