import React, { Component } from 'react'

export default class HelloWorld extends Component {
    state = {
        who: 'world'
    }
    handleClick = (e) => {
        this.setState({
            who: e.target.innerText
        })
    }
    render() {
        return (
        <div>
            <p>Hello {this.state.who}</p>
            <button onClick={this.handleClick}>World</button>
            <button onClick={this.handleClick}>Friend</button>
            <button onClick={this.handleClick}>React</button>
        </div>
        )}
    
}
