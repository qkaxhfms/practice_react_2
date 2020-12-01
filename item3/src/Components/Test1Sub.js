import React, { Component } from 'react';
import Test1SubSub from './Test1SubSub';

class Test1Sub extends Component {
    render() {
        return (
            <div>
                <h2>Test1Sub</h2>
                <div>
                    <button onClick={()=>this.props.onRemove(1)}>1번 삭제</button>
                    <button onClick={()=>this.props.onRemove(3)}>3번 삭제</button>
                    <button onClick={()=>this.props.onRemove(5)}>5번 삭제</button>
                </div>
                <Test1SubSub 
                    onModify1 = {this.props.onModify1}
                    onModify2 = {this.props.onModify2}
                />
            </div>
        )
    }
}

export default Test1Sub;