import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Slogen = function (props) {
  return <div>{props.word}</div>;
};

const Null = function () {
  return null;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };

    this.alert = this.alert.bind(this);
  }

  say() {
    return `${this.props.hello} ${this.state.name.toUpperCase()}!`;
  }

  alert() {
    this.setState((state) => ({
      name: state.name + ' World',
    }));
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" onClick={this.alert}>
          <Null />
          <Slogen word={this.say()} />
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
