import React from "react"

function Sort({ASC, onSetASC}) {

    console.log(ASC)

    return (
        <div className='ui fitted slider checkbox'>
                <input
                type='radio'
                // tabindex='0'
                value={ASC}
                onChange={() => {onSetASC(!ASC)}}
                />
            <label> ASC
            </label>
        </div>


    )

}

export default Sort