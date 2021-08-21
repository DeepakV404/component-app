import React, { Component } from 'react';

class stateComponent extends Component{
    constructor(){
        super()
        this.state = {
            value : "This the value before altering the state",
            numberVal : 25,
            buttonVal: "Click",
            buttonCount: 0
        }
    }
    
    counter = () => {
        this.setState({
            value : "This the value after altering the state",
            numberVal: 100,
            buttonVal: "Clicked!!",
            buttonCount: this.state.buttonCount + 1
        })
    }
    render(){
        //destructuring....
        const {value, numberVal, buttonVal, buttonCount} = this.state
        return (
            <div>
                <h1>{value}</h1>
                <h1>{numberVal}</h1>
               <button onClick={this.counter}>{buttonVal} - {buttonCount}</button>
            </div>
        )
    }
}

export default stateComponent;