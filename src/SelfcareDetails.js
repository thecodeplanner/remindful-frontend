
import React, {useState} from "react"
import SelfcareForm from './SelfcareForm'

function SelfcareDetails({selfcare, dayId}) {
    const [allSelfcareItems, setAllSelfcareItems] = useState(selfcare)


    const selfcareItems = allSelfcareItems.map((selfcare) => {
        return (
            <div>
                <i className="heart outline icon" />
                <span>{selfcare.description}</span>
            </div>
            
        )
    })


    function handleSelfcare(newSelfcare) {
        const newSelfcareList = [...allSelfcareItems, newSelfcare]
        setAllSelfcareItems(newSelfcareList)
    }
    return (
        <div>
            <h3>Selfcare Checklist:</h3> 
            <SelfcareForm dayId={dayId} setAllSelfcare={handleSelfcare} />
            <div>
                {selfcareItems}
            </div>
        </div>

    )
}

export default SelfcareDetails