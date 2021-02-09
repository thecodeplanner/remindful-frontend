import React from 'react'

function Search({onSearch}) {
    return (
        <div className="ui search">
            <div className="ui icon input">
                <input className="prompt" type="text" placeholder="search by gratitude..." onChange={(e) => {onSearch(e.target.value)}}/>
                    <i className="search icon"></i>
            </div>
                <div className="results"></div>
            </div>
    )
}

export default Search