import React from "react"

function Sort({ASC, onSetASC}) {

    // function handleToggle() {
    //     onSetASC(!ASC)
    // }

    return (
        <div className='ui fitted slider checkbox'>
                <input
                type='radio'
                tabindex='0'
                checked={ASC}
                onChange={() => onSetASC(!ASC)}
                />
            <label> Sort ASC
            </label>
        </div>


    )

}

export default Sort