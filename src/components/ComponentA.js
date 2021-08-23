import React, { Component } from 'react'
import ComponentB from './ComponentB'
import { AgeConsumer } from '../userContext'
class ComponentA extends Component {
    render() {
        return (
            <div>
                <ComponentB/>
                <AgeConsumer>
                    {
                        (age) => {
                            return (
                                <div>
                                    <h1>Ths is the age ..{age}. from context app component </h1>
                                </div>
                            )
                        }
                    }
                </AgeConsumer>
            </div>
        )
    }
}
  

export default ComponentA
