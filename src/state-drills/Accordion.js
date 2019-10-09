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

    renderContent(section, currentSectionIndex) {
        console.log(this.section.content)
        return (
            <li>
                <button onClick={() => this.changeSectionIndex()}></button>
                <title>{section.title}</title>
                <p>{this.section.content}</p>
            </li>
        )
    }

    render() {

    }
}


handleButtonClick(index) {
    console.log('button clicked!', { index })
  }
renderButtons() {
    return this.props.tabs.map((sections, index) => (
      <button key={index} onClick={() => this.handleButtonClick(index)}>
        {tab.name}
      </button>
    ))
  }