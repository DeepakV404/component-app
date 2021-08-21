import React from 'react';

const NestedComponent = (props) => {
    //destructuring...
    const {someProps, name, age, children} = props
    return(
        <div>
            <h2>I am a nested component...</h2>
            <h2>{someProps}</h2>
            <h2>{name}'s age is {age}</h2>
            {children}
        </div>
    )
}
export default NestedComponent;