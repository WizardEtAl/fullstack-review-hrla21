import React, { Component } from 'react';
import reactDOM from 'react-dom';
import Login from './Login';
import Home from './Home';



class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
  }

  toggleLogin () {
    console.log('toggle happenin');
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  }

  render() {
    return (
      <div>{ this.state.isLoggedIn ?
        <Home />
        :
        <Login toggleLogin={this.toggleLogin.bind(this)}/>
      }

      </div>
    );
  }
}

reactDOM.render(<App />, document.getElementById('app'));
