import React, { Component } from 'react'

class Test6 extends Component {
    state = {
        text: "",
    };

    handleChange = (event) => {
        this.setState({
            text: event.target.value,
        });
    };

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} />
                <h3>text:{this.state.text}</h3>
            </div>
        );
    }
}

export default Test6;