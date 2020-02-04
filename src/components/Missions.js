import React from 'react'

export default function Missions({mission}) {
    console.log(mission)
    return (
        <div>
            <p>{mission.name}</p>
        </div>
    )
}
