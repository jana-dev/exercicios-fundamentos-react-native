import React from 'react'
import {View, StyleSheet} from 'react-native'

import Quadrado from './Quadrado'

export default props => {
    return(
        <View>
            <Quadrado cor='#696969' />
            <Quadrado cor='#9095E4' />
            <Quadrado cor='#D290E4' />
            <Quadrado cor='#9BE490' />
            <Quadrado cor='#E4909F' />
        </View>
    )
}