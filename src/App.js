import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };

    this.alert = this.alert.bind(this);
  }

  say() {
    return `${this.props.hello} ${this.state.name}!`;
  }

  alert() {
    // eslint-disable-next-line
    alert(this.say());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" onClick={this.alert}>
          {this.say()}
        </header>
      </div>
    );
  }
}

App.defaultProps = {
  hello: 'Hello',
};

App.propTypes = {
  hello: PropTypes.string,
};

export default App;
