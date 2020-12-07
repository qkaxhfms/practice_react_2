import React, { Component } from 'react';

class Test1 extends Component {
    state={
        text1:'',
        text2:''
    }
    render() {
        return (
            <div>
                <h2>Input</h2>
                <div>
                    <input type="text" onChange={(e) => this.setState({ text1: e.target.value })} />
                    <input type="text" onChange={(e) => this.setState({ text2: e.target.value })} />
                </div>
                <ul>
                    <li>첫번째 :{this.state.text1}</li>
                    <li>두번째 :{this.state.text2}</li>
                </ul>
            </div>
        );
    }
}

export default Test1;