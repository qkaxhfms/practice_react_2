import React, { Component } from 'react'

class Test3 extends Component {
    state = {
        count: 0
    }

    increasement = () => {
        this.setState({
            count: this.state.count +1,
        });
    }
    decreasement = () => {
        this.setState({
            count:this.state.count -1
        })
    }

    render() {
        const {count} = this.state;
        return (
            <div>
                <h2>카운트 : {count}</h2>
                <div>
                    <button onClick={this.increasement}>증가</button>
                    <button onClick={this.decreasement}>감소</button>
                </div>
            </div>
        );
    }
}

export default Test3;