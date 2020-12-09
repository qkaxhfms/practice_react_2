import React, { Component } from 'react';
import './test.css'

class Test5 extends Component {
    textInput = React.createRef();
    state = {
        done: false,
    };
    handleToggle = () => {
        const value = this.textInput.current.value;
        this.textInput.current.value = 
            this.state.done ? value.toLowerCase() : value.toUpperCase();
        this.setState({
            done: !this.state.done
        });
    };
    render() {
        return (
            <div className="inner">
                <h2>Ref</h2>
                <input type="text" ref={this.textInput} />
                <div className="buttonContainer">
                    <button type="button" onClick={this.handleToggle}>
                        텍스트 변환
                    </button>
                </div>
            </div>
        );
    }
}

export default Test5;