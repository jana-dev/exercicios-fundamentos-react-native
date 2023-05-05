import React from 'react'
import {View , StyleSheet} from 'react-native'
//import Primeiro from './components/Primeiro'
//import CompPadrao, {Comp1, Comp2} from './components/Multi'
//import MinMax from './components/MinMax'
//import Aleatorio from './components/Aleatorio'
//import Titulo from './components/Titulo'
//import Botao from './components/Botao'
//import Contador from './components/Contador'
//import Pai from './components/direta/Pai'
//import Pai from './components/indireta/Pai'
//import ContadorV2 from './components/contador/ContadorV2'
import Diferenciar from './components/Diferenciar'

export default () => (
    <View style={style.App}>
       <Diferenciar />
        {/* 
            <ContadorV2 />
            <Pai />
            <Pai />
            <Titulo principal="Cadastro Produto"
            secundario="Tela de Cadastro" />
            <Aleatorio ale="1"/>
            <Aleatorio ale="2"/>
            <Aleatorio ale="3"/>
            <MinMax min={3} max={20} /> 
            <MinMax min={5} max={13} />
        */}
        
        {/* 
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro />
        */}
        
    </View>
)

const style = StyleSheet.create({
    App:{
        backgroundColor: 'pink',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }
})