import React, { Component } from 'react'

class TodoForm extends Component {

    state = {
        text:''
    }

    listChange = (e) => {
        const {value} = e.target
        this.setState({
            text:value
        })
    }

    listSubmit = (e) => {
        e.preventDefault();
        const {text} = this.state
        const {onAdd} = this.props

        onAdd(text)

        this.setState({
            text:''
        })
    }
    // no:1, text:'아무개'

    render() {
        const {text} = this.state;
        return (
            <form onSubmit={this.listSubmit}>
                <input type="text" value={text} onChange={this.listChange} />
                <button type="submit">입력</button>
            </form>
        )
    }
}

export default TodoForm;