// Code ClickityClick Component Here
import React, {Component} from 'react';
 
export default class ClickityClick extends Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      toggled: false
    };
  }
 
  handleClick = () => {
    // Update our state here...
    this.setState(previousState => {
        return {
            toggled: !previousState.toggled
        }
    })

    console.log(this.state.hasBeenClicked);
  };
 
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
      </div>
    );
  }
}