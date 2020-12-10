import React, { Component } from 'react';
import './test.css';

export default class Test6 extends Component {
    textInput = React.createRef();
    state = {
        done: false,
    };
    handleToggle = () => {
        const value = this.textInput.current.value;
        this.textInput.current.value = this.state.done ? value.toLowerCase() : value.toUpperCase();
        this.setState({
            done: !this.state.done,
        });
    };
    render() {
        return (
            <div className="inner">
                <h2>대소문자 변환</h2>
                <input type="text" ref={this.textInput} />
                <div className="buttonContainer">
                    <button type="button" onClick={this.handleToggle}>
                        글자 변환
                    </button>
                </div>
            </div>
        );
    }
}
