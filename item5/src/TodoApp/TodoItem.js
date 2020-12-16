import React, { Component } from 'react'

class TodoItem extends Component {
    render() {
        const {todo,onRemove} = this.props
        return (
            <>
                <li>
                    <span>체크박스</span>
                    <p>{todo.text}</p>
                    <button onClick={()=>onRemove(todo.no)}>삭제</button>
                </li>
            </>
        )
    }
}

export default TodoItem;