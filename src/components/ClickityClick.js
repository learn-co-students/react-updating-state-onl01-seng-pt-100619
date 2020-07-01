// Code ClickityClick Component Here
import React from 'react';
import ButtonCounter from './ButtonCounter';
import LightSwitch from './LightSwitch';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    };
  }
 
  handleClick = () => {
    // Update our state here...
    this.setState({
        hasBeenClicked: true
      }, () => console.log(this.state.hasBeenClicked)) // prints true because state changes happen asynchronously
    //   console.log(this.state.hasBeenClicked); // prints false

  };
 
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
        <ButtonCounter/>
        <LightSwitch/>
      </div>
    );
  }
}
 
export default ClickityClick;