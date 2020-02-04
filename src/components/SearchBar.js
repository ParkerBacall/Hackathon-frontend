import React from 'react'

export default function SearchBar({searchTerm, updateSearchTerm}) {
    const handleChange = event => {
        updateSearchTerm(event.target.value)
    }
    return (
        <div>
            <input
            type=""
            value={searchTerm}
            placeholder="Search a Cosmonaut"
            onChange={handleChange}
            ></input>
        </div>
    )
}
