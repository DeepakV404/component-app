import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: "Parent",
             isTrue: true
        }
    }

    greet = (childName) => {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
    render() {
        // Conditional rendering using ternery operator
        return this.state.isTrue ? 
            <div>
                <ChildComponent greetHandler={this.greet}/>
            </div>:
            <div>
                <h2>Hello You are logged in as guest</h2>
            </div>
            
    }
}

export default ParentComponent
