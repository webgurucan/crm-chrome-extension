import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';

export default class Header extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  handleSave = (text) => {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  };

  render() {
    return (
      <header>
        <h1>Sales Tool</h1>
        <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholder="Please input some information for Sales Analysis."
        />
      </header>
    );
  }
}
