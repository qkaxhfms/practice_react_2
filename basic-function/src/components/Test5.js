import React, { Component } from 'react'

class Test5 extends Component {
    handleClick1 = () => {
        console.log("누름 1");
    };
    handleClick2 = () => {
        console.log("누름 2");
    };
    handleClick3 = () => {
        console.log("누름 3");
    };
    handleClick4 = (abc) => {
        console.log("즉시실행 방지"+abc);
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick1}>클릭 1</button>
                <button onClick={this.handleClick2}>클릭 2</button>
                <button onClick={this.handleClick3}>클릭 3</button>
                <button onClick={() => this.handleClick4(100)}>클릭 4</button>
            </div>
        );
    }
}

export default Test5;