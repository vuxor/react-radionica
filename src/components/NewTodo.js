import React from 'react';

class NewTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoText: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState({
      newTodoText: e.target.value,
    });
  }
  handleClick() {
    this.props.addTodo({
      text: this.state.newTodoText,
      completed: false,
    });
    this.setState({ newTodoText: '' });
  }
  render() {
    const { newTodoText } = this.state;
    return (
      <div>
        <input type="text" value={newTodoText} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add todo</button>
      </div>
    );
  }
}

export default NewTodo;
