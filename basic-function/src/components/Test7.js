import React, { Component } from 'react'

class Test7 extends Component {
    render() {
        const myName = '아무개';
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
    render(){
        const {title,age} = this.props;
        return (
            <div>
                <h2>Hello</h2>
                <p>{title}</p>
                <p>{age}</p>
            </div>
        );
    }
}

export default Test7;