import React from 'react'
import Missions from './Missions'

export default function CosmonautCardBack({cosmonaut}) {
    
    const showMissions = cosmonaut.missions.map(mission => {
        return (<Missions mission={mission} />)
    })

    return (
        <div class='cosmoCardBack'>
        <h4>{cosmonaut.first_name} {cosmonaut.last_name}</h4>
        {cosmonaut.died_in_space === 1 ?<> <img id='youDied' src='dead.png' /> <p>Died in Space</p> </>: showMissions}
        </div>
    )
}
