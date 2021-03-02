import React from "react"

function Sort({ASC, handleSort}) {

    return (
        <div className='ui fitted slider checkbox'>
            
                <input
                type='checkbox'
                checked={ASC}
                onChange={handleSort}
                />
                <label></label>

        </div>


    )

}

export default Sort