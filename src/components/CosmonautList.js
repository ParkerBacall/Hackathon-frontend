import React from 'react'
import CosmonautCardFront from './CosmonautCardFront'

export default function CosmonautList({cosmonauts}) {


    const showCosmonauts = cosmonauts.map(cosmonaut => {
        return (
            <>
            <CosmonautCardFront key={cosmonaut.id} cosmonaut={cosmonaut}/>
            </>
        )
    })

    return (
        <div id='cosmoCardFrontContainer'>
            {showCosmonauts}
        </div>
    )
}
