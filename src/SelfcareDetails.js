
function SelfcareDetails({selfcare}) {
    const selfcareItems = selfcare.map((selfcare) => {
        return (
            <li>{selfcare.description}</li>
        )
    })
    return (
        <div>
            <h3>Selfcare Checklist:</h3> 
            <div>
                {selfcareItems}
            </div>
        </div>

    )
}

export default SelfcareDetails