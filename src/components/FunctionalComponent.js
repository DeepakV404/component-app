import React from 'react';
import NstComponent from './NestedComponent';

const FunctionalComponent = () => {
    return (
        <div>
            <h1>Hello!!</h1>
            <h2>This is a functional component</h2>
            <NstComponent/>
        </div>
    )
}

export default FunctionalComponent;