import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        const {todos, onRemove, onToggle} = this.props
        return (
            <div>
                <ul>
                    {
                        todos.map(
                            todo => <TodoItem key={todo.no} todo={todo} onRemove={onRemove} onToggle={onToggle}/>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default TodoList;