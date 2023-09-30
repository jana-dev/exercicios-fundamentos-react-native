import React from 'react'
import {View} from 'react-native'

export default props => {
    const lado = 40
    return(
       <View style={{
            height: lado,
            width: lado,
            backgroundColor: props.cor || '#000'
       }}>

       </View>
    )
}
