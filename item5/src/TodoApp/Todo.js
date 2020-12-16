import React, { Component } from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class Todo extends Component {
    no = 1;
    state = {
        todos: [],
    };

    listAdd = (text) => {
        const { todos } = this.state;
        this.setState({
            todos: todos.concat({ no: this.no++, text }),
        });
        // list추가
    };
    listToggle = () => {
        // list토글
    };
    listDelete = (id) => {
        // list삭제
        const {todos} = this.state;
        this.setState({
            todos:todos.filter(todo => todo.no !== id)
        })
    };

    render() {
        const {todos} = this.state;
        return (
            <div>
                <h2>Todo</h2>
                <TodoForm onAdd={this.listAdd} />
                <TodoList onRemove={this.listDelete} todos = {todos}/>
            </div>
        );
    }
}

export default Todo;