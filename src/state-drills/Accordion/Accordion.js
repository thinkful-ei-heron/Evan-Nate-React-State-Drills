import React, {Component} from 'react';

export default class Accordion extends Component {
    static defaultProps = {
        sections: []
    }

    state = {
       currentSectionIndex: null 
    }

    changeSectionIndex = (Index) => {
        if(Index === this.state.currentSectionIndex){
            this.setState({currentSectionIndex: null}); 
        }
        else{
        this.setState ({ currentSectionIndex: Index})
        }
    }

    renderContent(section, index, currentSectionIndex) {
        return (
            <li key={index}>
                <button type='button' onClick={() => this.changeSectionIndex(index)}>{section.title}</button>
                {(currentSectionIndex === index) && <p>{section.content}</p>}
            </li>
        )
    }

    render() {
        const {currentSectionIndex} = this.state
        const {sections} = this.props
        return (
            <ul>
                {sections.map((section, index) =>
                    this.renderContent(section, index, currentSectionIndex))}
            </ul>
        )
    }
}
