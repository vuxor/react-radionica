import React, { Component } from 'react';

import Layout1 from '../layouts/Layout1';
import NewTodo from '../components/NewTodo';
import TodoList from '../components/TodoList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.getLocalTodos(),
    };
    this.addNewTodo = this.addNewTodo.bind(this);
    this.markCompleted = this.markCompleted.bind(this);
  }
  getLocalTodos() {
    return JSON.parse(localStorage.getItem('todos')) || [];
  }
  setLocalTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  addNewTodo(newTodo) {
    const todos = [...this.getLocalTodos(), newTodo];
    this.setLocalTodos(todos);
    this.setState({ todos });
  }
  markCompleted(EditedTodo) {
    const todos = this.getLocalTodos().map(
      todo => (todo.text === EditedTodo.text ? EditedTodo : todo)
    );
    this.setLocalTodos(todos);
    this.setState({
      todos,
    });
  }
  render() {
    const { todos } = this.state;
    return (
      <Layout1>
        <section>
          <NewTodo addTodo={this.addNewTodo} />
          <TodoList todos={todos} markCompleted={this.markCompleted} />
        </section>
      </Layout1>
    );
  }
}

export default Home;
