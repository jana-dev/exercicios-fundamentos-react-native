import React from 'react'
import Filho from './Filho'

export default props => {
    let x = 13
    let y = 100
    return(
       <>
            <Filho a={x} b={y}/>
            <Filho a={x + 445} b={y + 20}/>
       </>
    )
}