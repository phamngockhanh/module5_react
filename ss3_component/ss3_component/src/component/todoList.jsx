import { Component } from "react";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      todos: [],
    };
  }

  handleChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  handleAddTodo = () => {
    const { inputText, todos } = this.state;
    if (inputText.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputText,
      };
      this.setState({
        todos: [...todos, newTodo],
        inputText: "",
      });
    }
  };

  handleDeleteTodo = (id) => {
    const updatedTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: updatedTodos });
  };

  render() {
    return (
      <div style={{ maxWidth: "400px", margin: "auto", marginTop: "50px" }}>
        <h2>To do App</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            value={this.state.inputText}
            onChange={this.handleChange}
            placeholder="Nhập công việc..."
          />
          <button onClick={this.handleAddTodo}>Thêm</button>
        </div>
        <ul style={{ marginTop: "20px" }}>
          {this.state.todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button
                onClick={() => this.handleDeleteTodo(todo.id)}
                style={{ marginLeft: "10px", color: "red" }}
              >
                Xoá
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
