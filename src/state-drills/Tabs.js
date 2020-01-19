import React from 'react'; 

class Tabs extends React.Component { 
  static defaultProps = {
    tabs: []
  };
  state = {
    currentTabIndex: 0
  }

  handleButtonClick = (index) => {
    this.setState({ currentTabIndex: index })
  }

  renderButtons() {
    return this.props.tabs.map((tab, index) => (
      // arrow function to see which button is clicked 
      <button key={index} onClick={() => this.handleButtonClick(index)}>
        {tab.title}
      </button>
    ))
  }
  renderContent() {
    const currentTab = this.props.tabs[this.state.currentTabIndex]
    return (
      <div className='content'> 
        {currentTab.content}
      </div>
    )
  }
  render() {
    return (
      <div> 
        {this.renderButtons()}
        {!!this.props.tabs.length && this.renderContent()}
      </div>
    )
    
  }
}

export default Tabs;