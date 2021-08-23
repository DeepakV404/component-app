import React, { Component } from 'react';
import { ValueConsumer } from '../userContext';


class ComponentC extends Component {
    render() {
        return (
            <div>
               <ValueConsumer>
                    {
                        (userName) => {
                            return (
                                <div>
                                    <h1>Hi {userName} Ur name is brought here using Context without forwarding thro the other components</h1>
                                </div>
                            )
                        }
                    }
               </ValueConsumer> 
            </div>
        )
    }
}

export default ComponentC

