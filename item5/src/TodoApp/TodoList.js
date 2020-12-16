import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        const {todos, onRemove} = this.props
        return (
            <div className="todoList">
                <ul>
                    {
                        todos.map(todo => 
                        <TodoItem
                            key={todo.no}
                            todo={todo}
                            onRemove={onRemove}
                        />)
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList