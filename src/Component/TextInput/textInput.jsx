import React from 'react';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    // Conditionally load a component:
    return (
        <input type="text" />
    );
  }
}

export default TextInput;