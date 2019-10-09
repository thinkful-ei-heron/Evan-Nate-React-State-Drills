import React from 'react';

export default class Bomb extends React.Component {
    state = {
        count: 0
    };

    componentDidMount() {
        this.interval = setInterval(() => {
        let newInterval = this.state.count + 1;
        this.setState({ 
            count: newInterval
        });
        }, 1000)
      }

    bombNoise() {
        if (this.state.count >= 8) {
        clearInterval(this.interval);
        return 'BOOM';
    }
        else return this.state.count % 2 === 0 ? 'tick' : 'tock'
    }
    render() {
        return (
        <div>
            <p>{this.bombNoise()}</p>
        </div>
        )
    }
}