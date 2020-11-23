import React, { Component } from 'react'

class Test2 extends Component {
    render() {
        const title = '타이틀';
        return (
            <div>
                <h2>메인 {title}</h2>
                <Test2Sub title={title} name='홍길동' age={20} addr='서울' color='green'/>
            </div>
        );
    }
}

class Test2Sub extends Component {
    render() {

        const {
            title,name,age,addr,color
        } = this.props;
        return (
            <div>
                <h2>Sub {title}</h2>
                <ul>
                    <li>이름:{name}</li>
                    <li>나이:{age}</li>
                    <li>주소:{addr}</li>
                    <li style={{color:color}}>색:{color}</li>
                </ul>
                <hr />
                <Test2SubSub name={name} age={age} color='pink' msg='지금은 연습중' />
            </div>
        );
    }
}


class Test2SubSub extends Component {
    render() {
        return (
            <div>
                <h2>SubSub</h2>
                <ul>
                    <li>이름:{this.props.name}</li>
                    <li>나이:{this.props.age}</li>
                    <li>주소:{this.props.addr}</li>
                    <li style={{ backgroundColor:this.props.color }}>색:{this.props.color}</li>
                </ul>
                <hr />
            </div>
        );
    }
}

export default Test2;