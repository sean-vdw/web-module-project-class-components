import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <input onChange={this.props.handleChanges} type="text" name="todo"/>
        <button type="submit" onClick={() => this.props.handleAddTodo(this.props.input)}>Add Todo</button>
      </div>
    );
  }
}

export default TodoForm;