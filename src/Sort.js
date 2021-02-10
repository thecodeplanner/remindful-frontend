import React, {useState} from "react"

function Sort({ASC, onSetASC, handleSort}) {

    console.log(ASC)

    // function handleSort() {
    //     onSetASC(!ASC)
    // }

    return (
        <div className='ui fitted slider checkbox'>
                <input
                type='radio'
                // tabindex='0'
                checked={ASC}
                onClick={handleSort}
                // onChange={() => {onSetASC(!ASC)}}
                />
            <label>
            </label>
        </div>


    )

}

export default Sort