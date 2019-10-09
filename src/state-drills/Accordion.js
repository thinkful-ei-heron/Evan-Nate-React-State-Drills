import React from 'react';

export default class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    }

    state = {
       currentSectionIndex: 0 
    }

    changeSectionIndex = (Index) => {
        this.setState ({ currentSectionIndex: Index})
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
                    this.renderItem(section, index, currentSectionIndex))}
            </ul>
        )
    }
}