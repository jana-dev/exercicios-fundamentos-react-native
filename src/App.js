import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'

//import Quadrado from './components/layout/Quadrado'
import FlexBoxV1 from './components/layout/FlexBoxV1'
//import DigiteSeuNome from './components/DigiteSeuNome'
//import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
//import ListaProdutos from './components/produtos/ListaProdutos'
//import UsuarioLogado from './components/UsuarioLogado'
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membro'
//import ParImpar from './components/ParImpar'
//import Diferenciar from './components/Diferenciar'
//import ContadorV2 from './components/contador/ContadorV2'
//import Pai from './components/indireta/Pai'
//import Pai from './components/direta/Pai'
//import Contador from './components/Contador'
// import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import Aleatorio from './components/Aleatorio'
// import MinMax from './components/MinMax'
// import Multi, {Comp1, Comp2} from './components/Multi'
// import Primeiro from './components/Primeiro'

export default () => (
    <SafeAreaView style={style.App}>
        <FlexBoxV1 />
        {/* <DigiteSeuNome /> */}
        {/* <ListaProdutosV2 /> */}
        {/* <ListaProdutos /> */}
        {/* <UsuarioLogado usuario={ {nome: 'Jana', email: 'jana@jana.com'} } />
        <UsuarioLogado usuario={ {email: 'jana@jana.com'} } /> */}
        {/* <Familia>
            <Membro nome="Bia" sobrenome="Arruda" />
            <Membro nome="Lara" sobrenome="Arruda" />
        </Familia>
        <Familia>
            <Membro nome="Ana" sobrenome="Silva" />
            <Membro nome="Joao" sobrenome="Silva" />
        </Familia> */}
        {/* <ParImpar num={5}/> */}
        {/* <Diferenciar /> */}
        {/* <ContadorV2 /> */}
        {/* <Pai /> */}
        {/* <Pai /> */}
        {/* <Contador inicial={100} passo={5} />
        <Contador/> */}
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
    </SafeAreaView>
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