import React from "react";

class Todo extends React.Component {

  handleClick = () => {
    this.props.handleCompletedTodo(this.props.todo);
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>{this.props.todo.task}</p>
      </div>
    )
  }
}

export default Todo;