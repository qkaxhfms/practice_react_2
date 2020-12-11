import React, { Component } from "react";

class Test8 extends Component {
    no = 1;
    text1Input = React.createRef();

    state = {
        text1: "",
        text2: "",
        data: [],
    };
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleAdd = () => {
        const { data, text1, text2 } = this.state;
        this.setState({
            data: data.concat({ no: this.no++, text1, text2 }),
            text1: "",
            text2: "",
        });
        this.text1Input.current.focus();
    };

    handleRemove = (id) => {
        const { data } = this.state;
        this.setState({
            data: data.filter((item) => item.no !== id),
        });
    };

    render() {
        const { data, text1, text2 } = this.state;
        return (
            <div>
                <input type="text" name="text1" value={text1} onChange={this.handleChange} ref={this.text1Input} />
                <input type="text" name="text2" value={text2} onChange={this.handleChange} />
                <button onClick={this.handleAdd}>입력</button>
                <ul>
                    {data.map((item) => (
                        <li key={item.no}>
                            {item.no} / {item.text1}/ {item.text2}
                            <button onClick={() => this.handleRemove(item.no)}>삭제</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Test8;
