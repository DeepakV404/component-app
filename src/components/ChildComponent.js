import React from 'react'

function ChildComponent(props) {
    return (
        // passing attributes from the child to the parent is done using arrow functions...
        <div>
            <button onClick={() => props.greetHandler("ChildName")}>Alert Message</button>
        </div>
    )
}

export default ChildComponent
