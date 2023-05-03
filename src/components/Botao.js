import React from 'react'
import {Button} from 'react-native'

export default props => {

    function executar(){
        console.warn("1 Executado!!!")
    }
    
    return(
        <>
            <Button 
                title="Executar 1" 
                onPress={executar}
            />
            <Button 
                title="Executar 2" 
                onPress={function(){
                    console.warn("2 Executado")
                }}
            />
            <Button 
                title="Executar 3" 
                onPress={() => console.warn("3 Executado")}
            />
        </>
    )
}