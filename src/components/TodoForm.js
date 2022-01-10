import React from "react";

class TodoForm extends React.Component {
  render() {
    console.log(this.props.input);
    return (
      <div>
        <input onChange={this.props.handleChanges} type="text" name="todo"/>
        <button onClick={() => this.props.handleAddTodo(this.props.input)}>Add Todo</button>
      </div>
    );
  }
}

export default TodoForm;