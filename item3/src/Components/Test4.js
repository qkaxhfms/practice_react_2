import React, { Component } from 'react'

class Test4 extends Component {
    state = {
        count:0,
    }
    increase1 = () => {
        this.setState({
            count:this.state.count +1,
        })
    }
    decrease1 = () => {
        this.setState({
            count:this.state.count -1,
        })
    }

    increase2 = () => {
        this.setState({
            count:this.state.count +1,
        })
    }

    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <div>
                    <button onClick={this.increase1}>1씩 증가</button>
                    <button onClick={this.decrease1}>1씩 감소</button>
                </div>
                <div>
                    <button>2씩 증가</button>
                    <button>2씩 감소</button>
                </div>
                <div>
                    <button>2씩 증가</button>
                    <button>2씩 감소</button>
                </div>
                <div>
                    <button>2씩 증가</button>
                    <button>2씩 감소</button>
                </div>
                <div>
                    <button>5씩 증가</button>
                </div>
            </div>
        );
    }
}

export default Test4;