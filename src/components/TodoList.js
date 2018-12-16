import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(todo) {
    return () => this.props.markCompleted({
      ...todo,
      completed: !todo.completed
    });
  }
  render() {
    const { todos } = this.props;
    return (
      <div>
        <h3>todo list</h3>
        <ul>
          {todos.map(todo => (
            <li key={todo.text} onClick={this.handleClick(todo)}>
              <input type="checkbox" disabled checked={todo.completed} />
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
