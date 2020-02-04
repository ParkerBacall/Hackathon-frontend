import React from 'react'

export default function CosmonautCardBack({cosmonaut}) {
    return (
        <div id='cosmoCardback'>
        <h4>{cosmonaut.first_name} {cosmonaut.last_name}</h4>
        <h5>{cosmonaut.died_in_space === 1 ? "Died in space" : null}</h5>
        </div>
    )
}
