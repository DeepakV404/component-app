import React, { Component } from 'react';

class ClassComponent extends Component{
    render(){
        return (
            <div>
                <h1>Hey there!!</h1>
                <h2>This is a class component</h2>
                <h2>
                    {this.props.clsProps}
                </h2>
                {this.props.children}
            </div>
        )
    }
}

export default ClassComponent;