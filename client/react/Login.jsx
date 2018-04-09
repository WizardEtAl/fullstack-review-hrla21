import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

  }

  onChangeHandler (e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }

  onSignUpHandler () {
    console.log('clicked');
    axios.post('/api/users', {
      username: this.state.username,
      password: this.state.password
    })
      .then(function (response) {
        console.log('this is a response', response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onLoginHandler () {
    console.log('login clicked');
    axios.get(`/api/users/${this.state.username}/${this.state.password}`)
      .then((response) => {
        if (response.status === 201) {
          this.props.toggleLogin();
        }
        console.log('this is a response form login', response);
      })
      .catch( (error) => {
        console.log(error);
      });
  }


  render() {
    return (
      <div>
        Username:
        <input name="username" onChange={this.onChangeHandler.bind(this)}></input> 
        Password:
        <input name="password" onChange={this.onChangeHandler.bind(this)}></input> 
        <button onClick={this.onLoginHandler.bind(this)}>Login</button>    
        <button onClick={this.onSignUpHandler.bind(this)}>Sign Up</button>
      </div>
    );
  }
}

export default Login;