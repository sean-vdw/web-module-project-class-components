import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
  }

  handleChanges = e => {
    this.setState({
      ...this.state,
      input: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddTodo(this.state.input);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChanges} type="text" name="todo"/>
      </form>
    )
  }
}

export default TodoForm;