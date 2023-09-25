import React from 'react'
import {View, StyleSheet} from 'react-native'


import Contador from './components/Contador'
// import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import Aleatorio from './components/Aleatorio'
// import MinMax from './components/MinMax'
// import Multi, {Comp1, Comp2} from './components/Multi'
// import Primeiro from './components/Primeiro'

export default () => (
    <View style={style.App}>
        <Contador inicial={100} passo={5} />
        <Contador/>
        {/* <Botao /> */}
        {/* <Titulo principal="Cadastro" secundario="Tela de Cadastro de Produto" /> */}
        {/* <Aleatorio min={1} max={160} />
        <Aleatorio min={1} max={160} /> */}
        {/* <MinMax min={3} max={20} />
        <MinMax min={15} max={45} /> */}
        {/* <Multi />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </View>
)

const style = StyleSheet.create({
    App:{
        backgroundColor: '#ADD8E6',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})