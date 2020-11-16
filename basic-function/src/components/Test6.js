import React, { Component } from 'react'

class Test6 extends Component {
    state = {
        name: "이름",
    };

    handleClick = () => {
        console.log("클릭");
    };

    handleClick1 = () => {
        // console.log("1번 클릭");
        this.setState({
            name:"1번 버튼"
        })
    };

    handleClick2 = () => {
        this.setState({
            name:"2번 버튼"
        })
    }
    handleClick3 = () => {
        this.setState({
            name:"3번 버튼"
        })
    }

    render() {
        return (
            <div>
                <h2>타이틀:{this.state.name}</h2>
                <div>
                    <button onClick={this.handleClick}>가나다</button>
                    <button onClick={this.handleClick1}>라마바</button>
                    <button onClick={this.handleClick2}>사아자</button>
                    <button onClick={this.handleClick3}>차타하</button>
                </div>
            </div>
        );
    }
}

export default Test6;