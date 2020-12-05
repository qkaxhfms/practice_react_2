import React, { Component } from "react";

class Test9 extends Component {
    nameInput = React.createRef();
    state = {
        username: "",
        userage: "",
        useraddr: "",
    };
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };
    handleReset = () => {
        this.setState({
            username: "",
            userage: "",
            useraddr: "",
        });
        this.nameInput.current.focus();
    };
    render() {
        const {username,userage,useraddr} = this.state;
        return (
            <div>
                <p>
                    이름:
                    <input type="text" ref={this.nameInput} name="username" value={username} onChange={this.handleChange} /> / 나이:
                    <input type="text" name="userage" value={userage} onChange={this.handleChange} /> / 주소:
                    <input type="text" name="useraddr" value={useraddr} onChange={this.handleChange} />
                    <button onClick={this.handleReset}>초기화</button>
                </p>
                <p>이름: {this.state.username} </p>
                <p>나이: {this.state.userage}</p>
                <p>주소: {this.state.useraddr}</p>
            </div>
        );
    }
}

export default Test9;
