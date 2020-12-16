import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class Todo extends Component {
    no = 1;
    state = {
        todos: [],
    };
    listAdd = (text) => {
        const { todos } = this.state;
        this.setState({
            todos: todos.concat({ no: this.no++, text, done: false }),
        });
    };

    listToggle = (id) => {
        const { todos } = this.state;
        this.setState({
            todos: todos.map((todo) => {
                if (todo.no === id) {
                    return {
                        ...todo,
                        done: !todo.done,
                    };
                }
                return todo;
            }),
        });
    };

    listRemove = (id) => {
        const { todos } = this.state;
        this.setState({
            todos: todos.filter((todo) => todo.no !== id),
        });
    };

    render() {
        const { todos } = this.state;
        return (
            <div className="Todo">
                <h2>Todo List</h2>
                <TodoForm onAdd={this.listAdd} />
                <TodoList onRemove={this.listRemove} todos={todos} onToggle={this.listToggle} />
            </div>
        );
    }
}

export default Todo;
