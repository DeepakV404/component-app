import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from '../userContext'

class ComponentB extends Component {
    render() {
        return (
            <div>
                <ComponentC/>
                <h3>{this.context} comes from contexttype withut using context consumer</h3>
            </div>
        )
    }
}

ComponentB.contextType = UserContext
//now the context can be used using this

export default ComponentB
