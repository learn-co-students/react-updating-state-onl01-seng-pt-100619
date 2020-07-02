// Code ClickityClick Component Here
import React, { Component } from 'react';

export default class ClickityClick extends Component {
    constructor() {
        super();
        this.state = {
            hasBeenClicked: false
        };
    }

    //This works, but React actually provides a built in solution. Instead of passing an object into setState, 
    //we can also pass a function. That function, when called inside setState will be passed the component state 
    //from when that setState was called. This is typically referred to as the previous state
    
    handleClick = () => {
        this.setState( previousState => {
            return {
                hasBeenClicked: !previousState.hasBeenClicked
            }
          
        })
      }

    render() {
        return (
           <div>
            <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
            <button onClick={this.handleClick}>Click me!</button>
           </div>
        )
    }
}

