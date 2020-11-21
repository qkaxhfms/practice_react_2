import React, { Component } from 'react';

class Test8 extends Component {
    render() {
        const myName = '아무개'
        return (
            <div>
                <Sub 
                    title={myName}
                    age={20}
                />
            </div>
        )
    }
}

class Sub extends Component {
    render() {
        const {title,age} = this.props;
        return (
            <div>
                <h2>Repeat</h2>
                <p>{title}</p>
                <p>{age}</p>
            </div>
        );
    }
}

export default Test8;