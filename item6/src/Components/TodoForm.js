import React, { Component } from "react";

class TodoForm extends Component {
    textInput = React.createRef();
    state = {
        text: "",
    };
    listChange = (e) => {
        const { value } = e.target;
        this.setState({
            text: value,
        });
    };

    listSubmit = (e) => {
        e.preventDefault();
        const { text } = this.state;
        const { onAdd } = this.props;

        onAdd(text);

        this.setState({
            text: "",
        });
        this.textInput.current.focus();
    };

    render() {
        const { text } = this.state;
        return (
            <form className="TodoForm" onSubmit={this.listSubmit}>
                <input type="text" ref={this.textInput} value={text} onChange={this.listChange} />
                <button type="submit">입력</button>
            </form>
        );
    }
}

export default TodoForm;
