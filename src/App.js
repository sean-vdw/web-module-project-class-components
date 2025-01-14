import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todos = [
  {
    task: "Complete this module project",
    id: Date.now(),
    completed: false
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos,
      input: ""
    };
  }

  // Toggle Todo Complete
  handleCompletedTodo = (selectedTodo) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if (todo.id === selectedTodo.id) {
          return({
            ...todo,
            completed: !todo.completed
          })
        } else {
          return todo;
        }
      })
    });
  }

  // Add Todo 
  handleAddTodo = (todoName) => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state, 
      todos: [...this.state.todos, newTodo]
    });
  }

  // Clear Completed Todos
  handleClearCompleted = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return !todo.completed;
      })
    });
  }

  // Form handle changes
  handleChanges = e => {
    this.setState({
      ...this.state,
      input: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <TodoList handleCompletedTodo={this.handleCompletedTodo} todos={this.state.todos}/>
          <TodoForm 
            handleAddTodo={this.handleAddTodo}
            handleChanges={this.handleChanges}
            input={this.state.input}
          />
          <button onClick={this.handleClearCompleted}>Clear Completed</button>
        </div>
      </div>
    );
  }
}

export default App;
