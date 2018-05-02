import React from 'react';
import Button from '../Button';
import TextInput from '../TextInput';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    // Conditionally load a component:
    return (
      <div>
        <TextInput />
        <TextInput />
        <Button data="hello"/>
      </div>
    );
  }
}

export default Login;