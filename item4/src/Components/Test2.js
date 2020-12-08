import React, { Component } from 'react'

class Test2 extends Component {

    first = React.createRef();

    state = {
        username: "",
        userpwd: "",
        useraddr: "",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleReset = () => {
        this.setState({
            username: "",
            userpwd: "",
            useraddr: "",
        });
        this.first.current.focus();
    }

    render() {
        const{ username, userpwd, useraddr} = this.state;
        return (
            <div>
                <input type="text" ref={this.first} value={username} name="username" onChange={this.handleChange} />
                <input type="text" value={userpwd} name="userpwd" onChange={this.handleChange} />
                <input type="text" value={useraddr} name="useraddr" onChange={this.handleChange} />
                <button type="text" onClick={this.handleReset}>
                    초기화
                </button>
                <ul>
                    <li>이름: {username}</li>
                    <li>비밀번호: {userpwd}</li>
                    <li>주소: {useraddr}</li>
                </ul>
            </div>
        );
    }
}

export default Test2;