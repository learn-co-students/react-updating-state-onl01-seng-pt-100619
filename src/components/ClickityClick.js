// Code ClickityClick Component Here
import React, {Component} from 'react'

export default class ClickityClick extends Component {
    constructor() {
        super()
        this.state = {
            hasBeenClicked: false,
            toggled: false
        }
    }

    toggleClick = () => {
        this.setState(previousState => {
            return {
                toggled: !previousState.toggled
            }
        })
    }

    handleClick = () => {
        console.log(this.state)
        this.setState({hasBeenClicked: true}, () => console.log(this.state.hasBeenClicked))
        

    }

    render() {
        return (
        <div>
            <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
            <button onClick={this.handleClick}>Click Me!</button>
            <button onClick={this.toggleClick}>{this.state.toggled ? 'ON' : 'OFF'}</button>
        </div>
        )
    }

}