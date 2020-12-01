import React, { Component } from 'react'

class Test1SubSub extends Component {
    render() {
        return (
            <div>
                <h2>Test1SubSUb</h2>
                <div>
                    <button onClick={()=>this.props.onModify1(2)}>2번 수정</button>
                    <button onClick={()=>this.props.onModify2(4)}>4번 수정</button>
                </div>
            </div>
        )
    }
}

export default Test1SubSub;