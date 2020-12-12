import React, { Component } from "react";

class Test9 extends Component {
    no = 1;
    state = {
        data: [],
    };
    handleInsert = (text) => {
        const { data } = this.state;
        this.setState({
            data: data.concat({ no: this.no++, text }),
        });
    };

    handleRemove = (id) => {
        const { data } = this.state;
        this.setState({
            data: data.filter((item) => item.no !== id),
        });
    };

    render() {
        const { data } = this.state;
        return (
            <div>
                <h2> TodoList </h2>
                <Form onInsert={this.handleInsert} />
                <List data={data} onRemove={this.handleRemove} />
            </div>
        );
    }
}
class Form extends Component {
    textInput = React.createRef();

    state = {
        text: "",
    };
    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            text: value,
        });
    };
    handleAdd = (e) => {
        e.preventDefault();

        const { onInsert } = this.props;
        const { text } = this.state;
        onInsert(text);

        this.setState({
            text: "",
        });
        this.textInput.current.focus();
    };
    render() {
        const { text } = this.state;
        return (
            <form onSubmit={this.handleAdd}>
                <input type="text" value={text} onChange={this.handleChange} ref={this.textInput} />
                <button type="submit">추가</button>
            </form>
        );
    }
}
class List extends Component {
    render() {
        const { data, onRemove } = this.props;
        return (
            <div>
                {data.map((item) => (
                    <Item key={item.no} item={item} onRemove={onRemove} />
                ))}
            </div>
        );
    }
}
class Item extends Component {
    render() {
        const { item, onRemove } = this.props;
        return (
            <div>
                {item.no} / {item.text}
                <button onClick={() => onRemove(item.no)}>삭제</button>
            </div>
        );
    }
}

export default Test9;
