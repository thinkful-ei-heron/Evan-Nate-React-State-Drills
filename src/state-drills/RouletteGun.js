import React, { Component } from 'react'

export default class RouletteGun extends Component {
    static defaultProps = {
        bulletInChamber: 8
    };
    state = {
        chamber: null,
        spinningTheChamber: false
        
    }
    handleClick = (e) => {
        this.setState({
            spinningTheChamber: true
        })
        setTimeout(() => {
           const random = Math.ceil(Math.random() * 8)
           this.setState({
               chamber: random,
               spinningTheChamber: false
           })
        }, 2000)
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }
    
    contentRender(){
        const { chamber, spinningTheChamber } = this.state
        const {bulletInChamber} = this.props
        if (spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger!...'
        }
        else if (chamber === bulletInChamber) {
            return 'BANG!!!!'
        }
        else {
            return 'you are safe'
        }
    }

    render() {
        return (
        <div>
            <p>{this.contentRender()}</p>
            <button onClick={this.handleClick}>Pull the Trigger</button>
        </div>
        )}
    
}