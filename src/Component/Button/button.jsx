import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    // Conditionally load a component:
    return (
      <button type="button" className="default-button">{this.props.data}</button>
    );
  }
}

export default Button;